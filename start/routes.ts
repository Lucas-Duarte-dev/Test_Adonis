import Route from "@ioc:Adonis/Core/Route";

Route.resource("users", "UsersController").except(["update"]).apiOnly();
Route.post("login", "AuthController.authenticate");

Route.group(() => {
  Route.get("posts", "PostsController.store");
  Route.resource("posts/:user_id", "PostsController")
    .except(["index"])
    .apiOnly();
}).middleware("auth");
