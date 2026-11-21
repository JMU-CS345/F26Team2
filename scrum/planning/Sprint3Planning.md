# Sprint Planning Report: Sprint _

*Copy this file into `scrum/planning/` using your team's naming format. Fill in every field. Replace the italic guidance with your team's information.*

---

## 1. Meeting Details

**Date:** 11/20/2026;

**Scrum Master:**  Rithanya Saravanan

**Attendees:** Rithanya, Emily, Ashley, Evan

**Absent:** N/A

---

## 2. Sprint Goal

Develop the core dungeon gameplay experience, allowing players to enter dungeon rooms, move their characters, fight enemies, monitor their health, and interact with the game's currency system.
_

---

## 3. Capacity and Velocity

**Sprint dates:** 11/30 to 12/4

**Velocity last sprint (points completed):** 27 points 

**Average velocity so far:** 13.5 points 

**Known absences or reduced availability this sprint:** None

**Points committed this sprint:** 53 points

**Why this commitment is realistic:** Although 53 points is higher than our previous sprint, we believe we can achieve it because we have a better understanding of the tasks and what needs to be done. We also plan to communicate more, help each other, and check in on our progress. Some team members have also decided to spend extra time working during Thanksgiving break to help finish everything on time.
_

---

## 4. Committed Backlog Items

*Every item listed here must meet the Definition of Ready in your constitution. Items should be taken from the top of the product backlog in priority order. If you skipped a higher-priority item, explain why under "Notes".*

| Issue # | User story | Estimate | Owner | Ready? |
|---------|------------|----------|-------|--------|
|#16      |As a player, I want to see my character, health, mana, and SP on screen.| 7pts ,6hrs  | Emily | [Y]    |
|#41      |As a player, I want to see my character move around the dungeon, interact with objects, and attack enemies. |13pts,9hrs|Emily|[Y]|
|#5       |As a player, I want to fight enemies using melee or spell attacks.| 10 pts, 8 hrs| Rithanya| [Y]    |
|#39      | As a user, I want to be able to enter a dungeon, see chests and enemies that I can fight, and enter doors to explore different rooms/enemies within the dungeon.| 12 pts, 8 hrs |Evan| [Y]|
|#40      | As a player, I want to take damage and defeat enemies. |10 pts, 9 hrs  |Ashley | [Y]  |
|#37      | As a player, I want to purchase items from the shop and have the cost deducted from my currency.|1 pt, 2 hrs |Ashley |[Y] |


**Total points:** 53 points 

**Notes:** The main focus for this sprint is developing the core dungeon gameplay features, including dungeon exploration, combat, character visuals, and currency. We want to build a strong foundation for the game before moving on to more advanced features.

---

## 5. Task Breakdown

*Break each story into tasks. Include tasks for writing tests and reviewing PRs, not only coding.*

### Issue #16: *OnScreen Visuals*

- [ ]Sketch the player's character and health, mana, and SP bars.(2hr)
- [ ]Sketch the colors and designs for each bar.(2hr)
- [ ]Sketch how the exact numbers will appear when hovering over each bar.(1hr)
- [ ]Review sketches with the team and make changes based on feedback.(1hr)

### Issue #41: *Character Movement Visuals and Animation*

- [ ]Sketch the character's movement animations for all four directions.(3hr)
- [ ]Sketch the character's attacking animation.(2hr)
- [ ]Sketch how chests and doors look when opened and closed.(2hr)
- [ ]Sketch enemy movement and attack animations.(1hr)
- [ ]Review the sketches with the team and make adjustments.(1hr)

### Issue #5: *Dungeon Combat System*

- [ ]Implement spell attacks based on the selected mage class(3hr)
- [ ]Implement melee attacks using the sword.(2hr)
- [ ]Implement enemy attacks and damage to the player.(2hr)
- [ ]Test spell and melee attacks(1hr)

### Issue #39: *Dungeon*

- [ ]Create the dungeon layout with two doors when entering. (2hr)
- [ ]Implement randomly placed chests throughout dungeon rooms.(2hr)
- [ ]Add enemies to rooms that attack the player.(2hr)
- [ ]Implement door transitions between rooms and unlock doors after enemies are defeated(1hr)
- [ ]Test room generation, doors, enemies, and chest placement.(1hr)

### Issue #40: *Enemies*

- [ ]Implement enemy attacks without movement.(3hr)
- [ ]Make enemy attacks damage the player.(2hr)
- [ ]Implement the ability for players to damage enemies.(2hr)
- [ ]Add a 50/50 chance for enemies to drop items.(1hr)
- [ ]Test enemy attacks, damage, and item drops.(1hr)

### Issue #37: *Currency*

- [ ]Implement the starting 100 coins, display the currency, and deduct coins when purchasing items.(1hr)
- [ ]Implement the 30% coin deduction when the player dies and test the currency system.(1hr)

---

## 6. Work Distribution

| Member | Stories owned | Points |
|--------|---------------|--------|
|Emily   |#16 On Screen Visuals, #41 Character Movement Visuals and Animation| 20 |
|Rithanya|#5 Dungeon Combat System  | 10|
|Ashley  | #40 Enemies, #37 Currency | 11|
|Evan    | #39 Dungeon  | 12|

*If the work is not balanced, explain why:*
Overall, the workload is balanced, but some members have more tasks than others. This was discussed as a team, and members communicated and agreed to dedicate extra time over break when needed. We will continue communicating, and supporting each other to make sure everyone stays on track and complete their assigned work.
_

---

## 7. Stories Split or Deferred

*Did you split any stories that were too large for one sprint, or move stories back to the backlog? List them and say why.*

We created the Dungeon issue (#39) specifically for Sprint 3 to focus on building the dungeon experience. We also created separate stories for the Combat System (#5) and Enemies (#40) to break down the gameplay features and make the work easier to manage. The Currency issue (#37) was created to address work from the previous backlog that we were unable to complete. We separated On Screen Visuals (#16) and Character Movement Visuals and Animation (#41) into their own stories so that the visual design could be worked on separately while other team members focused on coding. This would help divide the work and make it easier for people to contribute at the same time.
_

---
## 8. Retrospective Follow-Through

*Which action items from last sprint's retrospective are part of this sprint's plan, and how? (Sprint 1: write "n/a")*

| Action item | How it shows up in this sprint |
|-------------|--------------------------------|
|Assign one team member responsible for final integration.|We assigned Ashley to handle final integration. We also planned ahead to give her enough time to connect everyone's work instead of leaving it until the last minute.|

|Communicate about task dependencies and decide which tasks need to be completed first.|We discussed task dependencies as a team and decided which tasks needed to be completed first. We also discussed using temporary components so members could continue working while waiting for other features.  |

---

## 9. Risks and Dependencies

*What might stop the team from meeting the sprint goal? Which stories depend on others being finished first?*
Some of the issues for this sprint depend on each other, especially the visual design part. The designs need to be completed early so the team has enough time to add them to the game. The dungeon, combat, and enemy features also depend on each other because they need to work together. If these tasks are delayed, team members may need to use temporary components to continue working and have less time for final integration and testing.
_

---

## 10. Checklist

- [Y] Sprint goal written
- [Y] Every committed story meets the Definition of Ready
- [Y] Every story has an owner
- [Y] Board updated: committed stories in the sprint, tasks created
- [Y] Commitment compared to velocity
- [Y] Report committed to `scrum/planning/` via pull request
