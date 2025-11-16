// You'll be passed 
// an array of objects (list) - you 
// must sort them in descending order 
// based on the value of the specified property (sortBy).


function sortList (sortBy, list) {
  return list.sort((a, b) => b[sortBy] - a[sortBy]);
}