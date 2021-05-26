import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import Hash from "@ioc:Adonis/Core/Hash";

export default class AuthController {
  async authenticate({ auth, request, response }: HttpContextContract) {
    const { email, password } = request.all();

    const user = await User.findBy("email", email);
    if (!user) {
      return response.badRequest("Invalid credentials");
    }
    if (!(await Hash.verify(user.password, password))) {
      return response.badRequest("Invalid credentials");
    }
    try {
      const token = await auth.use("api").generate(user);

      return token;
    } catch (error) {
      return response.badRequest("Invalid credentials");
    }
  }
}
