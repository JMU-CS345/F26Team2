let hair1, hair2, hair3;
let skintone1, skintone2, skintone3;
let outfit1, outfit2, outfit3;
let play;
let toneSelected = 1;
let hairSelected = 1;
let outfitSelected = 1;

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
    b.mousePressed(onClick);
    return b;
}

function setupCustom()  {
    // skin tones buttons
    skintone1 = makeSwatch(380, 100, "#F1C5A9", () => { toneSelected = 1; })
    skintone2 = makeSwatch(440, 100, "#E2A180", () => { toneSelected = 2; })
    skintone3 = makeSwatch(500, 100, "#7E5331", () => { toneSelected = 3; })

    // hair color buttons
    hair1 = makeSwatch(380, 160, "#CFB695", () => { hairSelected = 1; })
    hair2 = makeSwatch(440, 160, "#8A6351", () => { hairSelected = 2; })
    hair3 = makeSwatch(500, 160, "#100C07", () => { hairSelected = 3; })

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
    fill(255);
    rect(90, 110, 120, 200);

    // title
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(255);
    text("Customize Your Character", 305, 50);

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

function customButton() {
    return [skintone1, skintone2, skintone3, hair1, hair2, hair3,
            outfit1, outfit2, outfit3, play];
}

function showCustom() { customButtons().forEach(b => b.show()); }
function hairCustom() { customButtons().forEach(b => b.hide()); }