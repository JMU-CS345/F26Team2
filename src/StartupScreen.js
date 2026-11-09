let state = "start"; // "start" | "playing" | "credits"
let logo;
let font;
let playBtn, creditsBtn, backBtn;

function preload() {
  logo = loadImage("assets/logo.png");
  font = loadFont("Redaction35-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  imageMode(CENTER);
  textFont(font);

  playBtn = createButton("Play");
  playBtn.size(240, 80);
  playBtn.style("background", "#3C3C3C");
  playBtn.style("color", "#FFFFFF");
  playBtn.style("font-size", "32px");
  playBtn.style("border", "none");
  playBtn.style("border-radius", "10px");
  playBtn.style("cursor", "pointer");
  playBtn.position(width / 2 - 110, height * 0.55 - 30);
  playBtn.mousePressed(() => setState("playing"));

  creditsBtn = createButton("Credits");
  creditsBtn.size(240, 80);
  creditsBtn.style("background", "#3C3C3C");
  creditsBtn.style("color", "#FFFFFF");
  creditsBtn.style("font-size", "32px");
  creditsBtn.style("border", "none");
  creditsBtn.style("border-radius", "10px");
  creditsBtn.style("cursor", "pointer");
  creditsBtn.position(width / 2 - 110, height * 0.68 - 30);
  creditsBtn.mousePressed(() => setState("credits"));

  backBtn = createButton("Back");
  backBtn.size(240, 80);
  backBtn.style("background", "#3C3C3C");
  backBtn.style("color", "#FFFFFF");
  backBtn.style("font-size", "32px");
  backBtn.style("border", "none");
  backBtn.style("border-radius", "10px");
  backBtn.style("cursor", "pointer");
  backBtn.position(width / 2 - 110, height * 0.8 - 30);
  backBtn.mousePressed(() => setState("start"));

  setState("start");
}

function draw() {
  background(20);
  if (state === "start") drawStart();
  else if (state === "playing") drawGame();
  else if (state === "credits") drawCredits();
}

function drawStart() {
  image(logo, width / 2, height * 0.3);
}

function drawCredits() {
  fill(255);
  textSize(48);
  text("Credits", width / 2, height * 0.2);
  textSize(28);
  text("Names go here", width / 2, height * 0.4);
}

function drawGame() { /* teammates' code goes here */ }

function setState(next) {
  state = next;
  playBtn.hide();
  creditsBtn.hide();
  backBtn.hide();

  if (state === "start") { playBtn.show(); creditsBtn.show(); }
  if (state === "credits") backBtn.show();
}