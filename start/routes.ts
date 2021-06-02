import Route from "@ioc:Adonis/Core/Route";

Route.resource("users", "UsersController").except(["update"]).apiOnly();

Route.post("login", "AuthController.authenticate");

Route.post("address/:post_id", "AddressesController.store");

Route.get("posts", "PostsController.index");

Route.post("complement/:post_id", "ComplementsController.store");

Route.group(() => {
  Route.resource("posts/:user_id", "PostsController")
    .except(["index"])
    .apiOnly();
}).middleware("auth");
