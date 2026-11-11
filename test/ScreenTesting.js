describe("goTo", () => {
  beforeEach(() => {
    ["hideStart", "hideClass", "hideCustom",
     "showStart", "showClass", "showCustom"]
      .forEach(name => spyOn(window, name));
  });

  it("hides every screen first", () => {
    goTo("class");
    expect(hideStart).toHaveBeenCalled();
    expect(hideClass).toHaveBeenCalled();
    expect(hideCustom).toHaveBeenCalled();
  });

  it("goes to the class screen", () => {
    goTo("class");
    expect(screen).toBe("class");
    expect(showClass).toHaveBeenCalled();
    expect(showStart).not.toHaveBeenCalled();
  });

  it("goes to the customize screen", () => {
    goTo("custom");
    expect(screen).toBe("custom");
    expect(showCustom).toHaveBeenCalled();
  });
});

describe("start screen", () => {
  beforeEach(() => {
    playBtn = jasmine.createSpyObj("play", ["show", "hide"]);
    creditsBtn = jasmine.createSpyObj("credits", ["show", "hide"]);
    backBtn = jasmine.createSpyObj("back", ["show", "hide"]);
  });

  it("menu shows Play and Credits only", () => {
    setStartMode("menu");
    expect(playBtn.show).toHaveBeenCalled();
    expect(creditsBtn.show).toHaveBeenCalled();
    expect(backBtn.show).not.toHaveBeenCalled();
  });

  it("credits shows Back only", () => {
    setStartMode("credits");
    expect(backBtn.show).toHaveBeenCalled();
    expect(playBtn.show).not.toHaveBeenCalled();
  });
});

describe("customize choices", () => {
  it("saves the skin tone", () => {
    setTone(3);
    expect(toneSelected).toBe(3);
  });
  it("saves the hair color", () => {
    setHair(2);
    expect(hairSelected).toBe(2);
  });
  it("saves the outfit", () => {
    setOutfit(2);
    expect(outfitSelected).toBe(2);
  });
});