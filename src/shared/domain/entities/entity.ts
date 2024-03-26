/**
 * NOTE Classe genéria, serve como base para a criação de outras entidades.
 */

import { generateId } from './generate-id'

export abstract class Entity<Props = any> {
  public readonly _id: string
  public readonly props: Props

  constructor(props: Props, id?: string) {
    this.props = props
    this._id = id || new generateId().UniqueId()
  }

  get id() {
    return this.id
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this._id,
      ...this.props,
    } as Required<{ id: string } & Props>
  }
}
