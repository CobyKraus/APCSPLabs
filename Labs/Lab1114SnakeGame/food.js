/*
**  Ball Constructor Function
**  Coby Kraus
**  Aug 20, 2018
*/

function Ball(location, velocity, radius, col){
  // Instance variables
   this.loc = location;
   this.vel = velocity;
   this.rad = radius;
   this.col = col;
   this.acc = createVector(0,.1);
  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  // This function changes the location of the ball
  // by adding speed to x and y
   this.update = function(){
	   if(this !== redBall){
			  var d = this.loc.dist(redBall.loc);
     if(d<350){
				var steeringForce = p5.Vector.sub(redBall.loc, this.loc);
				steeringForce.normalize();
				steeringForce.mult(.02);
				this.vel.add(steeringForce);
			}
			if(d<150){
				var steeringForce = p5.Vector.sub(this.loc, redBall.loc);
				steeringForce.normalize();
				steeringForce.mult(.1);
		    this.vel.add(steeringForce);
			}
			this.vel.add(steeringForce);
	   }
	   this.vel.limit(3)
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
      fill(this.col);
      ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
   }

}
