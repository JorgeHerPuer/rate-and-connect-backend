export default () => ({
  port: parseInt(process.env.PORT) || 3008,
  database: {
    host: process.env.DB_HOST, // get the data from the loaded .env
    port: parseInt(process.env.DB_PORT) || 8001,
    name: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
  },
});
