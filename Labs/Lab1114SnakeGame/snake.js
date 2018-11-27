
function Snake(headloc,vel){
  this.headloc = headloc;
  this.vel = vel;
  this.segments = [];
  this.segments.push(createVector(0,0));

  this.run = function(){
    this.update();
    this.render();
  }
  this.update = function(){

    this.segments[0].x = this.headloc.x
    this.segments[0].y = this.headloc.y
    this.headloc.add(this.vel);
    this.headloc.x = constrain(this.headloc.x, 0, width-w)
    this.headloc.y = constrain(this.headloc.y, 0, height-w)
    //console.log(this.headloc.dist(food.loc));
    if(this.headloc.dist(food.loc) === 0) {
      this.segments.push(createVector(0, 0));
      newFood();
    }
  }
  this.render = function(){
    fill(0,255,0)
    rect(this.headloc.x, this.headloc.y, w, w);
    rect(this.segments[0].x,this.segments[0].y,w,w)
  }
}
// function Segments(){
//   for(i=0;i<segments.length;i++){
//     // this.headloc = headloc
//   }
// }
