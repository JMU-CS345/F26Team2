let startMode = "menu"; // "start" | "playing" | "credits"
let playBtn, creditsBtn, backBtn;

function makeStartBtn(label, y) {
  let b = createButton(label);
  b.size(160, 50);
  b.style('background', '#3C3C3C');
  b.style('color', '#FFFFFF');
  b.style('font-family', 'Redaction35-Regular');
  b.style('font-size', '32px');
  b.style('cursor', 'pointer');
  b.position(width / 2 - 80, y);
  return b;
}

function setupStart() {
  playBtn = makeStartBtn("Play", height * 0.55);
  creditsBtn = makeStartBtn("Credits", height * 0.55 + 65);
  backBtn = makeStartBtn("Back", height * 0.8);

  playBtn.mousePressed(() => setState("class"));
  creditsBtn.mousePressed(() => setState("credits"));
  backBtn.mousePressed(() => setState("menu"));
}

function drawStart() {
  imageMode(CENTER);
  if (startMode === "menu") {
    image(logo, width / 2, height * 0.33);
  } else {
    drawCredits();
  }
}

function drawCredits() {
  fill(255);
  textSize(40);
  text("Credits", width / 2, height * 0.2);
  textSize(24);
  text("Names go here", width / 2, height * 0.4);
}

function setStartMode(mode) {
  startMode = mode;
  hideStart();

  if (mode === "menu") { playBtn.show(); creditsBtn(); }
  else backBtn.show();
}

function showStart() { setStartMode("menu"); }
function hideStart() { playBtn.hide(); creditsBtn.hide(); backBtn.hide(); }