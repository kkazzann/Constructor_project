
const isTableQueryValid = (tableQueries) => {
  const result = []
  for (const query of tableQueries) {
    if ("tableId" in query && "tableName" in query && "tableRange" in query && "name" in query) {
      result.push(true)
    } else {
      result.push(false)
    }
  }

  return result.every(item => item === true)
}

export default isTableQueryValid