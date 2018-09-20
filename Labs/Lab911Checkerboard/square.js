

/*
**  Square Constructor Function::
**  Coby Kraus
**  Sept. 12, 2018
*/

//  Add perameters to your constructor function
function Sqr(location, sideLength, clr){
  this.loc = location;
  this.w=sideLength;
  this.col = clr;


  this.render = function(){
    fill(0,0,0);
    rect(this.loc.x, this.loc.y,this.w,this.w);
  }

//  Add instance variables to your constructor Function
//What does a square need to know about itself??



}//  End of Square constructor function
