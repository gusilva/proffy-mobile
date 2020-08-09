const API_URL = "http://192.168.1.103:3333/api/v1"

export interface ApiConfig {
  url: string
  timeout: number
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URL || "http://example.com",
  timeout: 10000,
}
