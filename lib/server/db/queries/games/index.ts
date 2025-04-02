import { db } from "../..";
import { gamesTable } from "../../schema";

export const getGames = async (): Promise<any> => {
  return await db.select().from(gamesTable);
};
