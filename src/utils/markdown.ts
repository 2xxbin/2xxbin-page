import hljs from 'highlight.js'
import { marked, type MarkedOptions } from 'marked'
import { markedHighlight, type SynchronousOptions } from 'marked-highlight'

const markedHighlightConfig: SynchronousOptions = {
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
}

const markedConfig: MarkedOptions = {
  async: true,
  pedantic: false,
  gfm: true,
}

export const markdownToHtml = async (markdownContent: string) => {
  marked.use(markedHighlight(markedHighlightConfig))

  const output = await marked(markdownContent, markedConfig)
  return output
}
