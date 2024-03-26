import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { EnvConfig, typeEnv } from '../../env-config.interface'

@Injectable()
export abstract class NestJsConfigEnvConfigService implements EnvConfig {
  // NOTE ConfigService accesses environment variables
  constructor(private confiService: ConfigService) {}

  getAppPort(): number {
    return Number(this.confiService.get<number>('PORT'))
  }
  getNodeEnv(): typeEnv {
    return this.confiService.get<typeEnv>('NODE_ENV')
  }
}
