import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { fileCategory } from 'App/utils'

export default class extends BaseSchema {
  protected tableName = 'files'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enu('file_category', fileCategory).notNullable()
      table.integer('owner_id').unsigned().notNullable()
      table.string('file_name').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
