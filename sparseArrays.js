function matchingStrings(strings, queries) {
  let results = []
  let a = strings.map((string) => {
    return (string)
  })

  let b = queries.map((query) => {
   results.push((a.filter(x => x === query ).length))
  })
  return results
}
console.log(matchingStrings(["aba", "baba", "aba", "xzxb"],["aba", "xzxb", "ab"]))