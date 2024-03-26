import { UserProps } from '@/users/domain/entities/user.entity'
import { faker } from '@faker-js/faker'
import { Props } from '../user-data-builder-interface'

/**
 * Constrói dados de usuário com valores padrão gerados aleatoriamente,
 * a menos que propriedades específicas sejam fornecidas.
 * @example
 * const userData = UserDataBuilder({})
 * // Saída = Objeto do tipo UserProps
 */
export function FakerUserDataBuilder(props: Props): UserProps {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
    createAt: props.createAt ?? new Date(),
  }
}
