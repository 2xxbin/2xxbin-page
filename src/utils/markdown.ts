import type { IMarkdown } from '@/types/markdown.type'
import hljs from 'highlight.js'
import { marked, Renderer, type MarkedOptions } from 'marked'
import { markedHighlight, type SynchronousOptions } from 'marked-highlight'
import markedHookFrontmatter from 'marked-hook-frontmatter'
import markedSequentialHooks from 'marked-sequential-hooks'
import { type Options as MarkedSequentialHooksConfig } from 'marked-sequential-hooks'

const renderer = new Renderer()

const markedHighlightConfig: SynchronousOptions = {
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
}

const markedSequentialHooksConfig: MarkedSequentialHooksConfig = {
  markdownHooks: [markedHookFrontmatter()],
  htmlHooks: [(html, data) => JSON.stringify({ html, data })],
}

const markedConfig: MarkedOptions = {
  async: true,
  pedantic: true,
  gfm: true,
  breaks: true,
  renderer,
}

export const markdownToHtml = async (
  markdownContent: string,
): Promise<IMarkdown> => {
  marked.use(markedHighlight(markedHighlightConfig))
  marked.use(markedSequentialHooks(markedSequentialHooksConfig))

  const output = await marked(markdownContent, markedConfig)
  console.log(output)
  return JSON.parse(output)
}
