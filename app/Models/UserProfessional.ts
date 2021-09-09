import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserProfessional extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public professionalId: number

  @column.dateTime({
    serialize: (value) => {
      return value.toFormat('dd/MM/yyyy')
    },
  })
  public date: DateTime

  @column.dateTime({
    autoCreate: true,
    serialize: (value) => {
      return value.toFormat('dd/MM/yyyy')
    },
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value) => {
      return value.toFormat('dd/MM/yyyy')
    },
  })
  public updatedAt: DateTime
}
