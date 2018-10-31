/*
**  Lab 919 Collisions
**  Coby Kraus
**  Aug 20, 2018
*/
function Bar(loc,wid,hei,clr){
  this.loc=loc;
  this.wdth=wid;
  this.hght=hei;
  this.clr=clr;



  this.render = function(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.wdth,this.hght)
  }
}
