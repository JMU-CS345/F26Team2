let screen = "start";
let chosenClass = "";
let logo, font, firePic, icePic, mindPic, potionShopPic, playerImg, backDrop;
let potionBg, weaponBg, potionPlayer, weaponPlayer, potionNPC;
let hairImgs = [], toneImgs = [];
let outfitImgs = { Fire: [], Ice: [], Psychic: [] };
let particles = [];
let colors = ['#de0000', '#800080', '#83f0ff'];

function preload() {
  logo = loadImage("assets/images/logo.png");
  font = loadFont("assets/font/Redaction35-Regular.ttf");
  firePic = loadImage("assets/images/fire_symbol-32x.PNG");
  icePic = loadImage("assets/images/ice_symbol-32x.PNG");
  mindPic = loadImage("assets/images/psych_symbol-64x.PNG");

  // Town Assets
  potionShopPic = loadImage("assets/images/potion_shop.png");
  weaponShopPic = loadImage("assets/images/weapon_shop.png");
  weaponShopNPC = loadImage("assets/images/weapon_shop_npc.png");
  playerImg = loadImage("assets/character/BasePlayerSprite.png");
  backDrop = loadImage("assets/images/custom_back_drop.png");
  bg = loadImage("assets/images/bg.png");
  wall = loadImage("assets/images/wall.png");

  // Shop assets (placeholders until dedicated art exists)
  potionBg = loadImage("assets/images/woodd.jpg");
  potionNPC = loadImage("assets/images/PotionShopNPC.png")
  weaponBg = potionBg;
  potionPlayer = potionNPC;
  weaponPlayer = playerImg;

  for (let i = 1; i <= 3; i++) {
    hairImgs.push(loadImage("assets/character/Hair" + i + ".png"));
    toneImgs.push(loadImage("assets/character/Tone" + i + ".png"));
    
    for (let m of ["Fire", "Ice","Psychic"]) {
      outfitImgs[m].push(loadImage("assets/character/" + m + "Outfit" + i + ".png"));
    }
  } 
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
  setupPotions();
  setupWeapons();
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
  } else if (screen == "overworld") {
    drawOverworld();
  } else if (screen === "potionshop") {
    drawPotions();
  } else if (screen === "weaponshop") {
    drawWeapons();
  } else {
    drawCustom();
  }

  if (COIN_SCREENS.includes(screen)) {
    drawCoins();
  }
}

function keyPressed() {
  if (screen === "overworld" && (key === "e" || key === "E")) {
    let shop = nearbyShop();
    if (shop) goTo(shop);
  } else if (keyCode === ESCAPE && (screen === "potionshop" || screen === "weaponshop")) {
    goTo("overworld");
  }
}

function goTo(name) {
  screen = name;
  hideStart();
  hideClass();
  hideCustom();
  hidePotions();
  hideWeapons();

  if (name === "start") {
    showStart();
  } else if (name === "class") {
    showClass();
  } else if (name === "custom") {
    showCustom();
  } else if (name === "potionshop") {
    showPotions();
  } else if (name === "weaponshop") {
    showWeapons();
  } else if (name === "overworld") {
    const savedPlayer = sessionStorage.getItem("Player_Appearance");
    if (savedPlayer && player) {
      Object.assign(player, JSON.parse(savedPlayer));
    }
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

