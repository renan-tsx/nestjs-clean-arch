import { validate as uuidValidade } from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Testes unitários da classe abstrata Entity', () => {
  it('Espero as props e id', () => {
    const props = { prop1: 'value1', prop2: 10 }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidade(entity._id)).toBeTruthy()
  })

  it('Espero que aceite um uuid válido', () => {
    const id = 'f8a8b2b3-df51-4498-a1eb-2dd919b2647c'
    const props = { prop1: 'value1', prop2: 10 }
    const entity = new StubEntity(props, id)

    expect(uuidValidade(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it('Espero que converta a entidade para um objeto JSON', () => {
    const id = 'f8a8b2b3-df51-4498-a1eb-2dd919b2647c'
    const props = { prop1: 'value1', prop2: 10 }
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    })
  })
})
