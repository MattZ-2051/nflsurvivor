import { relations } from "drizzle-orm";
import {
  integer,
  pgSchema,
  pgTable,
  primaryKey,
  serial,
  varchar,
  uuid,
} from "drizzle-orm/pg-core";

export const playersTable = pgTable("players", {
  id: serial("id").primaryKey(),
  username: varchar("username"),
});

export const playersRelations = relations(playersTable, ({ one, many }) => ({
  playersToGames: many(playersToGames),
}));

export const gamesTable = pgTable("games", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
});

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
);
export const usersToGroupsRelations = relations(playersToGames, ({ one }) => ({
  group: one(gamesTable, {
    fields: [playersToGames.game_id],
    references: [gamesTable.id],
  }),
  playere: one(playersTable, {
    fields: [playersToGames.player_id],
    references: [playersTable.id],
  }),
}));

export type InsertPlayer = typeof playersTable.$inferInsert;
export type SelectPlayer = typeof playersTable.$inferSelect;

export type InsertGame = typeof gamesTable.$inferInsert;
export type SelectGame = typeof gamesTable.$inferSelect;
