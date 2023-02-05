export * as Article from "./article";

import { ulid } from "ulid";
import { SQL } from "./sql";

export async function create(title: string, url: string) {
  const [result] = await SQL.DB.insertInto("article")
    .values({ articleID: ulid(), url, title })
    .returningAll()
    .execute();
  return result;
}

export function get(articleID: string) {
  return SQL.DB.selectFrom("article")
    .selectAll()
    .where("articleID", "=", articleID)
    .executeTakeFirst();
}

export function list() {
  return SQL.DB.selectFrom("todo")
    .selectAll()
    .execute();
}

export function addToDo(title: string) {
  // code for adding a comment to an article
  return SQL.DB.insertInto("todo")
    .values({
      title,
    })
    .returningAll()
    .executeTakeFirstOrThrow();
}

export function todos() {
  // code for getting a list of comments of an article
  return SQL.DB.selectFrom("todo")
  .selectAll()
  .execute();
}

// export function completeToDo(complete: boolean) {

// }