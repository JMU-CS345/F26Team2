// SpecRunner does not load p5.js, so give the few p5 helpers the overworld uses
// simple stand-ins (only if p5 isn't there).
if (typeof constrain === "undefined") {
  window.constrain = (n, lo, hi) => Math.max(lo, Math.min(n, hi));
}
if (typeof dist === "undefined") {
  window.dist = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);
}
if (typeof ESCAPE === "undefined") window.ESCAPE = 27;
if (typeof key === "undefined") window.key = "";
if (typeof keyCode === "undefined") window.keyCode = 0;
if (typeof LEFT_ARROW === "undefined") {
  window.LEFT_ARROW = 37; window.UP_ARROW = 38;
  window.RIGHT_ARROW = 39; window.DOWN_ARROW = 40;
}
if (typeof width === "undefined") window.width = 600;
if (typeof height === "undefined") window.height = 400;

describe("Overworld shops", function () {
  beforeEach(() => {
    // fake sprite sizes (the real images aren't loaded in the spec runner)
    potionShopPic = { width: 100, height: 100 };
    weaponShopPic = { width: 100, height: 100 };
    dummy.x = 300;
    dummy.y = 200;
  });

  describe("shopRects", function () {
    it("lists the weapon shop and the potion shop", function () {
      const names = shopRects().map(s => s.name);
      expect(names).toEqual(["weaponshop", "potionshop"]);
    });

    it("gives every shop a positive size", function () {
      for (let s of shopRects()) {
        expect(s.w).toBeGreaterThan(0);
        expect(s.h).toBeGreaterThan(0);
      }
    });

    it("converts the potion shop's center point to its top-left corner", function () {
      const potion = shopRects().find(s => s.name === "potionshop");
      // sprite is drawn centered on (479, 185) at 0.6 scale
      expect(potion.x).toBeCloseTo(479 - 100 * 0.3);
      expect(potion.y).toBeCloseTo(185 - 100 * 0.3);
      expect(potion.w).toBeCloseTo(60);
      expect(potion.h).toBeCloseTo(60);
    });
  });

  describe("nearbyShop", function () {
    it("returns null when the player is far from every shop", function () {
      dummy.x = 300; dummy.y = 100;
      expect(nearbyShop()).toBeNull();
    });

    it("finds the weapon shop when the player is inside it", function () {
      dummy.x = 100; dummy.y = 250;
      expect(nearbyShop()).toBe("weaponshop");
    });

    it("finds the potion shop when the player is inside it", function () {
      dummy.x = 479; dummy.y = 185;
      expect(nearbyShop()).toBe("potionshop");
    });

    it("works just inside the 30px reach", function () {
      // weapon shop's right edge is x = 165
      dummy.x = 165 + 29; dummy.y = 250;
      expect(nearbyShop()).toBe("weaponshop");
    });

    it("returns null just outside the 30px reach", function () {
      dummy.x = 165 + 31; dummy.y = 250;
      expect(nearbyShop()).toBeNull();
    });
  });
});

describe("Overworld key presses", function () {
  beforeEach(() => {
    potionShopPic = { width: 100, height: 100 };
    weaponShopPic = { width: 100, height: 100 };
    spyOn(window, "goTo");   // we only care which screen it is asked to open
    dummy.x = 300;
    dummy.y = 200;
  });

  afterEach(() => { screen = "start"; });

  it("E next to the weapon shop opens it", function () {
    screen = "overworld";
    dummy.x = 100; dummy.y = 250;
    key = "e";
    keyPressed();
    expect(goTo).toHaveBeenCalledWith("weaponshop");
  });

  it("capital E also works", function () {
    screen = "overworld";
    dummy.x = 479; dummy.y = 185;
    key = "E";
    keyPressed();
    expect(goTo).toHaveBeenCalledWith("potionshop");
  });

  it("E away from the shops does nothing", function () {
    screen = "overworld";
    dummy.x = 300; dummy.y = 100;
    key = "e";
    keyPressed();
    expect(goTo).not.toHaveBeenCalled();
  });

  it("E does nothing on other screens", function () {
    screen = "start";
    dummy.x = 100; dummy.y = 250;
    key = "e";
    keyPressed();
    expect(goTo).not.toHaveBeenCalled();
  });

  it("Escape leaves the potion shop", function () {
    screen = "potionshop";
    key = "";
    keyCode = ESCAPE;
    keyPressed();
    expect(goTo).toHaveBeenCalledWith("overworld");
  });

  it("Escape leaves the weapon shop", function () {
    screen = "weaponshop";
    key = "";
    keyCode = ESCAPE;
    keyPressed();
    expect(goTo).toHaveBeenCalledWith("overworld");
  });

  it("Escape does nothing in the overworld", function () {
    screen = "overworld";
    dummy.x = 300; dummy.y = 100;
    key = "";
    keyCode = ESCAPE;
    keyPressed();
    expect(goTo).not.toHaveBeenCalled();
  });
});

describe("goTo shop screens", function () {
  beforeEach(() => {
    ["hideStart", "hideClass", "hideCustom", "hidePotions", "hideWeapons",
     "showStart", "showClass", "showCustom", "showPotions", "showWeapons"]
      .forEach(name => spyOn(window, name));
  });

  afterEach(() => { screen = "start"; });

  it("opens the potion shop", function () {
    goTo("potionshop");
    expect(screen).toBe("potionshop");
    expect(showPotions).toHaveBeenCalled();
    expect(showWeapons).not.toHaveBeenCalled();
  });

  it("opens the weapon shop", function () {
    goTo("weaponshop");
    expect(screen).toBe("weaponshop");
    expect(showWeapons).toHaveBeenCalled();
    expect(showPotions).not.toHaveBeenCalled();
  });

  it("hides the shop buttons when returning to the overworld", function () {
    goTo("overworld");
    expect(screen).toBe("overworld");
    expect(hidePotions).toHaveBeenCalled();
    expect(hideWeapons).toHaveBeenCalled();
  });
});

describe("dummy player movement", function () {
  beforeEach(() => {
    dummy.x = 300;
    dummy.y = 200;
    window.keyIsDown = () => false;
  });

  it("moves right with D", function () {
    window.keyIsDown = code => code === 68;
    moveDummy();
    expect(dummy.x).toBe(300 + dummy.speed);
    expect(dummy.y).toBe(200);
  });

  it("moves up with W", function () {
    window.keyIsDown = code => code === 87;
    moveDummy();
    expect(dummy.y).toBe(200 - dummy.speed);
  });

  it("stays inside the border", function () {
    dummy.x = -500; dummy.y = 9999;
    moveDummy();
    expect(dummy.x).toBe(20);
    expect(dummy.y).toBe(height - 20);
  });
});
