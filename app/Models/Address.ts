import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public city: string;

  @column()
  public state: string;

  @column()
  public zip_code: string;

  @column()
  public number: number;

  @column()
  public complement?: string;

  @column()
  public district: string;

  @column()
  public latitude: number;

  @column()
  public longitude: number;

  @column()
  public post_id: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
