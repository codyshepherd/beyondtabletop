import { BtBase } from '../common/base'

export class CampaignPlayer extends BtBase {
  name: string
  nickname: string
  color: string
  role: string
  image: string
  sheet_id: string
  disable_audio: boolean
  chat_minimized: boolean
  tab: string
  $busy: boolean

  getProto() {
    return {
      name: 'Player Name',
      nickname: null,
      color: null,
      role: 'editor',
      image: null,
      sheet_id: null,
      disable_audio: false,
      chat_minimized: false,
      tab: 'summary',
    }
  }
}
