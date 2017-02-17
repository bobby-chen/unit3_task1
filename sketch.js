var yoff = 2;        

function setup() {
  createCanvas(710, 400);
}

function draw() {
  fill(0,0,255,0);
  beginShape(); 
  
  var xoff = 0;       
  

  for (var x = 0; x <= width; x += 10) {
    var y = map(noise(xoff, yoff), 0, 1, 200,300);
    vertex(x, y+100); 
    xoff += 0.1;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

var a = 100
var b = 200
var g = 150
var g2 = 100

function draw() {
  
  background (a+80,a,a);
  noStroke();
  fill (255,g,0)
  ellipse (355,b,90,90);
  fill(g2+155,g2,g2-80);
  a = a-0.2
  b = b+0.5;
  g = g-1
  g2 = g2-0.2
  
  beginShape(); 
  var xoff = 0.5;       
  for (var x = 0; x <= width; x += 10) {
    var y = map(noise(xoff, yoff), 0, 1, 200,300);
    vertex(x, y+50); 
    xoff += 0.1;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  
  
//
  beginShape(); 
  
  var xoff = 0.5;       
  for (var x = 0; x <= width; x += 10) {
    var y = map(noise(xoff, yoff), 0, 1, 200,300);
    vertex(x, y); 
    xoff += 0.1;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}



