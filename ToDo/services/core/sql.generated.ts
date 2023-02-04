import { ColumnType } from 'kysely';

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Todo {
  complete: Generated<boolean | null>;
  title: string;
}

export interface Database {
  todo: Todo;
}
