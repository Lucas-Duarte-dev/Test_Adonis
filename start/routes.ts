import Route from "@ioc:Adonis/Core/Route";

Route.resource("users", "UsersController").except(["update"]).apiOnly();
Route.post("authenticate", "AuthController.authenticate");

Route.group(() => {
  Route.resource("posts/:user_id", "PostsController").apiOnly();
}).middleware("auth");
