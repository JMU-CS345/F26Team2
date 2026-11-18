let coins = 100;
const DEATH_PEN = 0.3;
const COIN_SCREENS = ["overworld", "potionshop", "weaponshop"];

// when user collects coins 
function addCoins(n) {
    coins += n;
}

// when user spends coins (needs to check if true/false)
function spendCoins(n) {
    if (coins < n) {
        return false;
    }
    coins -= n;
    return true;
}

// when users lose coins when they die
function loseCoinsWhenKilled() {
    coins = Math.floor(coins * (1 - DEATH_PEN));
}

// draw the corner tracker that shows the users the amount of 
// coins they have
function drawCoins() {
    push();
    noStroke();
    fill(255, 215, 0);
    textSize(20);
    textAlign(LEFT, TOP);
    text("" + coins, 65, 34);
    pop();

    push();
    translate(20, 20);
    scale(0.75);
    image(coinIcon, 0, 0);
    pop();
}