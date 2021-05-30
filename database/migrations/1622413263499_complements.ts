import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Complements extends BaseSchema {
  protected tableName = "complements";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary().defaultTo(this.raw("uuid_generate_v4()"));
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
