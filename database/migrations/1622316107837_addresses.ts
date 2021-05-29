import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Addresses extends BaseSchema {
  protected tableName = "addresses";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary().defaultTo(this.raw("uuid_generate_v4()"));
      table.string("city").notNullable();
      table.string("state", 50).notNullable();
      table.string("zip_code", 20).notNullable();
      table.integer("number").notNullable();
      table.string("complement").nullable();
      table.string("district", 110).notNullable();
      table.double("latitude").notNullable();
      table.double("longitude").notNullable();
      table
        .uuid("post_id")
        .references("id")
        .inTable("posts")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
