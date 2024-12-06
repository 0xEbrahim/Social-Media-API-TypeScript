import express from "express";
import Configuration from "./config/configurations";

const app: express.Application = express();

const env = process.env.NODE_ENV || "development";

const config = new Configuration(env);
const PORT = config.environmentConfig.port;

app.listen(PORT, () => {
  console.log(`Server started running on port ${PORT}`);
});
