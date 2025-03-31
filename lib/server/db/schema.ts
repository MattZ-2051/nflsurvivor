import { relations } from "drizzle-orm";
import {
  pgTable,
  primaryKey,
  serial,
  varchar,
  uuid,
} from "drizzle-orm/pg-core";
import { authUsers } from "drizzle-orm/supabase";

export const playersTable = pgTable("players", {
  id: serial("id").primaryKey(),
  username: varchar("username"),
  user_id: uuid("user_id")
    .references(() => authUsers.id, { onDelete: "cascade" })
    .notNull(),
}).enableRLS();

export const playersRelations = relations(playersTable, ({ many }) => ({
  playersToGames: many(playersToGames),
}));

export const gamesTable = pgTable("games", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
}).enableRLS();

export const gameRelations = relations(gamesTable, ({ one, many }) => ({
  playersToGames: many(playersToGames),
}));

export const playersToGames = pgTable(
  "players_to_games",
  {
    player_id: serial("player_id")
      .notNull()
      .references(() => playersTable.id),
    game_id: serial("game_id")
      .notNull()
      .references(() => gamesTable.id),
  },
  (t) => [primaryKey({ columns: [t.player_id, t.game_id] })],
).enableRLS();

export const playersToGamesRelations = relations(playersToGames, ({ one }) => ({
  game: one(gamesTable, {
    fields: [playersToGames.game_id],
    references: [gamesTable.id],
  }),
  player: one(playersTable, {
    fields: [playersToGames.player_id],
    references: [playersTable.id],
  }),
}));

export type InsertPlayer = typeof playersTable.$inferInsert;
export type SelectPlayer = typeof playersTable.$inferSelect;

export type InsertGame = typeof gamesTable.$inferInsert;
export type SelectGame = typeof gamesTable.$inferSelect;
