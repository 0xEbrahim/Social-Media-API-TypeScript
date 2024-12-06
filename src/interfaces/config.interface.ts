export interface BaseConfig {
  port: number | string | undefined;
  mongoUrl: string | undefined;
  defaultUserImage: String | undefined;
  jwt_secret: string | undefined;
  socket_port: number;
}
