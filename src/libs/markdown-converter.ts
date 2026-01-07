/**
 * Converter function to convert Markdown to HTML
 * @param markdown Markdown string before convert
 * @returns Converted html after process
 */
export const convertMarkdownToHTML = (markdown: string): string => {
    let html = markdown

    // Headers
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>")
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>")
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>")

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")

    // Italic
    html = html.replace(/\*(.*?)\*/gim, "<em>$1</em>")

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')

    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" />')

    // Code blocks
    html = html.replace(/```([^`]+)```/gim, "<pre><code>$1</code></pre>")

    // Inline code
    html = html.replace(/`([^`]+)`/gim, "<code>$1</code>")

    // Lists
    html = html.replace(/^\* (.*$)/gim, "<li>$1</li>")
    html = html.replace(/(<li>.*<\/li>)/gim, "<ul>$1</ul>")

    // Paragraphs
    html = html.replace(/\n\n/g, "</p><p>")
    html = "<p>" + html + "</p>"

    return html
}
