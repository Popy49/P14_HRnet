/**
 * Function to sort an array
 *
 * @params array with data to sort
 * @params string with key of sorting
 * @params string with order of sorting
 * @return array or undefined
 * @author JP
 * @version 1.0
 */

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
