import { db } from "../..";
import { playersTable } from "../../schema";
import { eq } from "drizzle-orm";

export const getUserPlayerProfile = async (user_id: string) => {
  return await db
    .select()
    .from(playersTable)
    .where(eq(playersTable.user_id, user_id));
};
