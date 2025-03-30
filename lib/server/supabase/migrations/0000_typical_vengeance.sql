CREATE TABLE "games" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "players" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar
);
--> statement-breakpoint
CREATE TABLE "players_to_games" (
	"player_id" serial NOT NULL,
	"game_id" serial NOT NULL,
	CONSTRAINT "players_to_games_player_id_game_id_pk" PRIMARY KEY("player_id","game_id")
);
--> statement-breakpoint
ALTER TABLE "players_to_games" ADD CONSTRAINT "players_to_games_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "players_to_games" ADD CONSTRAINT "players_to_games_game_id_games_id_fk" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE no action ON UPDATE no action;