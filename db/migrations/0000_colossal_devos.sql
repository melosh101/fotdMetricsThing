-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "server_count" (
	"time" timestamp with time zone NOT NULL,
	"server" text NOT NULL,
	"count" integer NOT NULL,
	"total_count" integer NOT NULL,
	"shard_id" integer
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "server_count_time_idx" ON "server_count" USING btree ("time" DESC NULLS FIRST);
*/