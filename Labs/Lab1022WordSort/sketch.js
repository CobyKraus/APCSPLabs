var txt;
function preload(){
  // p5 has a function named "loadStrings"
  txt = loadStrings("word.txt");
  console.log(txt);
}

function setup() {
 noCanvas();

 console.log("before bubble sorting")
 console.log(txt);
 swap();
 console.log("after bubble sorting");
 console.log(txt);
}


function swap(){
  for(var i = txt.length - 1; i >= 0; i-- ){
    for(var j = 0; j < i-1; j++ ){
      if (txt[i]<txt[j]){
        var temp = txt[i];
        txt[i] = txt[j];
        txt[j] = temp
    }
  }
 }
}
