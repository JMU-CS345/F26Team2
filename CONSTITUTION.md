# Team Constitution

*This document records how our team works together on Mage Quest. Fill in every field. Replace the italic guidance with your team's decisions. Changes to this document go through a pull request like any other change.*

---

## 1. Team and Roles
##  Development Team: 
    Ashley C-Q
    Evan K
    Emily C 
    Rithanya S

### Team Number
    #2

### Team Name
    Team Two 

_

### Members

| Name | GitHub username | Preferred contact | Usual availability |
|------|-----------------|-------------------|--------------------|
|Emily C|emilyy3x|discord/number|Tuesday/Thursday afternoon, most weekends & ask|
|Ashley C-Q|ash1eyv10|number/discord|ask, since it changes|
|Evan K|evan-khanna-dev|number|ask, since it depends on the week|
|Rithanya S|sarav2rx|number|evenings after class|

### Scrum Master

**Sprint 1 Scrum Master:** 

**Does the role rotate?** *(e.g., rotates each sprint in the order listed above; or one person for the whole project)*

Role will rotate. 

Week 1 (Oct 25 to Nov 1) - Ashley C-Q
Week 2 (Nov 2 to Nov 8) - Evan K
Week 3 (Nov 9 to Nov 15)- Emily C
Week 4 (Nov 16 to Nov 22)- Rithanya S
Week 5 (Nov 23 to Nov 29)- Ashley C-Q (if needed)
PRESENTATION Week 6 (Nov 30 to Dec 6)- Evan K
_

### Product Owner

*Choose one team member who will interact with the instructor (stakeholder) to clarify and prioritize stories, and to collect new ones.*
Evan K will be the Product Owner.
_

### Other Responsibilities

Who is responsible for maintaining the project board / backlog in good order? *(Scrum Master?)*

The Scrum Master will maintain when it's their turn. Previous Scrum Master should update the new Scrum Master for the week on updates and to catch them up to date.

Who is responsible for deploying the main branch to production to update GitHub pages?

Ashley C-Q will handle deployment for GitHub pages.

### Decision Making

*(How do we decide things: consensus, majority vote, Scrum Master decides? What happens if we are deadlocked?)*

Consensus. If deadlocked, we will integrate their opinion and try to find a way to apply it.

_

---

## 2. Scrum Process

### Sprint Length and Dates

| Sprint | Start | End | Review / Retro date |
|--------|-------|-----|---------------------|
| 1 | 11/2 | 11/8 | 11/9 |
| 2 | 11/9 | 11/15 | 11/16 |
| 3 | 11/16 | 11/29 | 11/30 |
| 4 | 11/30 | 12/6 | 12/7 |
| 5 | 12/7 | presentation day | presentation day | 

### Meetings

| Meeting | When |
|---------|------|
| Daily standup | Wed/Fri |
| Sprint planning | Mon |
| Sprint review | Mon |
| Sprint retrospective | Mon |


_

### Definition of Ready

*A backlog item may be pulled into a sprint only when:*

- [Y] it is written as a user story
- [Y] it has acceptance criteria
- [Y] it has an estimate

### Definition of Done

*An item is done only when:*

- [Y] code is reviewed and approved by at least one teammate
- [Y] all tests pass in CI
- [N] merged to `main`
- [N] works in the deployed build
- [N] the issue is closed
- [ ]

### Estimation

**Method:** Story points
-> measures relative size
-> effort (how long), complexity (how hard it is to get right),
-> uncertainty (something you don't know)

**Scale:** 1, 2, 3, 5, 8, 13, ?
-> 13 is a warning (split it)
-> between two #'s? pick the larger one
-> '?' means "can't estimate this yet" question/spike

_

### Backlog and Board

**Where the backlog lives:** *https://github.com/orgs/JMU-CS345/projects/13/views/1*

**Board columns:** To Do → In Progress → In Review → Done

---

## 3. Communication

### Primary Channel

**Channel:** Discord and IMessages

**Expected response time:** Max: 6 hours

### What Goes Where

*(What is discussed in the chat channel vs. in GitHub issues vs. in PR comments?)*
*Channel:* Questions, Concerns
*Github issues:* User stories, tasks
*PR comments:* suggestions

_

### Reporting Blockers or Falling Behind

*(How and how early does a member tell the team they are stuck or behind?)*
When they hit an issue they don't know how to proceed, a message should be sent right away.
_

### Absences

*(How much notice is required? How is the absent member's work covered?)*
24 hours, a message/notice should be sent to the team. The team that is present will cover for the absent member by splitting the work.
_

---

## 4. Git and GitHub Workflow

### Branch Naming

**Format:** type/issue-short-description

**Allowed types:** feature, fix, documents, refactor, test, chore

**Examples:**

- feature/customizing-appearance 
- fix/damage-reduction

### Branch Protection on `main`

- [Y] No direct pushes to `main`
- [Y] Required approvals before merge: _
- [Y] CI must pass before merge
- [Y] Same protection on `production`

### Commit Messages

*(Format and style, e.g., imperative mood: "Add rune puzzle validation". Do we follow Conventional Commits?)*

Commit message should say the main gist of what is being committed.
Format: Imperative mood: Add rune puzzle validation

_

### Pull Requests

**Maximum size:** aim for under 300 changed lines

**Description template:** What / Why / How to test / Screenshot

**Linking issues:** every PR includes `Closes #N`
-> 'Closes #N' means that the issue will close itself.

_

### Code Review

**Review turnaround:** within 24 hours of being requested

**Who reviews what:** any available teammate that has not worked on the code/method/function itself.

_

### Merging

**Merge style:** 
features/branches -> merge commit
for committing to main -> squash and merge 

**Who merges:** the author after approval

**After merge:** delete the branch

---

## 5. Code Conventions

### Naming

| Kind | Convention | Example |
|------|------------|---------|
| Variables and functions | Camel | lookAround |
| Classes | UpperCase | PasswordLol |
| Constants | All upper case | MERGE |
| Files | UpperCase | HelloThere |
| Test files | UpperTest | HelloThereTest |

### Formatting

**Indentation:** tabs

**Semicolons:** never

**Quotes:** double

**Maximum line length:** 80

**Tools:** Prettier

_

### Project Structure

*(Where does each kind of file live?)*

```
src/
  model/        (e.g., game logic, no p5 drawing calls)
  view/         (e.g., drawing code) 
  controller/   (e.g., input handling)
assets/
spec/
```

### Architecture Rules

*(e.g., game logic never calls p5 drawing functions directly, so it can be unit tested)*

Helper function should be implemented in case of needing to test the given logic.

### Comments and Documentation

*(When are comments or JSDoc required?)*

JSDoc -> when things need clarification.

### Assets

**File naming:** no space, lowercase

**Licensing and attribution:** In a master document.

_

---

## 6. Testing and Quality

**Test framework:** Jasmine

**Where tests live:** In GitHub, in a file

**What must have tests:** every branch and line, full coverage

_

**Coverage expectations:** 90+%

**Continuous integration:** verification, automated tests, checking code format, and checking if everything is probably linked.

_

**Rule for failing CI:** nothing merges while CI is red

_

**Manual playtesting:** Someone who has not touched the code/written it. They should report it in a recorded Google Document. Where each time someone has reviewed, they should write what they've noticed that is not running correctly or not supposed to be there.

_

---

## 7. Deployment

**Where the game is deployed:** GitHub Pages, https://github.com/JMU-CS345/F26Team2/issues 

**What triggers a deploy:** a release PR from `main` into `production`, opened by the Scrum Master after each sprint review

**Who checks the deployed build, and when:** Any available team member, who has the least amount of involvement in the code.

---

## 8. AI Tool Usage

**Allowed tools:** Claude, Gemini, and ChatGPT

**Allowed uses:** tests, documentation, and errors seen that team member have not been able to see

_

**Not allowed:** generating code, if team member chooses to generate, they must understand accountable and needing to review it to the full extent.

**Disclosure:** note AI assistance in the PR description

_

**Responsibility:** whoever submits AI-generated code must understand they will take accountable for it, no matter if the AI made a mistake

_

---

## 9. Working Agreements and Conflict

### Expected Effort

about 5 to 6 hours per week

_

### Fair Contribution

*(What counts as contributing, and how is it tracked? e.g., PRs merged, reviews done, story points completed.)*
Contribution counts as: assisting when someone needs help, answering questions, 
Tracking: will be tracked by using a Google Form rating how contribution is going, what should be brought up if something is going wrong, and what is going well.

_

### Conflict Resolution

*(What steps do we follow when there is a disagreement or a problem with a teammate?)*

1. talk to the person directly
2. raise it at the retrospective
3. Scrum Master mediates
4. escalate to the instructor if needed

### Missed Commitments

*(What happens when a member repeatedly misses commitments?)*
If a member misses 2:
1. talk to the person -> Find out why?
2. raise it at the retrospective
3. Scrum Master mediates
4. escalate to instructor if it continues

_

### Amending This Constitution

*(How can this document be changed? e.g., proposed by PR, approved by team vote at a retrospective.)*

approved by team vote

_

---

## 10. Sign-Off

*By signing, each member agrees to follow this constitution.*

| GitHub name | Signature (type your name) | Date |
|------|----------------------------|------|
|ash1eyv10|Ashley C-Q|10/28/2026|
|emilyy3x|Emily C|10/28/2026|
|sarav2rx|Rithanya S|10/28/2026|
|      |                            |      |
