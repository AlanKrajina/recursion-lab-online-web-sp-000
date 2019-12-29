// Code your solution here!
function printString(string){

  console.log(myString[0]);

  if (string.length > 1){

    let mySubString = string.substring(1, myString.length);
    printString(mySubString);

    } else {
    return true;
  }
}
