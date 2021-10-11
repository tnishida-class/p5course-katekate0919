function setup() {
  createCanvas(128,128);
}

function draw() {
  background(255);
  stroke(255)
  strokeWeight(4);
  fill(130, 0, 181);
  triangle(10,120,116,120,116,10);
  fill(255)
  triangle(106,10,106,108,10,108)
  stroke(245, 130, 235)
  strokeWeight(1);
  fill(255);
  triangle(2,106,104,106,104,2);
  stroke(255)
  strokeWeight(4);
  fill(245, 130, 235);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
