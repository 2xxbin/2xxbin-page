import axios, { AxiosError, type CreateAxiosDefaults } from 'axios'
import { markdownToHtml } from './markdown'
import yaml from 'js-yaml'

const axiosConfig: CreateAxiosDefaults = {
  baseURL: import.meta.env.BASE_URL,
}

export const localAxios = axios.create(axiosConfig)

export const getMarkdown = async (path: string): Promise<string> => {
  const markdown = await localAxios
    .get(path)
    .then(res => res.data)
    .catch((e: AxiosError) => console.error(e))

  return await markdownToHtml(markdown)
}

export const getVoiceBankData = async (vbname: string) => {
  const voicebank = await localAxios
    .get(`/voicebank/${vbname}.yaml`)
    .then(res => yaml.load(res.data))
    .catch(e => console.error(e))

  return voicebank
}
