import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Post from "./Post";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public name: string;

  @column()
  public email: string;

  @column()
  public phone: string;

  @hasMany(() => Post, {
    foreignKey: "user_id",
  })
  public posts: HasMany<typeof Post>;

  @column()
  public password: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
