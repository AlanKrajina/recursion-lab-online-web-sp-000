// Code your solution here!
function printString(string){

  if (string.length > 1){

    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
    } else {
    return true;
  }
}
