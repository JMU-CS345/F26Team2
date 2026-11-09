describe('Mage selection tests', function() {

    beforeEach(function() {
        selectedMage = "";
    });

    it('should initialize with no mage selected', function() {
        expect(selectedMage).toBe("");
    });

    it('should select Fire', function() {
        selectMage("Fire");
        expect(selectedMage).toBe("Fire");
    });

    it('should select Ice', function() {
        selectMage("Ice");
        expect(selectedMage).toBe("Ice");
    });

    it('should select Psychic', function() {
        selectMage("Psychic");
        expect(selectedMage).toBe("Psychic");
    });

});