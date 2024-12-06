import dotenv from "dotenv";
import { BaseConfig } from "../interfaces/config.interface";
dotenv.config();
class Configuration {
  private development: BaseConfig = {
    port: process.env.PORT || 9999,
    mongoUrl: process.env.mongoUrl,
    defaultUserImage: process.env.DEFAULT_USER_IMAGE,
    jwt_secret: process.env.JWT_SECRET,
    socket_port: 8888,
  };

  private production: BaseConfig = {
    port: process.env.PORT,
    mongoUrl: process.env.mongoUrl,
    defaultUserImage: process.env.DEFAULT_USER_IMAGE,
    jwt_secret: process.env.JWT_SECRET,
    socket_port: 8888,
  };

  constructor(private environment: string) {}

  get environmentConfig() {
    if (this.environment === "development") {
      return this.development;
    } else {
      return this.production;
    }
  }
}

export default Configuration;
