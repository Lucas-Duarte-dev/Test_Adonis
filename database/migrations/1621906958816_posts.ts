import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Posts extends BaseSchema {
  protected tableName = "posts";
  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary().defaultTo(this.raw("uuid_generate_v4()"));
      table.string("title", 180).notNullable();
      table.text("description").notNullable();
      table.float("price_condom", 100);
      table.float("rate", 100);
      table.float("price_immob", 100).notNullable();
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
  }
}
