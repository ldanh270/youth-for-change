"use client"

import { useEffect } from "react"

import "@blocknote/core/fonts/inter.css"
import { BlockNoteView } from "@blocknote/mantine"
import "@blocknote/mantine/style.css"
import { useCreateBlockNote } from "@blocknote/react"

interface BlogRendererProps {
    content: string
}

export function BlogRenderer({ content }: BlogRendererProps) {
    const editor = useCreateBlockNote()

    useEffect(() => {
        if (content) {
            try {
                const blocks = JSON.parse(content)
                editor.replaceBlocks(editor.document, blocks)
            } catch (e) {
                console.error("Failed to parse content:", e)
            }
        }
    }, [content, editor])

    return (
        <div className="prose prose-lg max-w-none">
            <BlockNoteView editor={editor} editable={false} theme="light" />
        </div>
    )
}
