function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(0, 51, 160);

  for(let i = 0; i < 196; i++){
    for(let j = 0; j < 80; j++){
    let theta = TWO_PI * i / 196;
    let x = windowWidth / 2 + cos(theta) * [10 * j + 1];
    let y = windowHeight / 2 + sin(theta) * [10 * j + 1];
    star(x, y, 1);
  }
 }

 for(let k = 0; k < 196; k++){
   for(let l = 0; l < 127; l++){
   let theta = TWO_PI * k / 196;
   let x1 = windowWidth / 5 + cos(theta) * [10 * l + 1];
   let y1 = windowHeight / 5 + sin(theta) * [10 * l + 1];
   star1(x1, y1, 1);
  }
 }

 for(let m = 0; m < 196; m++){
   for(let n = 0; n < 127; n++){
   let theta = TWO_PI * m / 196;
   let x2 = 4 * windowWidth / 5 + cos(theta) * [10 * n + 1];
   let y2 = windowHeight / 5 + sin(theta) * [10 * n + 1];
   star2(x2, y2, 1);
  }
 }

 for(let o = 0; o < 196; o++){
   for(let p = 0; p < 127; p++){
   let theta = TWO_PI * o / 196;
   let x3 = windowWidth / 5 + cos(theta) * [10 * p + 1];
   let y3 = 4 * windowHeight / 5 + sin(theta) * [10 * p + 1];
   star3(x3, y3, 1);
  }
 }

 for(let q = 0; q < 196; q++){
   for(let r = 0; r < 127; r++){
   let theta = TWO_PI * q / 196;
   let x4 = 4 * windowWidth / 5 + cos(theta) * [10 * r + 1];
   let y4 = 4 * windowHeight / 5 + sin(theta) * [10 * r + 1];
   star4(x4, y4, 1);
  }
 }

 if(mouseIsPressed){
   for(let s = 0; s < 100; s++){
     for(let t = 0; t < 45; t++){
     let theta = TWO_PI * s / 100;
     let x0 = windowWidth / 2 + cos(theta) * [20 * t + 30];
     let y0 = windowHeight / 2 + sin(theta) * [20 * t + 30];
     star0(x0, y0, 2);
    }
   }
 }

}



function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    fill(255,255,0);
    stroke(255,255,0);
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function star1(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    fill(255, 160, 230);
    stroke(255, 160, 230);
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function star2(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    fill(160, 255, 255);
    stroke(160, 255, 255);
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function star3(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    fill(170, 255, 160);
    stroke(170, 255, 160);
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function star4(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    fill(240, 160, 60);
    stroke(240, 160, 60);
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function star0(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    fill(255);
    stroke(255);
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
