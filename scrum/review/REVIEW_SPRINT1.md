# Sprint Review Report: Sprint _

*Copy this file into `scrum/review/` using your team's naming format. Fill in every field. Replace the italic guidance with your team's information. Due by 11:59 p.m. on the day of the review.*

---

## 1. Meeting Details

**Date:** 11/9/2026

**Scrum Master:** Emily C

**Attendees:** Rithanya, Ashley, & Evan

**Absent:** N/A

**Presenter:** Rithanya, Ashley, Evan, & Emily

**Deployed build reviewed:** N/A

**Release PR into `production`:** N/A

Note: No deployed build or merge into Production for this sprint. Review was done individually showcasing each thing each member contributed.

---

## 2. Sprint Goal


**The goal we set:** Our original goal was to create the three initial screens of the game: the Start Screen, the Mage Selection screen, and the Mage Customization screen. The player first sees the start screen, which displays the title and allows you to play the game or see the credits screen. Then, once the player hits play, the player is then able to select one of the three mage classes: fire, ice, or psych. Lastly, the player is then allowed to customize their character by changing the skin tone, the hair colour, and select one of three different outfits.

**Did we meet it?** Partly.

_

---

## 3. Committed Items: Done or Not Done


| Issue # | User story | Estimate | Owner | Done? | Built by |
|---------|------------|----------|-------|-------|----------|
|#24      |Starting Screen|3hrs|Evan|N|Evan|
|#17      |Customization Screen|8hrs|Ashley|N|Ashley|
|#10      |Mage Selection Screen|9hrs|Rithanya|N|Rithanya|
|         |            |          |       |       |           |
|         |            |          |       |       |           |

---

## 4. Metrics

| | Points |
|---|---|
| Committed |4|
| Completed |0|
| Completion rate | 0% |

**Velocity history:**

| Sprint | Committed | Completed |
|--------|-----------|-----------|
| 1      |    4      |     0     |
| 2      |           |           |
| 3      |           |           |
| 4      |           |           |

**What explains the difference between committed and completed?** Committed is the amount of points we decided each item was at the Sprint Planning while completed is based off of our Definition of Done and if any points were finished.

---

## 5. Demo


### Issue #24: *Start up Screen*

- [Y] *Given the player load the game, when the player sees the starting screen, then the player should see the title of the game*
- [N] *Given the starting screen, when the player selects the "play" button, then the screen should change into the next screen: the mage class selection.*
- [N] *Given the starting screen, when the player selects the "credits" button, then the screen should change to give credit to all the developers, any images that were used, and any music used in the game.*
- [N] *Given the starting screen, when the player select the "quit" button, then the game should close and exit the application.*
- [N] *Given the starting screen, when the user is on the screen, then there should be a background that contains particles representing the different mage classes.*

### Issue #17: *Mage Design Customization*

- [Y] *Given the player moves onto the customization screen, when the player enters the screen, then they should be presented with options to change their character's hair colour, skin tone, and outfits.*
- [N] *Given the player selects a skin tone, then the character's skin tone should change to the selected one.*
- [N] *Given the player selects a hair colour, then the character's hair colour should change to the selected one.*
- [N] *Given the player selects one of the three outfits, then the character's outfit should change depending on the one selected. The colours should correspond to the class the player previously chosen.*

### Issue #10: *Customization of Mage Class*

- [Y] *Given the player reaches the class selection screen, then the player is presented with three distinct mage class options: Fire, Ice, and Psych.*
- [Y] *Given the player selects the Fire mage, then the player's choice is displayed and saved.*
- [Y] *Given the player selects the Ice mage, then the player's choice is displayed and saved.*
- [Y] *Given the player selects the Psych mage, then the player's choice is displayed and saved.*
- [N] *Given the player has successfully chosen a mage class, then the player moves onto the next screen.*

---

## 6. Incomplete Work


| Issue # | What remains | New estimate | Back in backlog? |
|---------|--------------|--------------|------------------|
|   #26   |Connecting all the screen created in Sprint 1 |4hrs| [Y] |
|   #17    |Inserting the character and having the character change depending on what is selected|5hrs| [Y] As Issue #17|
|         |              |              | [ ]              |

Note: We created a new issue focusing on connecting all the screens three of the screens created in this sprint together since that is mainly what we failed to complete during this sprint. Thus, this issue will be in the next sprint.

---

## 7. Stakeholder Feedback

Feedback: All buttons should have a function, thus if a button does not have a function it seems like a "broken button." Our goal is to create a Potentially Shippable Product, so when we present to the stakeholder everything on screen is expected to work. The game so far looks good, although the screens are not put together. 
_

---

## 8. Backlog Changes

1 new backlog added, 1 old backlog carried over.

**New stories added:** 1

**Priorities changed:** N/A

**Stories removed:** N/A

**If no change was needed, why not?** N/A

---

## 9. Quality

*Give the stakeholder an honest picture of the build's quality.*

**CI status on `production`:** N/A *(passing / failing)*

**Number of specs:** N/A

**Known bugs in the deployed build:** N/A, though currently as of the date of the review 0

Reason: We didn't get the chance to push it into production, thus we don't know the quality of all of our screens put together. Individually, currently, they all work, but we haven't integrated them, which is something we have to work on next sprint.

---

## 10. Checklist

- [Y] Demo given from the deployed GitHub Pages build
- [Y] Demo given by one presenter, crediting the members who built each story
- [N] Release PR merged before the review begins *(No PR to merge)*
- [Y] Every committed item marked Done or Not Done
- [N] Every item marked Done has all its acceptance criteria checked in section 5 *(no items are fully Done)*
- [Y] Metrics filled in, with the committed/completed difference explained
- [Y] Stakeholder feedback recorded (Sprint 4: n/a)
- [Y] Backlog updated, or the reason no change was needed explained (Sprint 4: n/a)
- [Y] Report committed to `scrum/review/` via pull request by 11:59 p.m. on the day of the review
