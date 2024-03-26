import {
  EnvConfigModule,
  EnvConfigService,
} from '@/shared/infrastructure/env-config'
import { Test, TestingModule } from '@nestjs/testing'

describe('Testes unitários do EnvConfigService', () => {
  // Serviço que será testado
  let sut: EnvConfigService

  beforeEach(async () => {
    // Módulo de teste a ser testado
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvConfigModule.forRoot()],
      providers: [EnvConfigService],
    }).compile()

    // Instância do serviço a ser testado
    sut = module.get<EnvConfigService>(EnvConfigService)
  })

  it('Deve ser definido', () => {
    expect(sut).toBeDefined()
  })

  it('Deve retornar a variável PORT correta', () => {
    expect(sut.getAppPort()).toBe(3000)
  })

  it('Deve retornar o variável NODE_ENV correto', () => {
    expect(sut.getNodeEnv()).toEqual('test')
  })
})
