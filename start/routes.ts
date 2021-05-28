import Route from "@ioc:Adonis/Core/Route";

Route.resource("users", "UsersController").except(["update"]).apiOnly();
Route.post("login", "AuthController.authenticate");

Route.group(() => {
  Route.post("posts/:user_id", "PostsController.store").middleware("auth");
  Route.resource("posts/", "PostsController").except(["store"]).apiOnly();
}).middleware("auth");
