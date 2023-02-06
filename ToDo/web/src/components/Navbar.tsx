import { Link, useNavigate } from "react-router-dom";
import { useTypedMutation } from "@ToDo/graphql/urql";
import Button from "./Button";
import * as styles from "./Navbar.css";
import { VariablesInAllowedPositionRule } from "graphql";
import React, {useState} from "react";

interface ArticleForm {
  title: string;
}

export default function Navbar() {
  const allowed = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')// for input sanitation
  const [count, setCount] = useState(0)
  const updateCount = (e) => {
    setCount(e.target.value.length)
  }

  const navigate = useNavigate();
  const [result, addToDo] = useTypedMutation((opts: ArticleForm) => ({
    addToDo: [
      {
        title: opts.title,
      },
      {
        title: true,
      }
    ]
  }))
  // const [result, createArticle] = useTypedMutation((opts: ArticleForm) => ({
  //   createArticle: [
  //     opts,
  //     {
  //       id: true,
  //     },
  //   ],
  // }));

  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        {/* <Link to="/" className={styles.title}>
          <span className={styles.logo}>&#128279;</span> Links
        </Link> */}
        <h1>To Do List</h1>
      </div>
      <form
        className={styles.form}
        onSubmit={async (e) => {
          e.preventDefault();

            const fd = new FormData(e.currentTarget);
          // const url = fd.get("url")!.toString();
          const title = fd.get("title")!.toString();


          if ((title.length > 0 && title.length <= 100) && title.split('').every((char) => {return allowed.indexOf(char) !== -1})) {

            e.currentTarget.reset();
            const result = await addToDo({
              title,
            });
            navigate('/');
          } else {
            alert(`ToDo can only contain letters and spaces and must be less than 100 charactors. for reference approved values are ${allowed}`)
          }
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="To Do Task"
          className={styles.field}
          onChange={updateCount}
        />
        <div>{`${count}/100`}</div>
        {/* <input
          name="url"
          type="text"
          placeholder="URL"
          className={styles.field}
        /> */}
        <Button
          type="submit"
          // loading={result.fetching}
          className={styles.button}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
