// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }
    console.log(scores);

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){
     total += scores[i];
   }
  // BLANK[1]
  for(let i = 0; i < scores.length; i++){
    if(i == 0){
      strokeWeight(1);
      arc(200,200,400,400,-HALF_PI,2*PI*scores[i]/total-HALF_PI,PIE);
    }
    else{
      strokeWeight(1);
      arc(200,200,400,400,2*PI*scores[i-1]/total-HALF_PI,2*PI*scores[i]/total-HALF_PI,PIE);
    }
  }
}
