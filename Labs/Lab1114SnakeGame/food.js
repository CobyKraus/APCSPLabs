/*
**  Ball Constructor Function
**  Coby Kraus
**  Aug 20, 2018
*/
//run function draws the food
//set parameters of length and width and location
function Food(loc){
  this.loc=loc;



  this.run = function(){
    this.update();
    this.render();
  }
  this.update = function(){

  }
  //creates and draws the food
  this.render = function(){

    fill(255,0,0)
    rect(this.loc.x, this.loc.y, w, w)
  }
}
