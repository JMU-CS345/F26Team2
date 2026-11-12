# Sprint Planning Report: Sprint 2
---

## 1. Meeting Details

**Date:** 11/11/2026

**Scrum Master:** Emily C

**Attendees:** Ashley, Evan, Rithanya, & Emily

**Absent:** N/A

---

## 2. Sprint Goal


A player can customize their character and see the character be updated on screen, and after confirming their character they will be able to enter the first town and purchase potions and weapons by interacting with the shops in the town.

_

---

## 3. Capacity and Velocity

**Sprint dates:** 11/9 to 11/15

**Velocity last sprint (points completed):** 0

**Average velocity so far:** 0

**Known absences or reduced availability this sprint:** None

**Points committed this sprint:** 35

**Why this commitment is realistic:** We are committing more points than last sprint because we have learned from our mistakes and learned how to connect screens, how to better communicate with each other, and are moving on to more in-depth coding since we gained a lot of insight from Sprint 1, which was more UI focused. Thus, while it is a lot of points, we hope to complete them with all members engaging.

_

---

## 4. Committed Backlog Items

*Every item listed here must meet the Definition of Ready in your constitution. Items should be taken from the top of the product backlog in priority order. If you skipped a higher-priority item, explain why under "Notes".*

| Issue # | User story | Estimate | Owner | Ready? |
|---------|------------|----------|-------|--------|
|   #26   |As a user, I want to start the game and move smoothly between screens before gameplay.|3hrs, 3pts|Ashley| [Y]    |
|    #6   |As a gamer, I want to be able to purchase items from shops, so that I can use them in the dungeon.|10hrs, 8pts|Rithanya| [Y]    |
|    #3   |As a gamer, I want to return to a peaceful town after clearing a dungeon, so that I have a safe space to buy spells, gear, and heal before continuing.|8.5hrs, 8pts|Evan| [Y]    |
|    #17  |I want to customize my character’s appearance so that I can create a unique wizard identity that reflects my personal preference or chosen mage type.|9hrs, 8pts|Ashley & Emily| [Y]    |
|    #28   |As a user, I want to be able to see the Town when I'm walking around the Town and see the shop menus when I'm buying either potions or weapons.|8hrs, 8pts|Emily| [Y]    |

**Total points:** 35

**Notes:** The main focus for this sprint is working on the town and visuals for the town. While our points may seem very high compared to how many we did last sprint, we have a better understanding of JS and how to manage our files and branches since we learned from our mistakes from Sprint 1.

---

## 5. Task Breakdown

*Break each story into tasks. Include tasks for writing tests and reviewing PRs, not only coding.*

### Issue #26: *Connecting Start-Up Screens*

- [ ] All three starting screen files should be merged into the correct branch (<0.5hr)
- [ ] Buttons that direct the screen to the next screen should be functional (Starting screen --> Class selection --> Mage customization)(2hrs)
- [ ] Buttons and screens should be tested for proper screen sizes, proper cropping and placement, and proper transitions. (1hr)

### Issue #6: *Items Can Be Bought From Shops*

- [ ] Create a UI shop menu for the Potions and Weapons shop (4hrs)
- [ ] Create buttons to select items and create buttons for purchasing an item for both shops (3hrs)
- [ ] Create a dialogue box (1hr)
- [ ] Write dialogue for the NPC shop owner, which informs the user about the description of each item (1hr)
- [ ] Test and review the code by testing using the currency system and test purchasing items, seeing if it takes money out and that the character gains the item in their inventory. (1hr)

### Issue #3: *How Towns Should Work*

- [ ] Create the two shops, Potions and Weapons (3hrs)
- [ ] Allow the user to interact with each shop by pressing E while near the shop (3hrs)
- [ ] Import and place the images for the shops and the town background (2hrs)
- [ ] Test the player's ability to interact with the shops and connecting the interaction button with the shop menus (2hrs)

### Issue #17: *Mage Design Customization*

- [ ] Draw the base character (1hr)
- [ ] Draw the different outfits, in different colors depending on the mage class selected (4hrs)
- [ ] Recolor the character in the different skin and hair colors (1hr)
- [ ] Import the character and layer on the different outfits depending on what is selected (3hrs)
- [ ] Test different outfits, skin tone, and hair color combinations with different mage classes. Make sure that the customization choices are saved onto the character. (2hr)

### Issue #28: *Menu and Town Art*

- [ ] Draw the town background and the two shop buildings, with optional background houses and items to fill the town (4hrs)
- [ ] Draw the icons needed for the menus (potion icons, NPC images, etc., 3hrs)
- [ ] Import, rescale, and get feedback from other members (1hr)

---

## 6. Work Distribution

| Member | Stories owned | Points |
|--------|---------------|--------|
|Ashley|Connecting Start-Up Screens|   3    |
|Rithanya|Items Can Be Bought From Shops|   8    |
|Evan|How Towns Should Work|   8   |
|Emily|Menu and Town Visuals|   8   |
|Ashley & Emily|Mage Design Customization|   8   |

*If the work is not balanced, explain why:* Overall, the work is balanced but there might be more heavier items some members are working on. However, it can be balanced if all members collaborate, get feedback from each other, and ask each other for additional support.

_

---

## 7. Stories Split or Deferred

*Did you split any stories that were too large for one sprint, or move stories back to the backlog? List them and say why.* 
We added one new story, the "Connecting Start-Up Screens" as this was something we didn't get to in Sprint 1. Also from last sprint is "Mage Design Customization," since we realize we needed more time to create the character and figure out how to layer images onto the character. Additionally, we split up and added a a new story, "Menu and Town Visuals," from the item shop and town story. We realized that the visuals should be its own separate story as it requires a lot of time and so that other members could be working on the code while someone else is creating the art.

_

---

## 8. Retrospective Follow-Through

*Which action items from last sprint's retrospective are part of this sprint's plan, and how? (Sprint 1: write "n/a")*

| Action item | How it shows up in this sprint |
|-------------|--------------------------------|
|Standard Design Style Doc|The doc will be updated throughout the sprint, having all the concepts created for the menu, town, and character while also having the colors that buttons and menus should be. Plus, an additional Google Drive will be made with all assets so that each member can easily access and see assets to import into the game.|
|Member Check-In Reminders|The Scrum Master will be responsible for regularly checking in on the members and seeing what progress has been made. Also, the Scrum Master should be reminding members what our goal deadline would be so that nothing is last minute.|

---

## 9. Risks and Dependencies

*What might stop the team from meeting the sprint goal? Which stories depend on others being finished first?*
A lot of the stories for this sprint depend on each other, most notably "How Towns Should Work" and "Items Can Be Bought From Shops" rely on the "Menu and Town Visuals" to be finished before the final product for both stories can be completed. If the visuals aren't done relatively early in the sprint, then the town and shops will only be able to visually test their code using temporary images and importing/cropping images will be done last minute.

_

---

## 10. Checklist

- [Y] Sprint goal written
- [Y] Every committed story meets the Definition of Ready
- [Y] Every story has an owner
- [Y] Board updated: committed stories in the sprint, tasks created
- [Y] Commitment compared to velocity
- [Y] Report committed to `scrum/planning/` via pull request
