import { Kysely, sql } from "kysely";

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
  await db.schema
    .createTable("todo")
    .addColumn("title", "text", col => col.notNull())
    .addColumn("complete", "boolean", col => col.defaultTo(false))
    .execute();
}

/**
 * @param db {Kysely<any>}
 */
export async function down(db) {
  await db.schema.dropTable("todo").execute();
}
