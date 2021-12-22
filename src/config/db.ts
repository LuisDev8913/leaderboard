import path from "path";
import { createConnection } from "typeorm";
import { DB_URL } from ".";

import { User } from "../entities/User";

export const connectDB = async () => {
  const conn = await createConnection({
    type: "postgres",
    url: DB_URL,
    logging: true,
    synchronize: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [User],
  });

  await conn.runMigrations();
};