/*
**  Ball Constructor Function
**  Coby Kraus
**  Aug 20, 2018
*/
//run function draws the food
//set parameters of length and width and location
function Food(loc,w){
  this.loc=loc;
  this.w = w;
  this.loc.x = random(0,800)
  this.loc.y = random(0,800);

  this.run = function(){
    this.update();
    this.render();
  }
  this.update = function(){
    //this.vel.mult(w);
    this.w=20;

  }
  this.render = function(){
    fill(0,0,255)
    rect(this.loc.x, this.loc.y, w, w)
  }
}
