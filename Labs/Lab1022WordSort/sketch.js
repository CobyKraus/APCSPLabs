var txt;
function preload(){
  // p5 has a function named "loadStrings"
  txt = loadStrings("words.txt");
}

function setup() {
 noCanvas();
}

swap(nums, 2, 4)
function swap(nums, a, b){
  for(var i = nums.length - 1; i >= 1; i-- ){
    for(var j = 0; j < nums.length; j++ ){
   var temp = nums[a];
   nums[a] = nums[b];
   nums[b] = temp
  }
 }
}
