import clientPromise from "#/lib/mongodb"
import type { BlogPost, BlogPostInput } from "#/types/blog"

import { Document, ObjectId, WithId } from "mongodb"

const DB_NAME = "youth-for-change"
const COLLECTION = "posts"

interface BlogPostDocument extends Omit<BlogPost, "_id"> {
    _id?: ObjectId
}

const getCollection = async () => {
    const client = await clientPromise
    return client.db(DB_NAME).collection<BlogPostDocument>(COLLECTION)
}

const generateSlug = (title: string): string => {
    return title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim()
}

const documentToPost = (doc: WithId<BlogPostDocument>): BlogPost => ({
    _id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    content: doc.content,
    excerpt: doc.excerpt,
    coverImage: doc.coverImage,
    author: doc.author,
    tags: doc.tags,
    status: doc.status,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
})

export const blogService = {
    async create(input: BlogPostInput): Promise<BlogPost> {
        const collection = await getCollection()
        const now = new Date()

        const post: BlogPostDocument = {
            title: input.title,
            slug: generateSlug(input.title) + "-" + Date.now(),
            content: input.content,
            excerpt: input.excerpt || "",
            coverImage: input.coverImage || "",
            author: input.author || "Admin",
            tags: input.tags || [],
            status: input.status || "draft",
            createdAt: now,
            updatedAt: now,
        }

        const result = await collection.insertOne(post)
        return { ...post, _id: result.insertedId.toString() }
    },

    async update(id: string, input: Partial<BlogPostInput>): Promise<BlogPost | null> {
        const collection = await getCollection()

        const updateData: Record<string, unknown> = {
            ...input,
            updatedAt: new Date(),
        }

        if (input.title) {
            updateData.slug = generateSlug(input.title) + "-" + Date.now()
        }

        const result = await collection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: updateData },
            { returnDocument: "after" },
        )

        return result ? documentToPost(result) : null
    },

    async delete(id: string): Promise<boolean> {
        const collection = await getCollection()
        const result = await collection.deleteOne({ _id: new ObjectId(id) })
        return result.deletedCount === 1
    },

    async getById(id: string): Promise<BlogPost | null> {
        const collection = await getCollection()
        const post = await collection.findOne({ _id: new ObjectId(id) })
        return post ? documentToPost(post) : null
    },

    async getBySlug(slug: string): Promise<BlogPost | null> {
        const collection = await getCollection()
        const post = await collection.findOne({ slug })
        return post ? documentToPost(post) : null
    },

    async getAll(status?: "draft" | "published"): Promise<BlogPost[]> {
        const collection = await getCollection()
        const filter = status ? { status } : {}
        const posts = await collection.find(filter).sort({ createdAt: -1 }).toArray()

        return posts.map(documentToPost)
    },
}
