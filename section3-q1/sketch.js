let x,a,b;
function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width/32;
  a = width/32;
  b = (width/32)*15;
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(66, 123, 245);
  let size = width / 32;
  strokeWeight(1);
  stroke(0);

  fill(169, 255, 10);
  ellipse(size*12,height-size,size*8);
  ellipse(size*22,height,size*8);
  ellipse(size*32,height-size,size*8);

  fill(5, 115, 62);
  triangle(size*15,height,size*25,height,size*20,size*13);
  triangle(size*-4,height,size*6,height,size*1,size*12);

  for(let i = 0; i < 32; i++){
    for(let j = 0; j < 3; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      fill(219, 86, 33)
      console.log(i, j);
      rect(size*i, size*(j+16), size, size);
    }
  }
  fill(255);
  ellipse(x,size*2,size*2,size*1);
  ellipse(x+size*6,size*4,size*3,size*2);
  ellipse(x+size*13,size*3,size*2,size*1);
  ellipse(x+size*20,size*2,size*4,size*3);
  ellipse(x+size*27,size*4,size*4,size*3);
  x += 1;
  if (x > width){x = 0;}

  fill(255,0,0);
  ellipse(a,b,20,80);
  if(keyIsDown(LEFT_ARROW)){a -= 5;}
  if(keyIsDown(RIGHT_ARROW)){a += 5;}
  if(keyIsDown(UP_ARROW)){b -= 5;}
  if(keyIsDown(DOWN_ARROW) && b<=(width/32)*15){b += 5;}
}
