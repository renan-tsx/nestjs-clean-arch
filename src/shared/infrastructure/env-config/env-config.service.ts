import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { EnvConfig } from './env-config.interface'

@Injectable()
export class EnvConfigService implements EnvConfig {
  // NOTE ConfigService accesses environment variables
  constructor(private confiService: ConfigService) {}

  getAppPort(): number {
    return Number(this.confiService.get<number>('PORT'))
  }
  getNodeEnv(): string {
    return this.confiService.get<string>('NODE_ENV')
  }
}
