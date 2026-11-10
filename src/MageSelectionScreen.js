let fireBtn, iceBtn, mindBtn;

function makeMageBtn(label, x, mage) {
  let b = createButton(label);
  b.position(x, 330);
  b.style("background-color", "black");
  b.style("color", "white");
  b.style("border", "2px solid white");

  b.mousePressed(() => {
    chosenClass = mage;
    goTo("custom");
  })
  return b;
}

function setupClass() {
  fireBtn = makeMageBtn("Select Fire", 60, "Fire");
  iceBtn = makeMageBtn("Select Ice", 260, "Ice");
  mindBtn = makeMageBtn("Select Psychic", 440, "Psychic");
}

function drawClass() {
  imageMode(CORNER);

  fill(255);
  noStroke();  
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

}

function showClass() { fireBtn.show(); iceBtn.show(); mindBtn.show(); }
function hideClass() { fireBtn.hide(); iceBtn.hide(); mindBtn.hide(); }