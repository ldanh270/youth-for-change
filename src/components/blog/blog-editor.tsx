"use client"

import "@blocknote/core/fonts/inter.css"
import { BlockNoteView } from "@blocknote/mantine"
import "@blocknote/mantine/style.css"
import { useCreateBlockNote } from "@blocknote/react"

interface BlogEditorProps {
    initialContent?: string
    onChange?: (content: string) => void
    editable?: boolean
}

export function BlogEditor({ initialContent, onChange, editable = true }: BlogEditorProps) {
    const editor = useCreateBlockNote({
        initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    })

    const handleChange = () => {
        if (onChange) {
            const content = JSON.stringify(editor.document)
            onChange(content)
        }
    }

    return (
        <div className="min-h-125 overflow-hidden rounded-lg border bg-white">
            <BlockNoteView
                editor={editor}
                editable={editable}
                onChange={handleChange}
                theme="light"
            />
        </div>
    )
}
