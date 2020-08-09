import { GeneralApiProblem } from './proffy-api-problem'

interface ClassesResponse {
  avatar: string
  bio: string
  cost: string
  // eslint-disable-next-line camelcase
  user_id: number
  name: string
  subject: string
  whatsapp: string
}

export type GetTotalConnectionsResult =
  | { kind: 'ok'; total: number }
  | GeneralApiProblem

export type GetClassesResult =
  | { kind: 'ok'; classes: ClassesResponse[] }
  | GeneralApiProblem
