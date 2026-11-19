# Sprint Review Report: Sprint 2

*Copy this file into `scrum/review/` using your team's naming format. Fill in every field. Replace the italic guidance with your team's information. Due by 11:59 p.m. on the day of the review.*

 COMMIT ID: 7d41245

---

## 1. Meeting Details

**Date:** 11/18/2026

**Scrum Master:** Rithanya Saravanan

**Attendees:** Rithanya,Emily, Ashley,  Evan 

**Absent:** N/A

**Presenter:** Rithanya Saravanan

**Deployed build reviewed:** https://jmu-cs345.github.io/F26Team2/

**Release PR into `production`:** [*(link; merge it before the review begins)*] https://github.com/JMU-CS345/F26Team2/pull/36

---

## 2. Sprint Goal

*Tell the stakeholder whether the sprint delivered what it set out to.*

**The goal we set:** A player can customize their character and see the character updated on screen, then enter the first town and purchase potions and weapons by interacting with the shops.

**Did we meet it?** *(Yes / Partly / No, and one sentence explaining why)*
 PARTLY
We completed character customization and the town and shop interfaces, allowing players to explore the options. However,the  players cannot purchase the items because the purchasing functionality like deducting gold, is not complete.

_

---

## 3. Committed Items: Done or Not Done

*Done means the item meets every point of your Definition of Done, including "works in the deployed build." There is no "mostly done."*

*The presenter credits the members who built each story during the demo.*

| Issue # | User story | Estimate | Owner | Done? | Built by |
|---------|------------|----------|-------|-------|----------|
|    #26 |Connecting Start-Up Screens |3pts,3hrs | Ashley | Yes | Ashley|
|    #6   | Items Can Be Bought From Shops |8pts,10hrs| Rithanya | No| Rithanya and Ashley|
|     #3 | How Towns Should Work  |8pts,8.5 hrs| Evan  | Yes| Evan  |
|     #17 |  Mage Design Customization|  8pts,9hrs |  Ashley and Emily | Yes  | Ashley and Emily |
|    #28  |  Menu and Town Art | 8pts,8hrs  | Emily  | Yes  | Emily

---

## 4. Metrics

| | Points |
|---|---|
| Committed |35 |
| Completed |27|
| Completion rate | 77% |

**Velocity history:**

| Sprint | Committed | Completed |
|--------|-----------|-----------|
| 1      |   4        |   0      |
| 2      |   35       |   27     |
| 3      |           |           |
| 4      |           |           |

**Burndown or board snapshot:** *(Attach a screenshot or link)*

**What explains the difference between committed and completed?** Committed is the amount of points we decided each item was at the Sprint Planning while completed is based off of our Definition of Done and if the points were finished.

---

## 5. Demo

*For each completed story, list the acceptance criteria and show that each one passed in the deployed build.*

*Presenter: be ready to explain and answer questions about every completed story, including work you didn't build.*

### Issue #26: Connecting Start-Up Screens
- [Y ] When the game loads, the user sees a black start-up screen with the game title, floating blue, red, and purple particles, and Play and Credits buttons.
- [Y ] When the user presses a button, they are taken to the correct screen.
- [Y ]The user can move through the start up screen, mage selection, and mage customization screens.

### Issue #3: How Towns Should Work
- [Y] When the player enters the over world, they can walk around and see different shops where they can buy items.
- [Y] Before returning to the dungeon, the player can visit an area to heal to full health.

### Issue #17: Mage Design Customization
- [Y] When the player selects customization options such as hair color, skin tone, and clothing, the character preview updates immediately to match those choices.

### Issue #28: Menu and Town Art
- [Y ]When interacting with a potion or weapon shop, the player sees the corresponding shop menu.
- [Y ]When in town, the player sees the town artwork and the different shops.


---

## 6. Incomplete Work

*What happens to each item that is not done? Return it to the backlog and re-estimate it, even if the estimate stays the same. (Sprint 4: write "n/a")*

| Issue # | What remains | New estimate | Back in backlog? |
|---------|--------------|--------------|------------------|
|  #6   | Complete the purchasing functionality so that gold is deducted when an item is purchased |2 pts, 3hours| Yes |

Note: The shop UI and buttons were created, but the purchasing functionality is not complete. The remaining work will be continued in the next sprint using the new Currency issue.

---

## 7. Stakeholder Feedback

*Record what the instructor said: what they liked, what should change, and any new priorities. (Sprint 4: write "n/a")*

The stakeholder said that everything looked good and that he was satisfied with the overall progress. He wanted the buttons to work properly, rather than just being visually present. Focus on completing button functionality and implementing the dungeons so players can experience the actual gameplay.


_

---

## 8. Backlog Changes

*How did the backlog change in response to the feedback? (Sprint 4: write "n/a")*

**New stories added:** 1, Currency functionality was added as a new GitHub issue to track the unfinished currency system.

**Priorities changed:** None

**Stories removed:** None

**If no change was needed, why not?** A new issue was added to the backlog to cover the unfinished currency functionality part.

---

## 9. Quality

*Give the stakeholder an honest picture of the build's quality.*

**CI status on `production`:** Passing 

**Number of specs:** 34 specs 0 failure

**Known bugs in the deployed build:** None

---

## 10. Checklist

- [Y] Demo given from the deployed GitHub Pages build
- [Y] Demo given by one presenter, crediting the members who built each story
- [Y] Release PR merged before the review begins
- [Y] Every committed item marked Done or Not Done
- [Y] Every item marked Done has all its acceptance criteria checked in section 5
- [Y] Metrics filled in, with the committed/completed difference explained
- [Y] Stakeholder feedback recorded (Sprint 4: n/a)
- [Y] Backlog updated, or the reason no change was needed explained (Sprint 4: n/a)
- [Y] Report committed to `scrum/review/` via pull request by 11:59 p.m. on the day of the review
