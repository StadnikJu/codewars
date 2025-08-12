
function toNumberArray(stringarray){
  const newString = stringarray.map((element) => {
    return Number(element);
  })
  
  return newString;
}