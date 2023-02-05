import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTypedQuery } from "@ToDo/graphql/urql";
import Empty from "../components/Empty";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import * as styles from "./Home.css";

export default function Home() {
  // Handle empty document cache
  // https://formidable.com/open-source/urql/docs/basics/document-caching/#adding-typenames
  const context = useMemo(() => ({ additionalTypenames: ["ToDo"] }), []);
  const [todos] = useTypedQuery({
    query: {
      todos: {
        title: true,
      },
    },
    context,
  });

  return (
    <div>
       <Navbar />
      {todos.fetching ? (
        <Loading />
      ) : todos.data?.todos && todos.data?.todos.length > 0 ? (
        <ol className={styles.list}>
          {todos.data?.todos.map((todo, i) => (
            <li key={i} className={styles.article}>
              <div>
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
