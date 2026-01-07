import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

type NotionProperties = PageObjectResponse["properties"]

export interface Blog extends Omit<PageObjectResponse, "properties"> {
    properties: {
        Title: Extract<NotionProperties[string], { type: "title" }>

        Slug: Extract<NotionProperties[string], { type: "rich_text" }>

        Tags: Extract<NotionProperties[string], { type: "multi_select" }>

        Description: Extract<NotionProperties[string], { type: "rich_text" }>

        PublishedDate: Extract<NotionProperties[string], { type: "date" }>

        Author: Extract<NotionProperties[string], { type: "people" }>
    }
}
