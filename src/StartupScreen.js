let state = "start"; // "start" | "playing" | "credits"
let logo;
let font;

function preload() {
  logo = loadImage("assets/logo.png");
  font = loadFont("Redaction35-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER); // positions rects by center, easier
  imageMode(CENTER);
  textFont(font);
}

function draw() {
  background(20);
  if (state === "start") drawStart();
  else if (state === "playing") drawGame();
}

function drawStart() {
  fill(255);
  textSize(64);
  image(logo, width / 2, height * 0.3);

  drawButton("Play", width / 2, height * 0.55, 220, 60);
  drawButton("Credits", width / 2, height * 0.68, 220, 60);
}

function drawButton(label, x, y, w, h) {
  const hover = mouseX > x - w/2 && mouseX < x + w/2 &&
                mouseY > y - h/2 && mouseY < y + h/2;
  fill(hover ? 90 : 60);
  rect(x, y, w, h, 10);
  fill(255);
  textSize(38);
  text(label, x, y);
  return hover;
}

function mousePressed() {
  if (state !== "start") return;
  if (isOver(width/2, height*0.55, 220, 60)) state = "playing";
  if (isOver(width/2, height*0.68, 220, 60)) state = "settings";
}

function isOver(x, y, w, h) {
  return mouseX > x - w/2 && mouseX < x + w/2 &&
         mouseY > y - h/2 && mouseY < y + h/2;
}

function windowResized() { resizeCanvas(windowWidth, windowHeight); }
function drawGame() { /* teammates' code goes here */ }