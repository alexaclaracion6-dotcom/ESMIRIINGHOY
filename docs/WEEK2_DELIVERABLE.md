# Project: Maramag Home Food Pre‑Order Manager
## Week 2 – Backlog, Acceptance Criteria, Screens & States

---
## Task 1 & 2 – CRUD User Stories + Acceptance Criteria + Owners

### 📦 Menu Items
| Operation | User Story | Acceptance Criteria | Owner |
|---|---|---|---|
| **Create** | As the business owner, I want to add new menu items so that customers can see available food options. | • Required fields cannot be empty<br>• Price and stock accept only positive values<br>• New item appears in the menu list after saving | Member 1 |
| **Read (List)** | As a customer or owner, I want to view the full menu list so that I can browse all offerings at a glance. | • Shows all active items sorted by category<br>• Displays name, price, and available stock<br>• Loads without errors | Member 2 |
| **Read (Detail)** | As a customer or owner, I want to view a single item’s full details so that I know all info before ordering. | • Shows complete description, price, and stock<br>• Matches exactly the selected record<br>• Has a “Back to list” button | Member 2 |
| **Update** | As the business owner, I want to edit menu details or adjust stock so that information stays accurate. | • Only existing items can be edited<br>• Invalid values are rejected<br>• Changes reflect immediately after saving | Member 1 |
| **Delete** | As the business owner, I want to remove discontinued items after confirming so that the menu stays up‑to‑date. | • Shows “Are you sure?” prompt first<br>• Cancels if user selects No<br>• Item is removed only after Yes confirmation | Member 3 |

---

### 🧾 Customer Orders
| Operation | User Story | Acceptance Criteria | Owner |
|---|---|---|---|
| **Create** | As a customer, I want to submit a new pre‑order so that my request is recorded for preparation. | • Requires customer details, items, and schedule<br>• Total amount calculates automatically<br>• Shows order number confirmation | Member 4 |
| **Read (List)** | As the business owner, I want to see all orders in one list so that I can track them efficiently. | • Lists orders with customer, total, and status<br>• Can filter by status<br>• Sorted newest first | Member 3 |
| **Read (Detail)** | As owner or customer, I want to open a single order so that I see all items and status. | • Shows full item breakdown and customer info<br>• Displays correct total and delivery status<br>• Matches the selected order ID | Member 3 |
| **Update** | As the business owner, I want to adjust order items or status so that changes are reflected correctly. | • Can update items, quantity, or status<br>• Total recalculates automatically<br>• Updated info appears in the list | Member 4 |
| **Delete** | As the business owner, I want to cancel an order after confirmation so that mistakes are avoided. | • Requires explicit confirmation<br>• Returns stock to menu if cancelled<br>• Order is marked cancelled or removed | Member 5 |

---

### 👤 Customer Profiles
| Operation | User Story | Acceptance Criteria | Owner |
|---|---|---|---|
| **Create** | As a customer, I want to save my details so that I don’t re‑enter them every time. | • Saves name, contact, and address<br>• Validates phone number format<br>• Profile links to future orders | Member 4 |
| **Read (List)** | As the business owner, I want to view all registered customers so that I can manage repeat orders easily. | • Lists all customers with contact info<br>• Searchable by name or number<br>• Shows total orders per customer | Member 2 |
| **Read (Detail)** | As owner or customer, I want to view a profile so that I see contact details and order history. | • Shows full customer information<br>• Displays linked order history<br>• Matches the correct profile ID | Member 2 |
| **Update** | As owner or customer, I want to edit profile details so that contact info stays correct. | • Can change all saved fields<br>• Updates immediately after saving<br>• No duplicate entries created | Member 4 |
| **Delete** | As the business owner, I want to remove inactive profiles after confirmation so that records stay clean. | • Shows confirmation prompt<br>• Does not delete linked orders<br>• Profile removed only after confirmation | Member 5 |

---

### 💰 Sales Records
| Operation | User Story | Acceptance Criteria | Owner |
|---|---|---|---|
| **Create** | As the business owner, I want to log a sale for every completed order so that payments are tracked. | • Links to an existing order<br>• Records amount, method, and status<br>• Auto‑saves transaction date | Member 5 |
| **Read (List)** | As the business owner, I want to view all sales so that I can see daily and total earnings. | • Lists sales with date, amount, and method<br>• Can filter by date or payment status<br>• Shows overall total at the bottom | Member 1 |
| **Read (Detail)** | As the business owner, I want to view a single sale record so that I verify payment details. | • Shows full transaction details<br>• Matches linked order reference<br>• Displays accurate figures | Member 1 |
| **Update** | As the business owner, I want to correct payment status or method so that records match actual transactions. | • Can edit payment status and method<br>• Invalid amounts are rejected<br>• Report totals update correctly | Member 5 |
| **Delete** | As the business owner, I want to remove incorrect entries after confirmation so that reports stay accurate. | • Requires confirmation before deletion<br>• Does not affect original order<br>• List updates correctly after removal | Member 3 |

---
## Task 3 – Screens & States

### 🖥️ Full Screen List
| Screen Type | Screens |
|---|---|
| **List / Index** | Menu List, Orders List, Customers List, Sales List |
| **Detail** | Menu Item Detail, Order Detail, Customer Profile Detail, Sale Record Detail |
| **Create Form** | Add Menu Item, Place New Order, Register Customer, Log New Sale |
| **Edit Form** | Edit Menu Item, Edit Order, Edit Customer Profile, Edit Sale Record |

### 📑 Standard States for Every Screen
- **Normal State**: Displays data and all functional buttons
- **Empty State**: Friendly message: *“No records found — add your first entry to get started”*
- **Error State**: Clear alert: *“Action failed — check your input or connection and try again”*
- **Delete Confirmation**: Prompt: *“Are you sure you want to delete this record? This cannot be undone.”* — **Yes** / **Cancel** buttons
