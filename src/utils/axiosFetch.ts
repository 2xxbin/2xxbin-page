import axios, { AxiosError, type CreateAxiosDefaults } from 'axios'
import { markdownToHtml } from './markdown'
import yaml from 'js-yaml'
import type { IVoiceBankData } from '@/types/IVoiceBankData.type'
import type { IPost } from '@/types/IPost.type'
import type { IMarkdown } from '@/types/markdown.type'

const axiosConfig: CreateAxiosDefaults = {
  baseURL: import.meta.env.BASE_URL,
}

export const localAxios = axios.create(axiosConfig)

export const getMarkdown = async (path: string): Promise<IMarkdown> => {
  const markdown = await localAxios
    .get(path)
    .then(res => res.data)
    .catch((e: AxiosError) => console.error(e))

  return await markdownToHtml(markdown)
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
