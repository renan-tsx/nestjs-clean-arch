import { DynamicModule, Module } from '@nestjs/common'
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config'
import { join } from 'node:path'
import { EnvConfigService } from './env-config.service'

/**
 * ConfigModule e ConfigModuleOptions lidam com as variáveis de ambiente.
 * O comportamento padrão do ConfigModule é carregar as variáveis de ambiente
 * do arquivo ".env". A modificação permite carregar as variáveis de ambiente
 * com base no ambiente em execução, utilizando o valor NODE_ENV para determinar
 * qual arquci deve ser carregado.
 */

@Module({
  providers: [EnvConfigService],
})
export class EnvConfigModule extends ConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    return super.forRoot({
      envFilePath: [
        join(__dirname, `../../../../../../.env.${process.env.NODE_ENV}`),
      ],
      ...options,
    })
  }
}
