# Week 2 Task 4: Complete wireframe set (ASCII + visual)

This file contains the wireframe notes for Week 2 Task 4. It includes: user-story mappings, designer assignments, ASCII wireframes for all screens and states, and notes for the visual wireframe assets to be added under docs/wireframes/.

Commit note: Week 2 Task 4: Complete wireframe set (ASCII + visual)

---

## Summary

- Purpose: Provide a complete set of wireframes (ASCII + visual placeholders) that cover all screens and states required by the project user stories.
- Deliverables in this branch:
  - docs/wireframe-notes.md (this file)
  - docs/wireframes/ (visual assets to be added; README included)
- Designer assignments: included below per screen.

---

## Legend / Conventions

- [US#X] refers to a user story ID (map to your issue/board as needed).
- Designer: name assigned to create high-fidelity visuals.
- ASCII wireframes use fixed-width layout approximations for structure and content placement.
- Notes indicate interactions, states, and accessibility considerations.

---

## Screen: Landing / Home

- User stories: [US#1] As a visitor, I can see the app purpose and primary CTA so I can get started.
- Designer: @designer-anna

ASCII wireframe:

+----------------------------------------------------------+
| APP LOGO                                [Login] [Signup] |
+----------------------------------------------------------+
| HERO: Large heading describing value prop               |
| Subheading / 1-line summary                             |
| [Primary CTA: Get Started]   [Secondary CTA: Learn More]|
+----------------------------------------------------------+
| Feature cards: 3 columns (icon + title + 1-line desc)   |
+----------------------------------------------------------+
| Footer (links, copyright)                               |
+----------------------------------------------------------+

Notes:
- Primary CTA navigates to Signup or core onboarding flow.
- Make hero image decorative with alt text for screen readers.

---

## Screen: Signup

- User stories: [US#2] As a new user, I can register an account so I can access features.
- Designer: @designer-lee

ASCII wireframe:

+-------------------------+
| Signup                  |
+-------------------------+
| [Full name]             |
| [Email address]         |
| [Password]              |
| [Confirm password]      |
| [Signup button]         |
| Or: [Continue with Google] [Continue with GitHub]
+-------------------------+
| Link: Already have an account? [Login]
+-------------------------+

States:
- Validation errors inline (email invalid, password too short).
- Success -> onboarding screen / dashboard.

Accessibility:
- Form labels must be explicit; use aria-live for error messages.

---

## Screen: Login

- User stories: [US#3] As a returning user I can log in to my account.
- Designer: @designer-lee

ASCII wireframe:

+-------------------------+
| Login                   |
+-------------------------+
| [Email address]         |
| [Password]              |
| [Remember me] [Forgot?] |
| [Login button]          |
| [Continue with Google]  |
+-------------------------+
| Link: New user? [Signup]|
+-------------------------+

States:
- Invalid credentials -> inline error message.
- Locked account -> show steps to recover.

---

## Screen: Dashboard (authenticated landing)

- User stories: [US#4] As a user I can view my dashboard with summary cards and recent activity.
- Designer: @designer-anna

ASCII wireframe:

+----------------------------------------------------------+
| Logo | Search [_____] | Notifications | Avatar (menu)     |
+----------------------------------------------------------+
| Left nav: Home | Create | Inbox | Settings               |
+----------------------------------------------------------+
| Main: Greeting "Hi, [Name]"                            |
| Summary cards (e.g., stats)                             |
| Recent activity / feed (list of items with timestamps)  |
+----------------------------------------------------------+

States:
- Empty state: show CTA to create first item and short help text.
- Loading state: skeletons for cards and feed items.

---

## Screen: Create Item / Primary Action Flow

- User stories: [US#5] As a user I can create new content so I can contribute.
- Designer: @designer-sam

ASCII wireframe:

+---------------------------------------------+
| Create new item                             |
+---------------------------------------------+
| [Title]                                     |
| [Body / Rich text editor]                   |
| [Tags]  [Upload image]                      |
| [Publish] [Save draft]                      |
+---------------------------------------------+

States:
- Validation: title required.
- Success toast + redirect to item detail.

---

## Screen: Item Detail / Post

- User stories: [US#6] As a user I can view a item's full detail page.
- Designer: @designer-sam

ASCII wireframe:

+----------------------------------------------------------+
| Title                                                    |
| By [Author] • date • read time                            |
+----------------------------------------------------------+
| Body (images, embeds)                                     |
+----------------------------------------------------------+
| Actions: [Like] [Comment] [Share]                         |
| Comments section                                           |
+----------------------------------------------------------+

States:
- Empty comments: show encouragement to start discussion.
- Loading: skeleton for body and comments.

---

## Screen: Profile / Settings

- User stories: [US#7] As a user I can update my profile settings.
- Designer: @designer-lee

ASCII wireframe:

+---------------------------------------------+
| Profile                                     |
+---------------------------------------------+
| Avatar [Change]   Name                        |
| Email (read-only)                             |
| Bio                                           |
| [Save changes]                                |
+---------------------------------------------+

Security sub-screen:
- Change password with current password confirmation.

---

## Error, Empty & Edge States (global)

- Network error modal: retry button, fallback to offline content if available.
- 404 page: friendly message + search bar + link to Home.
- 500 error: brief apology + report button (collects logs) + contact support.
- Empty lists: descriptive CTA to help users start.

ASCII example: 404

+---------------------------------------------+
| 404 — Page not found                         |
| The page you're looking for doesn't exist.  |
| [Go to Home]  [Search]                       |
+---------------------------------------------+

---

## Designer assignments summary

- @designer-anna — Landing, Dashboard, Summary cards, Empty states
- @designer-lee  — Signup, Login, Profile, Settings, Accessibility review
- @designer-sam  — Create Item, Item Detail, Comments interactions

---

## Visual wireframe asset guidelines (for docs/wireframes/)

- File naming convention: <screen>-<state>-v1.png (e.g., dashboard-empty-v1.png)
- Resolution: export 1440px wide (desktop) and 375px wide (mobile) versions.
- Provide source files (.fig / .sketch / .xd) where possible alongside PNG exports.
- Add a brief caption in the wireframes README referencing the corresponding user story IDs.

---

## How to review

1. Check that each ASCII wireframe maps to one or more user stories listed above.
2. Designers: add high-fidelity images to docs/wireframes/ using the naming convention.
3. Developers: confirm component names and props needed for each screen in follow-up issue(s).

---

## Next steps

- Designers: add PNGs and source files to docs/wireframes/ on this branch.
- Team: create implementation issues for top priority screens after design review.

