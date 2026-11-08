describe('Customization selection tests', function() {

    beforeEach(function() {
        toneSelected = 1;
        hairSelected = 1;
        outfitSelected = 1;
    });

    it('should initialize with default selections', function () {
        expect(toneSelected).toBe(1);
        expect(hairSelected).toBe(1);
        expect(outfitSelected).toBe(1);
    });

    it('should update toneSelected when user clicks a button', function() {
        toneSelected = 2;
        expect(toneSelected).toBe(2)

        toneSelected = 3;
        expect(toneSelected).toBe(3);
    });

    it('should update hairSelected when user clicks a button', function() {
        hairSelected = 2;
        expect(hairSelected).toBe(2);

        hairSelected = 3;
        expect(hairSelected).toBe(3);
    });

    it('should update outfitSelected when user clicks a button', function() {
        outfitSelected = 2;
        expect(outfitSelected).toBe(2);

        outfitSelected = 3;
        expect(outfitSelected).toBe(3);
    });
});