import { db } from "../..";
import { gamesTable } from "../../schema";

export const getGames = async () => {
  return await db.select().from(gamesTable);
};
