/*
**  Lab 919 Collisions
**  Coby Kraus
**  Aug 20, 2018
*/
function Bar(loc,wid,hei,clr){
  this.loc=location;
  this.width=wid;
  this.height=hei;
  this.clr=color;



  this.render = function(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.wid,this.hei)
  }
}
