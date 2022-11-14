import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import File from './File'

export default class Item extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public price: number

  @hasOne(() => File , {
    foreignKey: 'ownerId',
    onQuery: (query) => query.where('fileCategory', 'product')
    })
  public image: HasOne<typeof File>
}
