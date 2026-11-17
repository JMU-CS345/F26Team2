
let buyPotionButton1;
let buyPotionButton2;
let buyPotionButton3;

function setupPotions() {
  
  buyPotionButton1 = makePotionBuyButton(425, 115, "Heal Potion");
  buyPotionButton2 = makePotionBuyButton(425, 178, "Mana Potion");
  buyPotionButton3 = makePotionBuyButton(425, 241, "Strength Potion");
}

function drawPotions() {
  image(potionBg, 0, 0, width, height);

  
  stroke(0);
  strokeWeight(35);
  noFill();
  rect(3, 3, 594, 394);

  
  fill(245, 217, 142);
  noStroke();
  textSize(38);
  textStyle(BOLD);
  textAlign(LEFT, BASELINE);   // title sits on a baseline just above the panel
  text("POTIONS", 90, 120);
  textAlign(LEFT, CENTER);     // back to what the rest of the shop text uses

  
  fill(245, 217, 142);
  stroke(115, 48, 64);
  strokeWeight(2);
  rect(95, 125, 160, 175);

  
  image(potionPlayer, 77, 130);

  
  fill(245, 217, 142);
  stroke(115, 48, 64);
  strokeWeight(2);
  rect(265, 90, 240, 210);

  
  fill(255, 249, 245);
  rect(275, 100, 220, 55);
  rect(275, 163, 220, 55);
  rect(275, 226, 220, 55);

  
  fill(95, 42, 53);
  noStroke();
  textAlign(LEFT);
  textSize(13);
  textStyle(BOLD);

  text("Heal Potion", 290, 117);
  text("Mana Potion", 290, 180);
  text("Strength Potion", 290, 243);

  
  textSize(12);
  textStyle(NORMAL);

  text("15 coins", 290, 140);
  text("35 coins", 290, 202);
  text("25 coins", 290, 265);

  
  fill(234, 198, 111);
  stroke(115, 48, 64);
  strokeWeight(2);
  rect(95, 280, 410, 75);

  
  fill(115, 48, 64);
  noStroke();
  textSize(15);
  textStyle(BOLD);
  text("DESCRIPTION", 110, 295);

  fill(65, 40, 43);
  textSize(12);
  textStyle(NORMAL);

  text("Welcome to the Potion Shop! Explore our collection of Health, Mana", 110, 315);
  text("and Strength potions to improve your abilities and prepare for battle!", 110, 333);
}

function makePotionBuyButton(x, y, potionName) {
  let button = createButton("BUY");

  button.position(x, y);
  button.style("background-color", "#783747");
  button.style("color", "white");
  button.style("border", "2px solid #4b232b");

  button.mousePressed(() => {
    console.log(potionName + " selected!");
  });

  return button;
}

function showPotions() {
  potionButtons().forEach(button => button.show());
}

function hidePotions() {
  potionButtons().forEach(button => button.hide());
}

function potionButtons() {
  return [buyPotionButton1, buyPotionButton2, buyPotionButton3];
}