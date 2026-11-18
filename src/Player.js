let player = { tone: 1, hair: 1, outfit: 1, mage: "" };

function drawPlayer(x, y) {
    push();
    imageMode(CORNER);
    image(playerImg, x, y);
    image(hairImgs[player.hair - 1], x, y);
    image(toneImgs[player.tone - 1], x, y);
    let outfits = outfitImgs[player.mage];
    if (outfits && outfits[player.outfit - 1]) {
        image(outfits[player.outfit - 1], x, y);
    }
    pop();
}

// Super simple placeholder player for the overworld: a circle moved with WASD / arrow keys.
let dummy = { x: 260, y: 300, r: 10, speed: 3 };

function moveDummy() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) dummy.x -= dummy.speed;   // A
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) dummy.x += dummy.speed;  // D
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) dummy.y -= dummy.speed;     // W
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) dummy.y += dummy.speed;   // S
    dummy.x = constrain(dummy.x, 20, width - 20);   // stay inside the black border
    dummy.y = constrain(dummy.y, 20, height - 20);
}

function drawDummy() {
    if (!player.mage) {
        player.mage = chosenClass;
    }

    push();
    translate(dummy.x, dummy.y);
    scale(0.65);
    imageMode(CENTER);
    drawPlayer(0, 0);
    pop();
}

function savePlayerData(data) {
    const jsonString = JSON.stringify(data);

    sessionStorage.setItem("Player_Appearance", jsonString);
}
