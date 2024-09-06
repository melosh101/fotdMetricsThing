import { Pool } from "pg";
import {drizzle} from "drizzle-orm/node-postgres";

const pool = new Pool({
    connectionString: process.env.TIMESCALE_URL
})

const db = drizzle(pool);

export default db;