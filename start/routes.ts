import Route from "@ioc:Adonis/Core/Route";

Route.resource("users", "UserController.index").except(["update"]).apiOnly();
