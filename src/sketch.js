let screen = "start";
let logo, font, firePic, icePic, mindPic;
let playerImg;
let particles = [];
let colors = ['#de0000', '#800080', '#83f0ff'];

function preload() {
  logo = loadImage("assets/images/logo.png");
  font = loadFont("assets/font/Redaction35-Regular.ttf");
  firePic = loadImage("assets/images/fire_symbol-32x.PNG");
  icePic = loadImage("assets/images/ice_symbol-32x.PNG");
  mindPic = loadImage("assets/images/psych_symbol-64x.PNG");
  playerImg = loadImage("assets/character/BasePlayerSprite.png");
}

function setup() {
  createCanvas(600, 400);
  textFont(font);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < 250; i++) {
    particles.push(new Particle());
  }

  setupStart();
  setupClass();
  setupCustom();
  goTo("start");
}

function draw() {
  background(0);
  for (let p of particles) {
      p.move();
      p.display();
      p.checkEdges();
  }
  if (screen === "start") {
    drawStart();
  } else if (screen === "class") {
    drawClass();
  } else {
    drawCustom();
  }
}

function goTo(name) {
  screen = name;
  hideStart();
  hideClass();
  hideCustom();

  if (name === "start") {
    showStart();
  } else if (name === "class") {
    showClass();
  } else if (name === "custom") {
    showCustom();
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(0.5, 1);
    this.xSpeed = random(-0.3, 0.3);
    this.ySpeed = random(-0.3, 0.3);

    this.hex = random(colors);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  display() {
    let glow = color(this.hex);

    stroke(glow);
    strokeWeight(this.size * 4);

    fill(red(glow), green(glow), blue(glow));
    ellipse(this.x, this.y, this.size);

    noStroke();
    fill(this.hex);
    ellipse(this.x, this.y, this.size);
  }

  checkEdges() {
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }
}

