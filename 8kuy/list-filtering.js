// In this kata you will create a function that takes a list 
// of non-negative integers and strings and returns a new list with the strings filtered out.




function filter_list(l) {
  newArr = l.filter((item, index, arr) => {
    if(typeof item === "number") {
        return true;
    }
  });

  return newArr;
}

