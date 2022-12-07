const Pool = require("pg");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool(isProduction ? {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
} : {connectionString: connectionString});

pool.connect().then(() => {
  console.log("Connected to database");
});

export default pool;