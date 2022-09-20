function sortByKey(array, key, order) {
  return array.sort(function (a, b) {
    var x = a[key]
    var y = b[key]
    if (typeof x == "string") {
      x = ("" + x).toLowerCase()
    }
    if (typeof y == "string") {
      y = ("" + y).toLowerCase()
    }
    if (order === key) {
      return x < y ? 1 : x > y ? -1 : 0
    } else {
      return x < y ? -1 : x > y ? 1 : 0
    }
  })
}

export default sortByKey
