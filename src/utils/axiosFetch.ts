import axios, { AxiosError, type CreateAxiosDefaults } from 'axios'
import { markdownToHtml } from './markdown'
import yaml from 'js-yaml'
import type { IVoiceBankData } from '@/types/IVoiceBankData.type'
import type { IPost } from '@/types/IPost.type'
import type { IMarkdown } from '@/types/markdown.type'

const axiosConfig: CreateAxiosDefaults = {}

export const localAxios = axios.create({
  ...axiosConfig,
  baseURL: import.meta.env.BASE_URL,
})
export const githubAxios = axios.create({
  ...axiosConfig,
  baseURL: 'https://api.github.com/repos/2xxbin/2xxbin.github.io/contents',
})

export const getMarkdown = async (
  path: string,
): Promise<IMarkdown | undefined> => {
  const markdown = await githubAxios
    .get(path)
    .then(res =>
      new TextDecoder('utf-8').decode(
        Uint8Array.from(atob(res.data.content), c => c.charCodeAt(0)),
      ),
    )
    .catch((e: AxiosError) => console.error(e))

  if (markdown) {
    return await markdownToHtml(markdown)
  }
}

export const getVoiceBankData = async (
  vbname: string,
): Promise<IVoiceBankData> => {
  const voicebank: IVoiceBankData = await localAxios
    .get(`/voicebank/${vbname}.yaml`)
    .then(res => yaml.load(res.data))
    .catch(e => console.error(e))

  return voicebank
}

export const getNotices = async (): Promise<IPost[]> => {
  const content: IPost[] = await localAxios
    .get('/md/notices/notices.json')
    .then(res => res.data)
    .catch(e => console.error(e))

  return content
}
export const getReclists = async (): Promise<IPost[]> => {
  const content: IPost[] = await localAxios
    .get('/md/reclists/reclists.json')
    .then(res => res.data)
    .catch(e => console.error(e))

  return content
}
