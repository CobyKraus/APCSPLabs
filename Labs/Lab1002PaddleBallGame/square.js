/*
**  Ball Constructor Function
**  Coby Kraus
**  Aug 20, 2018
*/

function Square(loc, rad, col){
  // Instance variables
   this.loc = loc;
   this.w = width;
   this.h = height;
   this.col = col;
  // This function calls other functions
  this.run = function(){
    this.update();
    this.render();
  }
  // This function changes the location of the ball
  // by adding speed to x and y
   this.update = function(){
     var mouseLoc = createVector(mouseX, 500);
     this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09)

   }


    // render() draws the square at the new location
   this.render = function(){
      fill(0,255,0);
      rect(this.loc.x,500 , 150, 20);
   }

}
