import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Complement extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public garage: boolean;

  @column()
  public bedrooms: number;

  @column()
  public bathrooms: number;

  @column()
  public size: number;

  @column()
  public post_id: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
