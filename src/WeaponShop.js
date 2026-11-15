

let buyWeaponButton1;
let buyWeaponButton2;
let buyWeaponButton3;

function setupWeapons() {
  buyWeaponButton1 = makeWeaponBuyButton(270, 123, "Sword");
  buyWeaponButton2 = makeWeaponBuyButton(270, 186, "Dagger");
  buyWeaponButton3 = makeWeaponBuyButton(270, 249, "Mace");
}

function drawWeapons() {
  image(weaponBg, 0, 0, width, height);

  
  stroke(0);
  strokeWeight(35);
  noFill();
  rect(3, 3, 594, 394);

  
  fill(245, 217, 142);
  noStroke();
  textSize(38);
  textStyle(BOLD);
  textAlign(CENTER);
  text("WEAPONS", 435, 122);

  
  fill(245, 217, 142);
  stroke(115, 48, 64);
  strokeWeight(2);
  rect(95, 95, 240, 205);

  
  fill(255, 249, 245);
  rect(105, 105, 220, 55);
  rect(105, 168, 220, 55);
  rect(105, 231, 220, 55);

  
  fill(95, 42, 53);
  noStroke();
  textAlign(LEFT);
  textSize(13);
  textStyle(BOLD);

  text("Sword", 115, 127);
  text("Dagger", 115, 190);
  text("Mace", 115, 253);

  
  textSize(12);
  textStyle(NORMAL);

  text("40 coins", 115, 149);
  text("20 coins", 115, 212);
  text("50 coins", 115, 275);

  
  fill(245, 217, 142);
  stroke(115, 48, 64);
  strokeWeight(2);
  rect(345, 125, 160, 175);

  
  image(weaponPlayer, 350, 130, 150, 165);


  fill(234, 198, 111);
  stroke(115, 48, 64);
  strokeWeight(2);
  rect(95, 300, 410, 70);

  
  fill(115, 48, 64);
  noStroke();
  textAlign(LEFT);
  textSize(15);
  textStyle(BOLD);
  text("DESCRIPTION", 110, 325);

  
  fill(65, 40, 43);
  textSize(11);
  textStyle(NORMAL);

  text("Welcome to the Weapons Shop! Choose from our collection of Swords,", 110, 341);
  text("Daggers and Maces to improve your abilities and prepare for battle!", 107, 355);
}

function makeWeaponBuyButton(x, y, weaponName) {
  let button = createButton("BUY");

  button.position(x, y);
  button.style("background-color", "#783747");
  button.style("color", "white");
  button.style("border", "2px solid #4b232b");

  button.mousePressed(() => {
    console.log(weaponName + " selected!");
  });

  return button;
}

function weaponButtons() {
  return [buyWeaponButton1, buyWeaponButton2, buyWeaponButton3];
}

function showWeapons() {
  weaponButtons().forEach(button => button.show());
}

function hideWeapons() {
  weaponButtons().forEach(button => button.hide());
}
