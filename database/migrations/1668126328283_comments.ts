import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('comment').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
