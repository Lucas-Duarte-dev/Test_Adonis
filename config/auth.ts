import { AuthConfig } from "@ioc:Adonis/Addons/Auth";

const authConfig: AuthConfig = {
  guard: "basic",
  guards: {
    basic: {
      driver: "basic",
      realm: "Login",

      provider: {
        driver: "lucid",

        identifierKey: "id",

        uids: ["email"],

        model: () => import("App/Models/User"),
      },
    },
  },
};

export default authConfig;
