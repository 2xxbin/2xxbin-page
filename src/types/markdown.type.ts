interface IMarkdownData {
  matterDataPrefix: boolean
  [key: string]: unknown
}

export interface IMarkdown {
  html: string
  data: IMarkdownData
}
