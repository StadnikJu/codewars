//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(sentense) {

    const mark = "!";
    let newStr;
    newStr = sentense.replaceAll(mark, "");
    return newStr;

}

console.log(removeExclamationMarks("sentense!"));