import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import { hash } from "bcryptjs";

interface Users {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export default class UsersController {
  public async index() {
    return await User.all();
  }
  public async store({ request }: HttpContextContract) {
    const { email, name, password, phone }: Users = request.only([
      "name",
      "email",
      "phone",
      "password",
    ]);

    const passwordHash = await hash(password, 8);
    const user = {
      name,
      email,
      phone,
      password: passwordHash,
    };

    return await User.create(user);
  }
  public async destroy({ params }: HttpContextContract) {
    const user = await User.find(params.id);
    user?.delete();
  }
  public async show({ params }: HttpContextContract) {
    return await User.find(params.id);
  }
}
