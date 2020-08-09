import { ApisauceInstance, create, ApiResponse } from 'apisauce'
import { ApiConfig, DEFAULT_API_CONFIG } from './proffy-config'
import { getGeneralApiProblem } from './proffy-api-problem'
import * as Types from './proffy-api.types'

export class ProffyApi {
  apisauce: ApisauceInstance
  config: ApiConfig

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json',
      },
    })
  }

  setup(): void {
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json',
      },
    })
  }

  async getClasses(
    subject: string,
    // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
    week_day: string,
    time: string
  ): Promise<Types.GetClassesResult> {
    // eslint-disable-next-line
    const response: ApiResponse<any> = await this.apisauce.get<
      Types.GetClassesResult
        // eslint-disable-next-line @typescript-eslint/camelcase
    >('classes', { subject, week_day, time })

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      return { kind: 'ok', classes: response.data }
    } catch {
      return { kind: 'bad-data' }
    }
  }

  async getTotalConnections(): Promise<Types.GetTotalConnectionsResult> {
    // eslint-disable-next-line
    const response: ApiResponse<any> = await this.apisauce.get<
      Types.GetTotalConnectionsResult
    >('connections')

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      const { total } = response.data
      return { kind: 'ok', total }
    } catch {
      return { kind: 'bad-data' }
    }
  }
}
