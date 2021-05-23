import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UsersController {
  private static users = [
    {
      id: 1,
      name: "Lucas",
      email: "test@test.com",
    },
    {
      id: 2,
      name: "Jorge",
      email: "test1@test.com",
    },
  ];

  public async index({ request }: HttpContextContract) {
    return UsersController.users;
  }
  public async store({ request }: HttpContextContract) {
    const data: { name: string; email: string } = request.only([
      "name",
      "email",
    ]);
    const newId = UsersController.users.length + 1;
    const user = {
      id: newId,
      name: data.name,
      email: data.email,
    };
    UsersController.users.push(user);
    return user;
  }
  public async destroy({ params }: HttpContextContract) {
    const userId = Number(params.id);
    UsersController.users.filter((u) => u.id !== userId);
  }
  public async show({ params }: HttpContextContract) {
    const userId = Number(params.id);
    UsersController.users.filter((u) => u.id !== userId);
  }
}
