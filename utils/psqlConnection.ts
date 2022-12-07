const Pool = require("pg").Pool;
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const connectionString = process.env.DATABASE_URL;
const psqlPool = new Pool(isProduction ? {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
} : {connectionString: connectionString});

psqlPool.connect().then(() => {
  console.log("Connected to database");
});

export default psqlPool;