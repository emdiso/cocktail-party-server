"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pool = require("pg").Pool;
require("dotenv").config();
const isProduction = process.env.NODE_ENV === "production";
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    // ssl: {
    //     rejectUnauthorized: false,
    // },
});
// const psqlEnv = require("../../env.json"); // Convert to typsecript import statment
// let psqlPool = new Pool(psqlEnv);
// psqlPool.connect().then(() => {
//   console.log("Connected to database");
// });
exports.default = pool;
