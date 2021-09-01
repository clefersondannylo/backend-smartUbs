import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Professionals extends BaseSchema {
  protected tableName = 'professionals'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('cpf').notNullable().unique()
      table
        .integer('category_id')
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
