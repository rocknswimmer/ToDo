
var Article_possibleTypes = ['Article']
export var isArticle = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isArticle"')
  return Article_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
export var isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var ToDo_possibleTypes = ['ToDo']
export var isToDo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isToDo"')
  return ToDo_possibleTypes.includes(obj.__typename)
}
