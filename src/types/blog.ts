import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

type NotionProperties = PageObjectResponse["properties"]

export interface Blog extends Omit<PageObjectResponse, "properties"> {
    properties: {
        Title: Extract<NotionProperties[string], { type: "title" }>

        Slug: Extract<NotionProperties[string], { type: "rich_text" }>

        Tag: Extract<NotionProperties[string], { type: "select" }>

        Description: Extract<NotionProperties[string], { type: "rich_text" }>

        PublishedDate: Extract<NotionProperties[string], { type: "date" }>

        Author: Extract<NotionProperties[string], { type: "people" }>
    }
}
