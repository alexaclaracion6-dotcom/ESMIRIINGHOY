# Maramag Home Food Pre‑Order Manager – Complete Deliverable Pack
---
## 📑 Contents
1. Agile User Stories
2. Wireframe Plan & Workflow
3. AI Scope Review & Finalized Scope
4. Repository File Structure

---
## 🧩 1. Agile User Stories
### 📋 Record Type: Menu Items
| ID | User Story | Acceptance Criteria | Suggested Owner |
|----|------------|---------------------|-----------------|
| M‑01 | **As an Admin**, I want to **create new menu items** so that customers can view and order available food options. | 1. Form accepts name, description, price, category, availability status<br>2. Required fields are validated before saving<br>3. Saved item appears in the menu list immediately | Member 1 |
| M‑02 | **As an Admin/Customer**, I want to **view a list of all menu items** so that I can quickly browse what is offered. | 1. Shows name, price, category, availability<br>2. Can search/filter by name/category<br>3. Sorted alphabetically by default | Member 2 |
| M‑03 | **As an Admin/Customer**, I want to **view full details of a single menu item** so that I can see complete information before ordering. | 1. Displays all stored fields<br>2. Clear availability indicator<br>3. Navigation back to list | Member 3 |
| M‑04 | **As an Admin**, I want to **update existing menu items** so that I can correct details or adjust prices/availability. | 1. Form pre‑fills current data<br>2. Changes validated on save<br>3. Updates reflect instantly | Member 4 |
| M‑05 | **As an Admin**, I want to **delete menu items** so that I can remove items no longer available. | 1. Requires explicit confirmation<br>2. Removed from all public views<br>3. Linked pending orders flagged for review | Member 5 |

### 📋 Record Type: Customer Orders
| ID | User Story | Acceptance Criteria | Suggested Owner |
|----|------------|---------------------|-----------------|
| O‑01 | **As a Customer**, I want to **place a new pre‑order** so that my selected food is reserved. | 1. Add multiple items with quantities<br>2. Auto‑calculates total amount<br>3. Saves with “Pending” status | Member 2 |
| O‑02 | **As an Admin/Customer**, I want to **view a list of orders** so that I can track all pre‑orders. | 1. Shows order number, customer, date, total, status<br>2. Filter/search by date/status/customer<br>3. Sorted newest first | Member 3 |
| O‑03 | **As an Admin/Customer**, I want to **view full order details** so that I can verify items and status. | 1. Full item breakdown, quantities, total<br>2. Pickup/delivery details & notes<br>3. Timestamped status history | Member 4 |
| O‑04 | **As an Admin**, I want to **update order details/status** so that I can adjust items or progress the order. | 1. Edit quantities/add/remove items<br>2. Update status: Pending → Confirmed → Ready → Completed/Cancelled<br>3. Changes are logged | Member 5 |
| O‑05 | **As an Admin**, I want to **cancel/delete orders** so that I can remove invalid entries. | 1. Requires confirmation prompt<br>2. Stock counts revert automatically<br>3. Action is recorded | Member 1 |

### 📋 Record Type: Customer Profiles
| ID | User Story | Acceptance Criteria | Suggested Owner |
|----|------------|---------------------|-----------------|
| C‑01 | **As a Customer/Admin**, I want to **register/create a customer profile** so that orders are linked to my details. | 1. Captures name, contact, address, pickup preference<br>2. Unique contact validation<br>3. Profile ready for immediate use | Member 3 |
| C‑02 | **As an Admin**, I want to **view a list of all customers** so that I can manage and contact them. | 1. Shows name, contact, order count, registration date<br>2. Search/filter by name/contact<br>3. Sorted alphabetically | Member 4 |
| C‑03 | **As a Customer/Admin**, I want to **view a single customer’s full profile** so that I can review their details and history. | 1. Displays all contact/preference data<br>2. Shows summary of past orders<br>3. Restricted access rule applied | Member 5 |
| C‑04 | **As a Customer/Admin**, I want to **update profile information** so that details stay current. | 1. Form pre‑fills existing data<br>2. Unique contact rule enforced<br>3. Changes apply to future orders | Member 1 |
| C‑05 | **As an Admin**, I want to **delete a customer profile** so that I can remove duplicates/inactive accounts. | 1. Confirmation warning about linked orders<br>2. Profile removed or marked inactive<br>3. Historical order data retained | Member 2 |

### 📋 Record Type: Sales Records
| ID | User Story | Acceptance Criteria | Suggested Owner |
|----|------------|---------------------|-----------------|
| S‑01 | **As the System/Admin**, I want to **automatically create a sales record** when an order is completed so revenue is tracked. | 1. Generated automatically on “Completed” status<br>2. Captures order ref, date, items, total, payment method<br>3. Read‑only for non‑admin users | Member 4 |
| S‑02 | **As an Admin**, I want to **view a list of sales records** so that I can review overall performance. | 1. Shows date, order ref, total, payment type<br>2. Filter by date range/payment method<br>3. Displays period totals | Member 5 |
| S‑03 | **As an Admin**, I want to **view detailed sales records** so that I can verify revenue and audit transactions. | 1. Full item & amount breakdown<br>2. Links to original order & customer<br>3. Shows payment status | Member 1 |
| S‑04 | **As an Admin**, I want to **adjust sales records** so that I can correct errors or refunds. | 1. Only admin access with reason log<br>2. Original record preserved<br>3. Report totals update correctly | Member 2 |
| S‑05 | **As an Admin**, I want to **archive/delete old sales records** so that the system stays organized. | 1. Requires admin confirmation<br>2. Does not delete linked order/customer history<br>3. Deletion is logged | Member 3 |

---
## 🎨 2. Task 4 – Wireframe Plan
*Low‑fidelity (boxes + labels only), Excalidraw; branch: `feature/wireframes-v1` → reviewed PR only, no direct pushes to `main`.*
| Wireframe ID | Screen Name | Stories Covered | Designer |
|--------------|-------------|-----------------|----------|
| WF‑01 | Main Dashboard & Navigation | All | Member 5 |
| WF‑02 | Menu List & Item Detail | M‑02, M‑03, M‑05 | Member 2 |
| WF‑03 | Menu Item Create/Edit Form | M‑01, M‑04 | Member 1 |
| WF‑04 | Order Placement Form | O‑01 | Member 2 |
| WF‑05 | Order List & Detail View | O‑02, O‑03, O‑04, O‑05 | Member 3 |
| WF‑06 | Customer Profile Create/Edit | C‑01, C‑04 | Member 3 |
| WF‑07 | Customer List & Profile View | C‑02, C‑03, C‑05 | Member 4 |
| WF‑08 | Sales List & Detail View | S‑01, S‑02, S‑03, S‑04, S‑05 | Member 4 |
| WF‑09 | Shared Confirmation Dialog | All delete/status actions | Member 5 |
| WF‑10 | Simple Role Selection / Login | All admin actions | Member 1 |
✅ All screens/states covered; all labeled with designer.

---
## 🧠 3. Task 5 – AI Scope Review & Finalization
*Saved to: `/docs/ai-notes/deliverable-1.md`*
### Prompts Used
1. *“Review this backlog for Maramag Home Food Pre‑Order Manager. Did I miss any CRUD operations or screen states for Menu Items, Orders, Customers, Sales Records?”*
2. *“Is this scope realistic for 5 students over 10 weeks? If not, what can be cut without breaking core functionality?”*

### AI Findings
- ✅ **CRUD Complete**: All 4 entities have full C/Read‑List/Read‑Detail/U/D with confirmation — no gaps.
- ⚠️ **Minor Missing States**: Shared delete confirmation, status change confirmation, basic role selector.
- ⚖️ **Verdict**: Core work achievable; cut optional extras to stay on track.

### Final Scope Decisions
| ✅ KEEP | ❌ DEFER / REMOVE |
|---|---|
| All core CRUD & validation | Menu item image upload |
| Auto sales record generation | List pagination |
| Order status workflow | Auto customer notifications |
| Shared confirmation dialogs | Manual sales record adjustments (MVP lock) |
| Basic admin/customer role check | Advanced reporting |
✅ Gaps fixed; over‑scope items removed; AI exchange documented.

---
## 📂 4. Repository File Structure

# AI Scope Review & Stress‑Test — Deliverable 1
## Project: Maramag Home Food Pre‑Order Manager
**Team:** 5 students | **Time left:** 10 weeks

---
### ✅ What is COMPLETE and CORRECT
- All 4 record types have **full C / R(List) / R(Detail) / U / D**
- Every Delete story includes **confirmation**
- All required screens: List, Detail, Create, Edit
- All required states: Normal, Empty, Error, Delete Confirmation
- Acceptance criteria present for every story
- Ownership evenly spread across all 5 members
- Scope is aligned with a **simple home‑pre‑order system** — no unnecessary complexity

---
### ⚠️ What is REALISTIC to KEEP
- Manual stock updates (no auto‑deduction logic)
- Basic status tracking only
- Simple date/amount filtering
- No user accounts or login — owner uses direct access
- Manual sales logging
- Basic list views only — no advanced dashboards

---
### ❌ What to CUT if you want to stay safe
*(These are NOT required for full marks and will only add work)*
- Do NOT add: automatic SMS/email alerts
- Do NOT add: online payment gateway integration
- Do NOT add: delivery route mapping
- Do NOT add: user roles/permissions
- Do NOT add: complex charts/graphs

---
### ✅ Final Verdict
Your current scope is **realistic and achievable** for 5 students in 10 weeks.
- No missing CRUD or screen‑state requirements
- No over‑inflated features
- Focus on making what you have **complete and working** — that earns full marks.

---
## 🧾 Decision Log
- **Reviewed by:** AI Assistant
- **Decision:** Keep all planned features; cut nothing from the required backlog.
- **Reason:** All CRUD, screens, and states are complete; timeline is safe as long as you stick to the defined scope.

# Maramag Home Food Pre‑Order Manager
## Deliverable 1 — Scoping, Backlog & Wireframes
**Week 2 | Team: Aclaracion · Enclonar · Ansungay**

---
## 👥 TEAM ROSTER & ROLES (from README.md)
| Member Name | Starting Role | Primary Responsibility |
|---|---|---|
| **Aclaracion** | Repo Lead | Branch protection, merge rules, repo hygiene |
| **Enclonar** | Board Lead | Task board setup, ticket tracking, status updates |
| **Ansungay** | Scribe | Meeting notes, decisions, AI use log, retrospectives |
| **Enclonar** | Builder 1 | Feature development, code reviews |
| **Ansungay** | Builder 2 | Feature development, code reviews |

---
## 📑 PART 1 — FULL CRUD BACKLOG
### User Stories, Acceptance Criteria & Correct Ticket Owners

#### 📦 Menu Items
| Operation | User Story | Acceptance Criteria | Owner |
|---|---|---|---|
| **Create** | As the business owner, I want to add new menu items so that customers can see available food options. | • Required fields cannot be empty<br>• Price and stock accept only positive values<br>• New item appears in the menu list after saving | **Aclaracion** |
| **Read (List)** | As a customer or owner, I want to view the full menu list so that I can browse all offerings at a glance. | • Shows all active items sorted by category<br>• Displays name, price, and available stock<br>• Loads without errors | **Enclonar** |
| **Read (Detail)** | As a customer or owner, I want to view a single item’s full details so that I know all info before ordering. | • Shows complete description, price, and stock<br>• Matches exactly the selected record<br>• Has a “Back to list” button | **Enclonar** |
| **Update** | As the business owner, I want to edit menu details or adjust stock so that information stays accurate. | • Only existing items can be edited<br>• Invalid values are rejected<br>• Changes reflect immediately after saving | **Aclaracion** |
| **Delete** | As the business owner, I want to remove discontinued items after confirming so that the menu stays up‑to‑date. | • Shows “Are you sure?” prompt first<br>• Cancels if user selects No<br>• Item is removed only after Yes confirmation | **Ansungay** |

---

#### 🧾 Customer Orders
| Operation | User Story | Acceptance Criteria | Owner |
|---|---|---|---|
| **Create** | As a customer, I want to submit a new pre‑order so that my request is recorded for preparation. | • Requires customer details, items, and schedule<br>• Total amount calculates automatically<br>• Shows order number confirmation | **Enclonar** |
| **Read (List)** | As the business owner, I want to see all orders in one list so that I can track them efficiently. | • Lists orders with customer, total, and status<br>• Can filter by status<br>• Sorted newest first | **Ansungay** |
| **Read (Detail)** | As owner or customer, I want to open a single order so that I see all items and status. | • Shows full item breakdown and customer info<br>• Displays correct total and delivery status<br>• Matches the selected order ID | **Ansungay** |
| **Update** | As the business owner, I want to adjust order items or status so that changes are reflected correctly. | • Can update items, quantity, or status<br>• Total recalculates automatically<br>• Updated info appears in the list | **Enclonar** |
| **Delete** | As the business owner, I want to cancel an order after confirmation so that mistakes are avoided. | • Requires explicit confirmation<br>• Returns stock to menu if cancelled<br>• Order is marked cancelled or removed | **Aclaracion** |

---

#### 👤 Customer Profiles
| Operation | User Story | Acceptance Criteria | Owner |
|---|---|---|---|
| **Create** | As a customer, I want to save my details so that I don’t re‑enter them every time. | • Saves name, contact, and address<br>• Validates phone number format<br>• Profile links to future orders | **Enclonar** |
| **Read (List)** | As the business owner, I want to view all registered customers so that I can manage repeat orders easily. | • Lists all customers with contact info<br>• Searchable by name or number<br>• Shows total orders per customer | **Enclonar** |
| **Read (Detail)** | As owner or customer, I want to view a profile so that I see contact details and order history. | • Shows full customer information<br>• Displays linked order history<br>• Matches the correct profile ID | **Enclonar** |
| **Update** | As owner or customer, I want to edit profile details so that contact info stays correct. | • Can change all saved fields<br>• Updates immediately after saving<br>• No duplicate entries created | **Enclonar** |
| **Delete** | As the business owner, I want to remove inactive profiles after confirmation so that records stay clean. | • Shows confirmation prompt<br>• Does not delete linked orders<br>• Profile removed only after confirmation | **Ansungay** |

---

#### 💰 Sales Records
| Operation | User Story | Acceptance Criteria | Owner |
|---|---|---|---|
| **Create** | As the business owner, I want to log a sale for every completed order so that payments are tracked. | • Links to an existing order<br>• Records amount, method, and status<br>• Auto‑saves transaction date | **Ansungay** |
| **Read (List)** | As the business owner, I want to view all sales so that I can see daily and total earnings. | • Lists sales with date, amount, and method<br>• Can filter by date or payment status<br>• Shows overall total at the bottom | **Aclaracion** |
| **Read (Detail)** | As the business owner, I want to view a single sale record so that I verify payment details. | • Shows full transaction details<br>• Matches linked order reference<br>• Displays accurate figures | **Aclaracion** |
| **Update** | As the business owner, I want to correct payment status or method so that records match actual transactions. | • Can edit payment status and method<br>• Invalid amounts are rejected<br>• Report totals update correctly | **Ansungay** |
| **Delete** | As the business owner, I want to remove incorrect entries after confirmation so that reports stay accurate. | • Requires confirmation before deletion<br>• Does not affect original order<br>• List updates correctly after removal | **Ansungay** |

---
## 🖥️ SCREENS & STATES
### Full Screen Inventory
| Screen Type | Screens |
|---|---|
| **List / Index** | Menu List, Orders List, Customers List, Sales List |
| **Detail** | Menu Item Detail, Order Detail, Customer Profile Detail, Sale Record Detail |
| **Create Form** | Add Menu Item, Place New Order, Register Customer, Log New Sale |
| **Edit Form** | Edit Menu Item, Edit Order, Edit Customer Profile, Edit Sale Record |

### Standard States
- **Normal State**: Displays data and all functional buttons
- **Empty State**: “No records found — add your first entry to get started”
- **Error State**: “Action failed — check your input or connection and try again”
- **Delete Confirmation**: “Are you sure you want to delete this record? This cannot be undone.” — Yes / Cancel

---
## 📑 PART 2 — FULL WIREFRAME SET
*(Designers now match your team)*
### Low‑Fidelity ASCII Sketches

#### 📦 Menu Items
**Menu List | Read (List) | Designer: Enclonar**
