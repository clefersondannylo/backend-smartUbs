import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
  computed,
} from '@ioc:Adonis/Lucid/Orm'

import Category from 'App/Models/Category'
import User from 'App/Models/User'

export default class Professional extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public cpf: string

  @column()
  public categoryId: number

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @manyToMany(() => User, {
    pivotTable: 'schedules',
    pivotColumns: ['date'],
    pivotTimestamps: true,
  })
  public schedule: ManyToMany<typeof User>

  @computed()
  public get date() {
    return this.$extras.pivot_date
  }

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
