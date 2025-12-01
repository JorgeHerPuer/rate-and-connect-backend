export default () => ({
    database: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 8001,
        name: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    }
});