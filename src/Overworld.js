// Overworld screen. Called from draw() in sketch.js.
// (Canvas is created once in sketch.js: createCanvas(600, 400))

function drawOverworld() {
  background(220);
  strokeWeight(0);
  fill(0, 176, 80);
  rect(15, 175, 150, 150);
  fill(255, 0, 0);
  rect(10, 10, 241, 75);
  rect(350, 10, 240, 75);
  noFill();
  stroke(0);
  strokeWeight(20);
  rect(0, 0, 600, 400);
  image(potionShopPic, 479, 185, potionShopPic.width * 0.6, potionShopPic.height * 0.6);
}
