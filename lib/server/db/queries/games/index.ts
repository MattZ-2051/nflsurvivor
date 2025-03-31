import { db } from "../..";
import { gamesTable, playersToGames } from "../../schema";
import { eq } from "drizzle-orm";

export const getGames = async (): Promise<any> => {
  return await db.select().from(gamesTable);
};
