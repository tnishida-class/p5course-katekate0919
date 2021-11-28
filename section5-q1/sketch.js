// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
}

function draw(){
  background(255);
  balloon("I love keyakizaka46", mouseX, mouseY);
}

function balloon(t, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;

  if(x <= 200 && y <= 200){
  fill(130, 0, 181);
  rect(x, y, w + p * 2, h + p * 2, 30, 30, 5, 30);
  noStroke()
  triangle(x + w + 3, y + h, x + w - 15, y + h, x + w + 5, y + h + 10,);
}
  else if(x >= 200 && y <= 200){
  fill(130, 0, 181);
  rect(x, y, w + p * 2, h + p * 2, 30, 30, 30, 5);
  noStroke()
  triangle(x, y + h, x - 5, y + h + 10, x + 15, y + h,);
}
  else if (x <= 200 && y >= 200){
  fill(130, 0, 181);
  rect(x, y, w + p * 2, h + p * 2, 30, 5, 30, 30);
  noStroke()
  triangle(x + w + 1, y + 1, x + w - 15, y, x + w + 5, y - 10,);
}
  else{
  fill(130, 0, 181);
  rect(x, y, w + p * 2, h + p * 2, 5, 30, 30, 30);
  noStroke()
  triangle(x, y + 3, x + 15, y, x - 5, y - 10,);
}

  fill(245, 130, 235);
  text(t, x + p, y + h + p);
}
