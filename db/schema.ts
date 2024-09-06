import { pgTable, index, timestamp, text, integer } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"




export const serverCount = pgTable("server_count", {
	time: timestamp("time", { withTimezone: true, mode: 'string' }).notNull(),
	server: text("server").notNull(),
	count: integer("count").notNull(),
	totalCount: integer("total_count").notNull(),
	shardId: integer("shard_id"),
},
(table) => {
	return {
		timeIdx: index("server_count_time_idx").using("btree", table.time.desc().nullsFirst()),
	}
});