import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Address from "App/Models/Address";
import Post from "App/Models/Post";

interface Addresses {
  city: string;
  state: string;
  zip_code: string;
  number: number;
  complement?: string;
  district: string;
  latitude: number;
  longitude: number;
}

export default class AddressesController {
  public async store({ request, params, response }: HttpContextContract) {
    const {
      city,
      state,
      zip_code,
      number,
      complement,
      district,
      latitude,
      longitude,
    }: Addresses = request.only([
      "city",
      "state",
      "zip_code",
      "number",
      "complement",
      "district",
      "latitude",
      "longitude",
    ]);

    const post_id = params.post_id;

    const post = await Post.findOrFail(post_id);

    if (!post) {
      return response.notFound("Post not found");
    }

    const address = await Address.create({
      city,
      state,
      zip_code,
      post_id,
      number,
      complement,
      district,
      latitude,
      longitude,
    });

    return address;
  }
}
