import hljs from 'highlight.js'
import { marked, Renderer, type MarkedOptions } from 'marked'
import { markedHighlight, type SynchronousOptions } from 'marked-highlight'

// 커스텀 렌더러 생성
const renderer = new Renderer()

const markedHighlightConfig: SynchronousOptions = {
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
}

const markedConfig: MarkedOptions = {
  async: true,
  pedantic: true,
  gfm: true,
  breaks: true,
  renderer,
}

export const markdownToHtml = async (markdownContent: string) => {
  marked.use(markedHighlight(markedHighlightConfig))

  const output = await marked(markdownContent, markedConfig)
  return output
}
