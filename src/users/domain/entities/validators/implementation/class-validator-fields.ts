import {
  FieldsErrors,
  ValidatorFieldsInterface,
} from '../validator-fields-interface'

import { validateSync } from 'class-validator'

/**
 * Classe utilizada para válidar os dados de entrada, implementada com class-validator.
 * @typeparam PropsValidated Tipo de dados a ser validados.
 */
export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorFieldsInterface<PropsValidated>
{
  errors: FieldsErrors = null
  validateData: PropsValidated = null
  validate(data: any): boolean {
    const errors = validateSync(data)
    if (errors.length) {
      this.errors = {}
      // Percorre os erros gerados pelo class-validator
      // Constrói aestrutura de erros conforme esperado
      for (const error of errors) {
        const field = error.property
        this.errors[field] = Object.values(error.constraints)
      }
    } else {
      this.validateData = data
    }
    return !errors.length
  }
}
