var txt;
function preload(){
  // p5 has a function named "loadStrings"
  //sets a variable to the array of words
  txt = loadStrings("word.txt");
}

function setup() {
 noCanvas();
//prints out the array before sorting
 console.log("before bubble sorting")
 console.log(txt);
 //calling the call function
 swap();
 //prints out the array after sorting
 console.log("after bubble sorting");
 console.log(txt);
}

//function that sorts and swaps the words
function swap(){
  //first for loop that goes down from the length of array to 0
  for(var i = txt.length - 1; i >= 0; i-- ){
    //second for loop that goes from 0 to i
    for(var j = 0; j < i; j++ ){
      //seeing if one word is greater than the other word
      if (txt[i]<txt[j]){
        //sets a variable to the first word that is beeing swapped
        var temp = txt[i];
        //swaps the words
        txt[i] = txt[j];
        //replaces the first word with the second word
        txt[j] = temp
    }
  }
 }
}
