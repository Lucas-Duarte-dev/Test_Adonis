import Route from "@ioc:Adonis/Core/Route";

Route.resource("users", "UsersController").except(["update"]).apiOnly();
