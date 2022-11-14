import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public comment: string
  
  @column()
  public user_id: number

  @hasOne(() => User, {
    foreignKey: 'id',
  })
  public user: HasOne<typeof User>
}
