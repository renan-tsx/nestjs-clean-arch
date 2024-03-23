/**
 * NOTE
 * Cada propriedade da entidade pode conter um array de erros
 * @example name = ['obrigatório', 'string', 255]
 */
export type FieldsErrors = {
  [field: string]: string[]
}

/**
 * Contrato
 */
export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsErrors
  validateData: PropsValidated
  validate(data: any): boolean
}
