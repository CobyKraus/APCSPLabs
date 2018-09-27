/*
**  Lab 919 Collisions
**  Coby Kraus
**  Aug 20, 2018
*/

function Boid(location, velocity, radius, col){
  // Instance variables
   this.loc = location;
   this.vel = velocity;
   this.rad = radius;
   this.col = col;
   //this.acc = createVector(0,.1);
  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  // This function changes the location of the ball
  // by adding speed to x and y
   this.update = function(){
     this.vel.add(this.acc);
     this.loc.add(this.vel);

   }

   //checkEdges() reverses speed when the ball touches an edge
   this.checkEdges = function(){
    //  if(this.loc.x < 0) this.vel.x = -this.vel.x;
    //  if(this.loc.x > width) this.vel.x = -this.vel.x;
    //  if(this.loc.y < 0) this.vel.y = -this.vel.y;
    //  if(this.loc.y > height) this.vel.y = -this.vel.y;

    if(this.loc.x < 0)  this.loc.x = width;
    if(this.loc.x > width)  this.loc.x = 0;
    if(this.loc.y < 0)  this.loc.y = height;
    if(this.loc.y > height)  this.loc.y = 0;

   }

    // render() draws the ball at the new location
   this.render = function(){
     push() // push or save the current coord system into the stack
      translate(this.loc.x, this.loc.y);
      rotate(0);
      triangle(-5, 0, 5, 0, 0, -15);
     pop()  //  pop or restore the coordianate system from the stack

   }

}
