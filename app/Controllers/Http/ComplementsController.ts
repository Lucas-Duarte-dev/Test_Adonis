import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Complement from "App/Models/Complement";
import Post from "App/Models/Post";

interface Component {
  garage: boolean;
  bedrooms: number;
  bathrooms: number;
  size: number;
}

export default class ComplementsController {
  async store({ request, params, response }: HttpContextContract) {
    const { garage, bedrooms, bathrooms, size }: Component = request.only([
      "garage",
      "bedrooms",
      "bathrooms",
      "size",
    ]);

    const post_id = params.post_id;

    const post = await Post.findOrFail(post_id);

    if (!post) {
      return response.notFound("Post not found");
    }

    const complement = await Complement.create({
      garage,
      bedrooms,
      bathrooms,
      size,
      post_id,
    });

    return complement;
  }
}
