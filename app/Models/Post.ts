import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Address from "./Address";

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public title: string;

  @column()
  public description: string;

  @column()
  public price_condom: number;

  @column()
  public rate: number;

  @column()
  public price_immob: number;

  @column()
  public user_id: string;

  @hasMany(() => Address, {
    foreignKey: "post_id",
  })
  public addresses: HasMany<typeof Address>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
