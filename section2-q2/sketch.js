// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if([i + j] % 2 == 1){
        fill(150);
      }
      else{fill(255);}
      console.log(i, j);
      rect(size*i, size*j ,size, size);
    }
  }
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if(j < 3 && [i + j] % 2 == 1){
        fill(255,0,0);
      }
      else if(j > 4 && [i + j] % 2 == 1){
        fill(0);
      }
      else if(j > 2 && j < 5 && [i + j] % 2 == 1){
        fill(150);
      }
      else{fill(255);}
      ellipse(i*size+size/2, j*size+size/2, size*9/10);
    }
}
}
