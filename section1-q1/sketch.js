// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  stroke(15,128,73);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  // BLANK[1]
  arc(100 - 25, 100, 100, 100,  QUARTER_PI * 5, QUARTER_PI * 5 + PI);

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

  stroke(blue);
  fill(blue);
  ellipse(300, 100, 100, 100);

  strokeWeight(5);
  stroke(255);
  fill(green);
  ellipse(290, 90, 110, 110);

  strokeWeight(8);
  stroke(255);
  fill(255);
  ellipse(288, 97, 90, 90);

  strokeWeight(1.3);
  stroke(gray);
  fill(gray);
  textSize(24);
  textFont("serif");
  text("KOBE", 255, 85);

  strokeWeight(0.8);
  stroke(gray);
  fill(gray);
  textSize(10);
  textFont("serif");
  text("UNIVERSITY", 270, 103);

  

}
