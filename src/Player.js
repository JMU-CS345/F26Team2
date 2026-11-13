let player = { tone: 1, hair: 1, outfit: 1, mage: "" };

function drawPlayer(x, y) {
    push();
    imageMode(CORNER);
    image(playerImg, x, y);
    pop();
}