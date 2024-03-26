import { v4 as uuidv4, validate as uuidValidade } from 'uuid'

import { generateIdInterface } from '../generate-id-interface'

export abstract class uuidGenerateId implements generateIdInterface {
  UniqueId(): string {
    return uuidv4()
  }
  ValidadeId(prop: string): boolean {
    return uuidValidade(prop)
  }
}
