import { v4 as uuidv4 } from 'uuid'
import { generateIdInterface } from '../generate-id-interface'

export abstract class uuidGenerateId implements generateIdInterface {
  UniqueId(): string {
    return uuidv4()
  }
}
