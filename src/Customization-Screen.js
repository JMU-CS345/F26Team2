let hair1;
let hair2;
let hair3;
let skintone1;
let skintone2;
let skintone3;
let outfit1;
let outfit2;
let outfit3;
let font;
let play;
let toneSelected = 1;
let hairSelected = 1;
let outfitSelected = 1;
let particles = [];
let colors = ['#de0000', '#800080', '#83f0ff'];

async function setup() {
    font = await loadFont("Redaction35-Regular.ttf");
    createCanvas(600, 400);
    // skin tones buttons
    skintone1 = createButton('');
    skintone1.position(380, 100);
    skintone1.style('width', '25px');
    skintone1.style('height', '25px');
    skintone1.style('background-color', '#F1C5A9');
    skintone1.mousePressed(() => { toneSelected = 1; });

    skintone2 = createButton('');
    skintone2.position(440, 100);
    skintone2.style('width', '25px');
    skintone2.style('height', '25px');
    skintone2.style('background-color', '#E2A180');
    skintone2.mousePressed(() => { toneSelected = 2; });

    skintone3 = createButton('');
    skintone3.position(500, 100);
    skintone3.style('width', '25px');
    skintone3.style('height', '25px');
    skintone3.style('background-color', '#7E5331');
    skintone3.mousePressed(() => { toneSelected = 3; });

    // hair color buttons
    hair1 = createButton('');
    hair1.position(380, 160);
    hair1.style('width', '25px');
    hair1.style('height', '25px');
    hair1.style('background-color', '#CFB695');
    hair1.mousePressed(() => { hairSelected = 1; });

    hair2 = createButton('');
    hair2.position(440, 160);
    hair2.style('width', '25px');
    hair2.style('height', '25px');
    hair2.style('background-color', '#8A6351');
    hair2.mousePressed(() => { hairSelected = 2; });

    hair3 = createButton('');
    hair3.position(500, 160);
    hair3.style('width', '25px');
    hair3.style('height', '25px');
    hair3.style('background-color', '#100C07')
    hair3.mousePressed(() => { hairSelected = 3; });

    // play button
    play = createButton('PLAY');
    play.position(360, 305);
    play.style('color', '#FFFFFF');
    play.style('font-family', 'Redaction35-Regular');
    play.style('font-size', '15px');
    play.style('width', '80px');
    play.style('height', '50px');
    play.style('background-color', '#000000');

    // outfit buttons
    outfit1 = createButton('');
    outfit1.position(280, 218);
    outfit1.style('width', '60px');
    outfit1.style('height', '80px');
    outfit1.mousePressed(() => { outfitSelected = 1; });

    outfit2 = createButton('');
    outfit2.position(370, 218);
    outfit2.style('width', '60px');
    outfit2.style('height', '80px');
    outfit2.mousePressed(() => { outfitSelected = 2; });

    outfit3 = createButton('');
    outfit3.position(460, 218);
    outfit3.style('width', '60px');
    outfit3.style('height', '80px');
    outfit3.mousePressed(() => { outfitSelected = 3; });

    // particles
    let numOfParticles = 250;
    for (let i = 0; i < numOfParticles; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(0);

    // particle
    for (let i = 0; i < particles.length; i++) {
        particles[i].move();
        particles[i].display();
        particles[i].checkEdges();
    }

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
    textFont(font);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(255);
    text("Customize Your Character", 305, 50);

    // title for skin tone
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Skin Tone:", 305, 112);

    // title for hair
    textSize(20);
    text("Hair Color:", 305, 172);

    // title for outfits 
    textSize(13);
    text("Outfit 1", 310, 205);

    textSize(13);
    text("Outfit 2", 400, 205);

    textSize(13);
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