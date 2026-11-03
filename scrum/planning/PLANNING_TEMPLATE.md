# Sprint Planning Report: Sprint 1

*Copy this file into `scrum/planning/` using your team's naming format. Fill in every field. Replace the italic guidance with your team's information.*

---

## 1. Meeting Details

**Date:** 11/2/2026

**Scrum Master:** Evan A. Khanna

**Attendees:** Evan, Rithanya, Emily, Ashley

**Absent:** N/A

---

## 2. Sprint Goal

When the game is opened, a title screen will appear with options to see the credits and also start playing the game where they can then go into picking their wizard faction (fire, ice, psyc) and then customize different parts of their chosen wizard faction.

_

---

## 3. Capacity and Velocity

**Sprint dates:** 11/2 to 11/9

**Velocity last sprint (points completed):** n/a *(Sprint 1: write "n/a")*

**Average velocity so far:** 0

**Known absences or reduced availability this sprint:** None

**Points committed this sprint:** 4

**Why this commitment is realistic:** It is because this is all UI and this also gives us a good taste of real P5.js usage. And also this gives us about 3 classes to work on this and the sprint review as well.

_

---

## 4. Committed Backlog Items

*Every item listed here must meet the Definition of Ready in your constitution. Items should be taken from the top of the product backlog in priority order. If you skipped a higher-priority item, explain why under "Notes".*

| Issue # | User story                          | Estimate        | Owner          | Ready? |
|---------|-------------------------------------|-----------------|----------------|--------|
|  #10    | As a gamer, I want to select whether I want to be a fire, ice, or psyc mage                           | 8 hours  | Rithanya     | [ x]    |
|  #17    | As a gamer, I want to click buttons to customize different parts of the character to personalize it   | 10 hours | Ashley       | [ x]    |
|  #24    | As a gamer, I want to see the title, credits, and start playing the game, as a nice intro to the game | 8 hours  | Evan & Emily | [ x]    |

**Total points:** 4

**Notes:** The main focus is organizing and making the UI for the game.

--- 

## 5. Task Breakdown

*Break each story into tasks. Include tasks for writing tests and reviewing PRs, not only coding.*

### Issue #10: Customization of mage class

- [ ] Make 3 buttons for each page class (fire, ice, and psyc)
- [ ] Assign a graphic each button
- [ ] Setup click events for each button
- [ ] Add a header
- [ ] Write tests for ensuring the selected mage is kept track throughout the game (can be scaffolded)
- [ ] Review the PRs

### Issue #17: Mage Design Customization

- [ ] Make different buttons for each of the customization options (eyes, hair, clothing, hat, skin tone)
- [ ] Assign a graphic to buttons based on color and which part of the character is being changed
- [ ] Stub out click events

### Issue #24: Start Up Screen

- [ ] Create a credits page with a button to access it (it can be blank or just be a dummy)
- [ ] Add the title of the game in appropriate font and make it the center of attention on the page
- [ ] Add a play button to go and play the game


---

## 6. Work Distribution

| Member | Stories owned | Points |
|--------|---------------|--------|
|Evan        |  #24 |    1    |
|  Ashley     |         #17      |    1    |
|      Emily  |#24               |     1   |
|        Rithanya|               #10|    1    |

*If the work is not balanced, explain why:*
Its unbalanced because even though Ashley and Rithanya are doing their own things and it might seem harder for the character customization and faction choosing, the setup screen might take time since it is more written content such as credits, start screen, and also having to transition to some sort of credits page or popup when clicking the credits button while Rithanya's and Ashley deal with a single screen/UI.
_

---

## 7. Stories Split or Deferred

*Did you split any stories that were too large for one sprint, or move stories back to the backlog? List them and say why.*
We moved back the actual functionality parts of the character  customization and factions since we first have to make the UI for all that to occur and also because a lot of that customization depends on lots of decisions like how the character should really look like and how it should be built in P5.js
_

---

## 8. Retrospective Follow-Through

*Which action items from last sprint's retrospective are part of this sprint's plan, and how? (Sprint 1: write "n/a")*

| Action item | How it shows up in this sprint |
|-------------|--------------------------------|
|            n/a |n/a                                |
|           n/a  |                     n /a           |

---

## 9. Risks and Dependencies

*What might stop the team from meeting the sprint goal? Which stories depend on others being finished first?*

Since this is the first sprint there really isn't any sprint that is a blocker since this is the first. The main thing that MIGHT (or may not) prevent the team from achieving the sprint goal is that this is our first time really putting P5.js to real application and UI can get complex especially with layering so it might take longer this sprint to get the hang of navigating P5.js in that sense. But it should be doable.

---

## 10. Checklist

- [x] Sprint goal written
- [x] Every committed story meets the Definition of Ready
- [x] Every story has an owner
- [x] Board updated: committed stories in the sprint, tasks created
- [x] Commitment compared to velocity
- [ ] Report committed to `scrum/planning/` via pull request
