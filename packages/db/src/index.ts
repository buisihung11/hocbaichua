import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { document, documentTypeEnum, space } from "./schema/space";

config({ path: "../../apps/server/.env" }); // or .env.local

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}

const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, {
  schema: { space, document, documentTypeEnum },
});
