import { Entity } from '@/shared/domain/entities/entity'

export type UserProps = {
  name: string
  email: string
  password: string
  createAt?: Date
}

export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly props: UserProps,
    id?: string,
  ) {
    super(props, id)
    this.props.createAt = this.props.createAt ?? new Date()
  }

  // NOTE name

  get name() {
    return this.props.name
  }

  updateName(value: string): void {
    this.name = value
  }

  private set name(value: string) {
    this.props.name = value
  }

  // NOTE email

  get email() {
    return this.props.email
  }

  // NOTE password

  get password() {
    return this.props.password
  }

  updatePassword(value: string): void {
    this.password = value
  }

  private set password(value: string) {
    this.props.password = value
  }

  // NOTE createAt

  get createAt() {
    return this.props.createAt
  }
}
