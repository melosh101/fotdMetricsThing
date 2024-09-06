import {defineConfig} from "drizzle-kit";

const {TIMESCALE_URL} = process.env;

if(!TIMESCALE_URL) throw new Error("invalid timescale url");
export default defineConfig({
    dbCredentials: {
        url: TIMESCALE_URL,
    },
    dialect: "postgresql",
    out: "./db/migrations",
    schema: "./db/schema"
})