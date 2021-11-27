// ギリシャ国旗
function setup() {
  const blue = color(50, 50, 120);
  const red = color(190, 20, 15);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 13; // 縞1本の太さ

  for(let i = 0; i < 13; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    if(i % 2 == 0){
      fill(red)
    }
    else{fill(255)}
    rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  rect(0, 0, d * 9, d * 7);

  star(10, 5, 3);
  star(30, 5, 3);
  star(50, 5, 3);
  star(70, 5, 3);
  star(90, 5, 3);
  star(110, 5, 3);

  star(20, 15, 3);
  star(40, 15, 3);
  star(60, 15, 3);
  star(80, 15, 3);
  star(100, 15, 3);

  star(10, 25, 3);
  star(30, 25, 3);
  star(50, 25, 3);
  star(70, 25, 3);
  star(90, 25, 3);
  star(110, 25, 3);

  star(20, 35, 3);
  star(40, 35, 3);
  star(60, 35, 3);
  star(80, 35, 3);
  star(100, 35, 3);

  star(10, 45, 3);
  star(30, 45, 3);
  star(50, 45, 3);
  star(70, 45, 3);
  star(90, 45, 3);
  star(110, 45, 3);

  star(20, 55, 3);
  star(40, 55, 3);
  star(60, 55, 3);
  star(80, 55, 3);
  star(100, 55, 3);

  star(10, 65, 3);
  star(30, 65, 3);
  star(50, 65, 3);
  star(70, 65, 3);
  star(90, 65, 3);
  star(110, 65, 3);

  star(20, 75, 3);
  star(40, 75, 3);
  star(60, 75, 3);
  star(80, 75, 3);
  star(100, 75, 3);

  star(10, 85, 3);
  star(30, 85, 3);
  star(50, 85, 3);
  star(70, 85, 3);
  star(90, 85, 3);
  star(110, 85, 3);
}
function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    fill(255);
    stroke(255);
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
