
function Snake(headloc,vel){
  this.headloc = headloc;
  this.vel = vel;
  this.segments = [];
  this.segments.push(createVector(0,0));

  this.run = function(){
    this.update();
    this.render();
    this.tangled();
  }
  this.update = function(){
    this.segments[0].x = this.headloc.x
    this.segments[0].y = this.headloc.y
    this.headloc.add(this.vel);
    this.headloc.x = constrain(this.headloc.x, 0, width-w)
    this.headloc.y = constrain(this.headloc.y, 0, height-w)


    //for loop will move the segments
      for (var i =this.segments.length-1;i>=1;i--){
        this.segments[i].x=this.segments[i-1].x;
        this.segments[i].y=this.segments[i-1].y;
  }


    //console.log(this.headloc.dist(food.loc));
    if(this.headloc.dist(food.loc) === 0) {
       this.segments.push(createVector(this.segments[this.segments.length-1].x+w, this.segments[this.segments.length-1].y));
       //this.segments[this.segments.length-1].loc
      score++;
      newFood();



    }

  }
  this.render = function(){
    fill(0,255,0)
    rect(this.headloc.x, this.headloc.y, w, w);
     for(i=1;i<=this.segments.length-1;i++){
       rect(this.segments[i].x,this.segments[i].y,w,w)
    }
    // for(var i = 1; i<this.segments.length-2;i++){
    //   if(this.segments[this.segments.length-1].x===this.segments[i].x && this.segments[this.segments.length-1].y===this.segments[i].y){
    //     segments = [];
    //     collision = true;
    //   }
    // }
  }
  this.tangled = function(){
    for(var i = 0; i<this.segments.length-1;i++){
      if(this.headloc.x===this.segments[i].x && this.headloc.y===this.segments[i].y){
        food.loc.x=1000;
        food.loc.y=1000;
        fill(0,250,0);
        rect(800,800,400,400)
        start="true";
        endGame();
      }
    }
  }


}
