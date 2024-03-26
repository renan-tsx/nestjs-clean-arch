import { NestJsConfigEnvConfigModule } from './implementation/nestjs-config-env-config/env-config.module'
import { NestJsConfigEnvConfigService } from './implementation/nestjs-config-env-config/env-config.service'

export class EnvConfigModule extends NestJsConfigEnvConfigModule {}
export class EnvConfigService extends NestJsConfigEnvConfigService {}
