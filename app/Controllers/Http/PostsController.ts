import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";
import User from "App/Models/User";

interface Posts {
  title: string;
  description: string;
  price_condom: number;
  rate: number;
  price_immob: number;
}

export default class PostsController {
  public async store({ request, params, response }: HttpContextContract) {
    const { title, description, price_condom, rate, price_immob }: Posts =
      request.only([
        "title",
        "description",
        "price_condom",
        "rate",
        "price_immob",
      ]);
    const user_id = params.user_id;

    const user = await User.find(user_id);

    if (!user) {
      return response.status(401).json({ message: "User not found" });
    }

    return await Post.create({
      user_id,
      title,
      description,
      price_condom,
      rate,
      price_immob,
    });
  }

  public async index() {
    const posts = await Post.all();
    return posts;
  }
}
