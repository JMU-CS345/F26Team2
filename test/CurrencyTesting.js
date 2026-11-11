describe("Testing coin function", function () {
    beforeEach(() => {coins = 100; });

    it ("adds coins", function () {
        addCoins(10);
        expect(coins).toBe(110);
    })

    it ("spends enough coins", function () {
        expect(spendCoins(10)).toBe(true);
        expect(coins).toBe(90);
    })

    it ("spends too much coins", function() {
        coins = 5;
        expect(spendCoins(10)).toBe(false);
        expect(coins).toBe(5);  
    })

    it ("coins loss when dead", function () {
        loseCoinsWhenKilled();
        expect(coins).toBe(70);
    })
})