import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Posts extends BaseSchema {
  protected tableName = "posts";
  public async up() {
    this.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary().defaultTo(this.raw("uuid_generate_v4()"));
      table.string("title", 180).notNullable();
      table.text("description").notNullable();
      table.string("price_condom", 100);
      table.string("rate", 100);
      table.string("price_immob", 100).notNullable();
      table
        .uuid("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
    this.schema.raw('DROP EXTENSION IF EXISTS "uuid-ossp"');
  }
}
