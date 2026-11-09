let font;
let firePic;
let icePic;
let mindPic;

let selectedMage = "";
let particles = [];
let colors = ['#de0000', '#800080', '#83f0ff'];
let numOfParticles = 250;

let fireButton;
let iceButton;
let mindButton;

async function setup() {
  createCanvas(600, 400);

  font = await loadFont("assets/fonts/Redaction35-Regular.ttf");
  firePic = await loadImage("assets/images/fire_symbol-32x.PNG");
  icePic = await loadImage("assets/images/ice_symbol-32x.PNG");
  mindPic = await loadImage("assets/images/psych_symbol-64x.PNG");

  for (let i = 0; i < numOfParticles; i++) {
    particles.push(new Particle());
  }
  
  fireButton = createButton("Select Fire");
  fireButton.position(60, 330);
  
  fireButton.style("background-color", "black");
  fireButton.style("color", "white");
  fireButton.style("border", "2px solid white");
  
  fireButton.mousePressed(function() {
    selectedMage = "Fire";
  });

  iceButton = createButton("Select Ice");
  iceButton.position(260, 330);

  iceButton.style("background-color", "black");
  iceButton.style("color", "white");
  iceButton.style("border", "2px solid white");
  
  iceButton.mousePressed(function() {
    selectedMage = "Ice";
  });

  mindButton = createButton("Select Psychic");
  mindButton.position(440, 330);
  
  mindButton.style("background-color", "black");
  mindButton.style("color", "white");
  mindButton.style("border", "2px solid white");
  
  mindButton.mousePressed(function() {
    selectedMage = "Psychic";
  });
}

function draw() {
  background(0);

  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
    particles[i].checkEdges();
  }

  textAlign(CENTER, CENTER);
  textFont(font);

  fill(255);
  textSize(40);
  text("Pick Your Mage", 310, 70);

  stroke(255, 215, 0);       
  strokeWeight(3);
  fill(255, 0, 0);
  square(30, 170, 150);
  noStroke();
  fill(0);
  textSize(25);
  text("FIRE", 105, 195);
  image(firePic, 65, 220, 80, 80);

  stroke(68, 80, 196);       
  strokeWeight(4);
  fill(131, 240, 255);
  square(225, 170, 150);
  fill(0);
  noStroke();
  text("ICE", 300, 195);
  image(icePic, 260, 220, 80, 80);

  stroke(203,47,220);       
  strokeWeight(4);
  fill(128, 0, 128);
  square(420, 170, 150);
  fill(0);
  noStroke();
  text("PSYCHIC", 495, 195);
  image(mindPic, 455, 220, 80, 80);

  fill(255);
  textSize(20);
  text("Selected: " + selectedMage, 300, 370);
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