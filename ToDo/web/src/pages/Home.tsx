import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTypedQuery } from "@ToDo/graphql/urql";
import Empty from "../components/Empty";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import * as styles from "./Home.css";
import Button from "../components/Button";
import { SQL } from "../../../services/core/sql";

export default function Home() {
  // Handle empty document cache
  // https://formidable.com/open-source/urql/docs/basics/document-caching/#adding-typenames
  const context = useMemo(() => ({ additionalTypenames: ["ToDo"] }), []);
  const [todos] = useTypedQuery({
    query: {
      todos: {
        title: true,
        complete: true,
      },
    },
    context,
  });

  const markComplete = (todo: Object) => {
    // const [result] = await SQL.DB.updateTable("todo")
    // .set({complete: true})
    // .where("title", "=", title)
    // .execute();
    // return result
    console.log(`will pass ${todo.title} to query to update in RDS if I can figure out how`)
  }

  return (
    <div>
       <Navbar />
      {todos.fetching ? (
        <Loading />
      ) : todos.data?.todos && todos.data?.todos.length > 0 ? (
        <ol className={styles.list}>
          {todos.data?.todos.map((todo, i) => (
            <li key={i} className={(todo.complete) ? styles.complete : styles.article}>
              <div>
                {!(todo.complete) && <button onClick={() => {markComplete(todo)}}>complete</button>}
                <h2 className={styles.title}>
                  {todo.title}
                </h2>
                &nbsp;
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <Empty>&#10024; Create the first To Do &#10024;</Empty>
      )}
    </div>
  );
}
