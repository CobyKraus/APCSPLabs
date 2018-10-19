/*
**  Ball Constructor Function
**  Coby Kraus
**  Aug 20, 2018
*/
//creating a square function
function Square(loc,  col){
  // Instance variables
   this.loc = loc;
   this.w = 150;
   this.h = 20;
   this.col = col;
  // This function calls other functions
  this.run = function(){
    this.update();
    this.render();
  }

  //lerping paddle to mouse so that paddle follows mouse
   this.update = function(){
     var mouseLoc = createVector(mouseX, 500);
     this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09)

   }


    // render() draws the square at the new location
    //creating the parameters of the square
   this.render = function(){
      fill(0,255,0);
      rect(this.loc.x,500 ,  this.w, this.h);
   }

}
