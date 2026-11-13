let weaponBg;
let weaponPlayer;

function preload() {
  weaponBg = loadImage("../assets/images/woodd.jpg");
  weaponPlayer = loadImage("../assets/character/BasePlayerSprite.png");
}

function setup() {
  createCanvas(600, 400);
  setupWeapons();
}

function draw() {
  background(0);
  drawWeapons();
}