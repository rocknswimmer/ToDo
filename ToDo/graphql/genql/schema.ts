import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    ID: string,
    String: string,
    Boolean: boolean,
}

export interface Article {
    id: Scalars['ID']
    title: Scalars['String']
    url: Scalars['String']
    __typename: 'Article'
}

export interface Mutation {
    addToDo: ToDo
    createArticle: Article
    __typename: 'Mutation'
}

export interface Query {
    article: Article
    articles: Article[]
    completeToDo: ToDo
    todos: ToDo[]
    __typename: 'Query'
}

export interface ToDo {
    complete: Scalars['Boolean']
    title: Scalars['String']
    __typename: 'ToDo'
}

export interface ArticleRequest{
    id?: boolean | number
    title?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationRequest{
    addToDo?: [{title: Scalars['String']},ToDoRequest]
    createArticle?: [{title: Scalars['String'],url: Scalars['String']},ArticleRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    article?: [{articleID: Scalars['String']},ArticleRequest]
    articles?: ArticleRequest
    completeToDo?: [{title: Scalars['String']},ToDoRequest]
    todos?: ToDoRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ToDoRequest{
    complete?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Article_possibleTypes: string[] = ['Article']
export const isArticle = (obj?: { __typename?: any } | null): obj is Article => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isArticle"')
  return Article_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes: string[] = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const ToDo_possibleTypes: string[] = ['ToDo']
export const isToDo = (obj?: { __typename?: any } | null): obj is ToDo => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isToDo"')
  return ToDo_possibleTypes.includes(obj.__typename)
}


export interface ArticlePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ArticleObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface MutationPromiseChain{
    addToDo: ((args: {title: Scalars['String']}) => ToDoPromiseChain & {get: <R extends ToDoRequest>(request: R, defaultValue?: FieldsSelection<ToDo, R>) => Promise<FieldsSelection<ToDo, R>>}),
    createArticle: ((args: {title: Scalars['String'],url: Scalars['String']}) => ArticlePromiseChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Promise<FieldsSelection<Article, R>>})
}

export interface MutationObservableChain{
    addToDo: ((args: {title: Scalars['String']}) => ToDoObservableChain & {get: <R extends ToDoRequest>(request: R, defaultValue?: FieldsSelection<ToDo, R>) => Observable<FieldsSelection<ToDo, R>>}),
    createArticle: ((args: {title: Scalars['String'],url: Scalars['String']}) => ArticleObservableChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Observable<FieldsSelection<Article, R>>})
}

export interface QueryPromiseChain{
    article: ((args: {articleID: Scalars['String']}) => ArticlePromiseChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Promise<FieldsSelection<Article, R>>}),
    articles: ({get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>[]) => Promise<FieldsSelection<Article, R>[]>}),
    completeToDo: ((args: {title: Scalars['String']}) => ToDoPromiseChain & {get: <R extends ToDoRequest>(request: R, defaultValue?: FieldsSelection<ToDo, R>) => Promise<FieldsSelection<ToDo, R>>}),
    todos: ({get: <R extends ToDoRequest>(request: R, defaultValue?: FieldsSelection<ToDo, R>[]) => Promise<FieldsSelection<ToDo, R>[]>})
}

export interface QueryObservableChain{
    article: ((args: {articleID: Scalars['String']}) => ArticleObservableChain & {get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>) => Observable<FieldsSelection<Article, R>>}),
    articles: ({get: <R extends ArticleRequest>(request: R, defaultValue?: FieldsSelection<Article, R>[]) => Observable<FieldsSelection<Article, R>[]>}),
    completeToDo: ((args: {title: Scalars['String']}) => ToDoObservableChain & {get: <R extends ToDoRequest>(request: R, defaultValue?: FieldsSelection<ToDo, R>) => Observable<FieldsSelection<ToDo, R>>}),
    todos: ({get: <R extends ToDoRequest>(request: R, defaultValue?: FieldsSelection<ToDo, R>[]) => Observable<FieldsSelection<ToDo, R>[]>})
}

export interface ToDoPromiseChain{
    complete: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ToDoObservableChain{
    complete: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}