import { UserProps } from '../../entities/user.entity'
import { FakerUserDataBuilder } from './implementation/faker-user-data-builder'
import { Props } from './user-data-builder-interface'

// export const UserDataBuilder = FakerUserDataBuilder({})

export function UserDataBuilder(props: Props): UserProps {
  return FakerUserDataBuilder(props)
}
