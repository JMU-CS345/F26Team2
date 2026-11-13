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
