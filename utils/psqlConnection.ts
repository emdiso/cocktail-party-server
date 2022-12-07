const Pool = require("pg").Pool;
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    // Comment out ssl when testing in development
    ssl: {
        rejectUnauthorized: false,
    },
});

// const psqlEnv = require("../../env.json"); // Convert to typsecript import statment
// let psqlPool = new Pool(psqlEnv);
// psqlPool.connect().then(() => {
//   console.log("Connected to database");
// });

export default pool;