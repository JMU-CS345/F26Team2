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
  push();
  imageMode(CENTER);   // (479, 185) is the sprite's center
  image(potionShopPic, 479, 185, potionShopPic.width * 0.6, potionShopPic.height * 0.6);
  pop();

  moveDummy();
  drawDummy();

  if (nearbyShop()) {
    push();
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    textSize(14);
    text("Press E to enter", dummy.x, dummy.y - 25);
    pop();
  }
}

// Shop footprints (match what drawOverworld draws).
// The green box is the weapon shop (placeholder art).
function shopRects() {
  return [
    { name: "weaponshop", x: 15, y: 175, w: 150, h: 150 },
    // potion shop sprite is drawn centered on (479, 185), so shift to its top-left corner
    { name: "potionshop",
      x: 479 - potionShopPic.width * 0.3, y: 185 - potionShopPic.height * 0.3,
      w: potionShopPic.width * 0.6, h: potionShopPic.height * 0.6 },
  ];
}

// Returns the name of a shop close enough to enter, or null.
function nearbyShop() {
  const reach = 30;
  for (let s of shopRects()) {
    let cx = constrain(dummy.x, s.x, s.x + s.w);   // closest point on the rect
    let cy = constrain(dummy.y, s.y, s.y + s.h);
    if (dist(dummy.x, dummy.y, cx, cy) < reach) return s.name;
  }
  return null;
}
