export type typeEnv = 'developement' | 'test'

export interface EnvConfig {
  getAppPort(): number
  getNodeEnv(): typeEnv
}
