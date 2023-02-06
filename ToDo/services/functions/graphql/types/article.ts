import { Article } from "@ToDo/core/article";
import { SQL } from "@ToDo/core/sql";
import { builder } from "../builder";

const ToDoType = builder.objectRef<SQL.Row["todo"]>("ToDo").implement({
  fields: (t) => ({
    title: t.exposeString("title"),
    complete: t.exposeBoolean("complete"),
  }),
});

const ArticleType = builder.objectRef<SQL.Row["article"]>("Article").implement({
  fields: (t) => ({
    id: t.exposeID("articleID"),
    url: t.exposeString("url"),
    title: t.exposeString("title"),
  }),
});

builder.queryFields((t) => ({
  article: t.field({
    type: ArticleType,
    args: {
      articleID: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => {
      const result = await Article.get(args.articleID);

      if (!result) {
        throw new Error("Article not found");
      }

      return result;
    },
  }),
  articles: t.field({
    type: [ArticleType],
    resolve: () => Article.list(),
  }),
  todos: t.field({
    type: [ToDoType],
    resolve: () => Article.todos(),
  }),
  completeToDo: t.field({
      type: ToDoType,
      args: {
        title: t.arg.string({ required: true }),
      },
      resolve: async (_, args) => {
        const result = await Article.completeToDo(args.title)

        if (!result) {
          throw new Error("couldn't mark Todo complete")
        }

        return result;
      }
    }),
}));

builder.mutationFields((t) => ({
  createArticle: t.field({
    type: ArticleType,
    args: {
      url: t.arg.string({ required: true }),
      title: t.arg.string({ required: true }),
    },

    resolve: (_, args) => Article.create(args.title, args.url),
  }),
  addToDo: t.field({
      type: ToDoType,
      args: {
        title: t.arg.string({ required: true }),
      },
      resolve: (_, args) => Article.addToDo(args.title)
    }),
    // completeToDo: t.field({
    //   type: ToDoType,
    //   args: {
    //     title: t.arg.string({ required: true }),
    //   },
    //   resolve: (_, args) => Article.completeToDo(args.title)
    // }),
}));
