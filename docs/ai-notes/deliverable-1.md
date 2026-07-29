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
