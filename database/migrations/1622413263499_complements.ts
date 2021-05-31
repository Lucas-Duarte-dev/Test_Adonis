import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Complements extends BaseSchema {
  protected tableName = "complements";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary().defaultTo(this.raw("uuid_generate_v4()"));
      table.boolean("garage").notNullable();
      table.integer("bedrooms").notNullable();
      table.integer("bathrooms").notNullable();
      table.float('size').notNullable();
      table.uuid('post_id').references('id').inTable('posts').onDelete('CASCADE')
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
