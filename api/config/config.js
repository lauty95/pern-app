require('dotenv').config(); // Carga las variables de entorno desde .env

module.exports = {
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  dialect: "postgres"
};
