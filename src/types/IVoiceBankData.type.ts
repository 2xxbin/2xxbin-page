interface IVoiceBanksContentStaffData {
  name: string
  position: string
  contact: { text: string; link: string }
}

interface IVoiceBanksContentData {
  name: string
  illust: string
  demoYoutubeID: string
  downloadLink: string
  explaination: string[]
  staff: IVoiceBanksContentStaffData[]
}

interface IVoiceBanksData {
  category: string
  content: IVoiceBanksContentData[]
}

export interface IVoiceBankData {
  korName: string
  engName: string
  hashTag: string[]
  gender: string
  age: number
  height: number
  weight: number
  like: string[]
  unLike: string[]
  portrait: string
  description: string[]
  voiceBanks: IVoiceBanksData[]
}
