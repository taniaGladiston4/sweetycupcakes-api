import { BaseModel, column, computed } from '@ioc:Adonis/Lucid/Orm'
import { FileCategory } from 'App/utils'
import Env from '@ioc:Adonis/Core/Env'

export default class File extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fileCategory: FileCategory

  @column()
  public ownerId: number

  @column()
  public fileName: string

  @computed()
  public get url(): string {
    return `${Env.get('APP_URL')}/uploads/${this.fileName}`
  }
}
