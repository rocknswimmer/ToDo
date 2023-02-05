import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTypedQuery } from "@ToDo/graphql/urql";
import Empty from "../components/Empty";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import * as styles from "./Home.css";
import Button from "../components/Button";

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

  const markComplete = (title) => {
    console.log(`will pass ${title} to query to update in server`)
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
                {!(todo.complete) && <button onClick={() => {markComplete(title)}}>complete</button>}
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
