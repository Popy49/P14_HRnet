var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
]

var mapped = items.map(function (e, i) {
  return { index: i, name: e.name.toLowerCase() }
})

// on trie l'objet temporaire avec les valeurs réduites
mapped.sort(function (a, b) {
  if (a.name > b.name) {
    return 1
  }
  if (a.name < b.name) {
    return -1
  }
  return 0
})

// on utilise un objet final pour les résultats
var result = mapped.map(function (e) {
  return items[e.index]
})

console.log(result)
