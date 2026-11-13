let hair1, hair2, hair3;
let skintone1, skintone2, skintone3;
let outfit1, outfit2, outfit3;
let play;

// function to make buttons
function makeSwatch(x, y, hex, onClick) {
    let b = createButton('');
    b.position(x, y);
    b.style('width', '25px');
    b.style('height', '25px');
    b.style('background-color', hex);
    b.mousePressed(onClick);
    return b;
}

// function to make buttons for outfits
function makeOutfitBtn(x, onClick) {
    let b = createButton('');
    b.position(x, 218);
    b.style('width', '60px');
    b.style('height', '80px');
    b.style("background-color", "transparent");
    b.style("border", "none");
    b.mousePressed(onClick);
    return b;
}

function drawOutfitChoices() {
    push();
    imageMode(CORNER);
    let xs = [280, 370, 460];
    let list = [];
    
    if (player.mage === "Fire") list = outfitImgs.Fire;
    else if (player.mage === "Ice") list = outfitImgs.Ice;
    else if (player.mage === "Psychic") list = outfitImgs.Psychic;

    noFill();
    stroke(225);
    strokeWeight(2);

    for (let i = 0; i < list.length; i++) {
        image(backDrop, xs[i], 218, 60, 80);
        if (list[i]) {
            // to scale to the right size 
            let scale = min(60 / list[i].width, 80 / list[i].height);
            image(list[i], xs[i], 226, list[i].width * scale, list[i].height * scale);
        }
        rect(xs[i], 218, 60, 80);
    }
    pop();
}

function setTone(n) { player.tone = n; }
function setHair(n) { player.hair = n; }
function setOutfit(n) { player.outfit = n; }

function setupCustom()  {
    // skin tones buttons
    skintone1 = makeSwatch(380, 100, "#F1C5A9", () => setTone(1));
    skintone2 = makeSwatch(440, 100, "#E2A180", () => setTone(2));
    skintone3 = makeSwatch(500, 100, "#7E5331", () => setTone(3));

    // hair color buttons
    hair1 = makeSwatch(380, 160, "#CFB695", () => setHair(1));
    hair2 = makeSwatch(440, 160, "#8A6351", () => setHair(2));
    hair3 = makeSwatch(500, 160, "#100C07", () => setHair(3));

    // outfit buttons
    outfit1 = makeOutfitBtn(280, () => setOutfit(1));
    outfit2 = makeOutfitBtn(370, () => setOutfit(2));
    outfit3 = makeOutfitBtn(460, () => setOutfit(3));

    // play button
    play = createButton('PLAY');
    play.position(360, 305);
    play.style('color', '#FFFFFF');
    play.style('font-family', 'Redaction35-Regular');
    play.style('font-size', '15px');
    play.style('width', '80px');
    play.style('height', '50px');
    play.style('background-color', '#000000');
}

function drawCustom() {
    // background box
    fill(124, 124, 135);
    rect(53, 70, 500, 300);

    // gradient 
    let c2 = color(96, 98, 117);
    let c1 = color(150, 150, 165);
    setGradient(53, 70, 500, 300, c1, c2);

    // character display box
    push();
    imageMode(CORNER);
    image(backDrop, 90, 110, 120, 200);
    noFill();
    stroke(255);
    strokeWeight(3);
    rect(90, 110, 120, 200);
    pop();

    // character
    drawPlayer(87, 140);

    // outfits
    drawOutfitChoices();

    // title
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(255);
    text("Customize Your Character", 305, 45);

    // title for skin tone
    textSize(20);
    text("Hair Color:", 305, 172);
    text("Skin Tone:", 305, 112);

    // title for outfits 
    textSize(13);
    text("Outfit 1", 310, 205);
    text("Outfit 2", 400, 205);
    text("Outfit 3", 489, 205);
}

function setGradient(x, y, w, h, c1, c2) {
    noFill();

    // top to bottom gradient 
    for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
    }
}

function customButtons() {
    return [skintone1, skintone2, skintone3, hair1, hair2, hair3,
            outfit1, outfit2, outfit3, play];
}

function showCustom() { customButtons().forEach(b => b.show()); }
function hideCustom() { customButtons().forEach(b => b.hide()); }