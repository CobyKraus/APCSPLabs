
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(55, 55, 55);
  fill(200, 30, 150);


}
//testforgithub
//  The draw function is called @ 30 fps
function draw() {
//Monster 1
// body
fill(255, 0, 0);
rect(100, 300, 200, 200);
// eyes
fill (250, 250, 250);
ellipse(150, 400, 50, 50);
fill (250, 250, 250);
ellipse(250, 400, 50, 50);
// pupils
fill (0, 0, 0);
ellipse(150, 400, 25, 25);
fill (0, 0, 0);
ellipse(250, 400, 25,25);
// Mouth
fill (0, 0, 250);
arc(240,440,200,50,20,PI);

//Monster 2
// body
fill(255, 0, 0);
rect(500, 400, 200, 200);
// eyes
fill (250, 250, 250);
ellipse(650, 500, 50, 50);
fill (250, 250, 250);
ellipse(550, 500, 50, 50);
// pupils
fill (0, 0, 0);
ellipse(550, 500, 25, 25);
fill (0, 0, 0);
ellipse(650, 500, 25,25);
// Mouth
fill (0, 0, 250);
arc(640,540,200,50,20,PI);

//Monster 3
// body
fill(255, 0, 0);
rect(450, 20, 200, 200);
// eyes
fill (250, 250, 250);
ellipse(600, 120, 50, 50);
fill (250, 250, 250);
ellipse(500, 120, 50, 50);
// pupils
fill (0, 0, 0);
ellipse(500, 120, 25, 25);
fill (0, 0, 0);
ellipse(600, 120, 25,25);
// Mouth
fill (0, 0, 250);
arc(590,160,200,50,20,PI);

}
