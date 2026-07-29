ID	User Story	Acceptance Criteria	Suggested Owner
M‑01	As an Admin, I want to create new menu items so that customers can view and order available food options.	1. Form accepts name, description, price, category, availability status2. Required fields are validated before saving3. Saved item appears in the menu list immediately	Member 1
M‑02	As an Admin/Customer, I want to view a list of all menu items so that I can quickly browse what is offered.	1. Shows name, price, category, availability2. Can search/filter by name/category3. Sorted alphabetically by default	Member 2
M‑03	As an Admin/Customer, I want to view full details of a single menu item so that I can see complete information before ordering.	1. Displays all stored fields2. Clear availability indicator3. Navigation back to list	Member 3
M‑04	As an Admin, I want to update existing menu items so that I can correct details or adjust prices/availability.	1. Form pre‑fills current data2. Changes validated on save3. Updates reflect instantly	Member 4
M‑05	As an Admin, I want to delete menu items so that I can remove items no longer available.	1. Requires explicit confirmation2. Removed from all public views3. Linked pending orders flagged for review	Member 5

ID	User Story	Acceptance Criteria	Suggested Owner
O‑01	As a Customer, I want to place a new pre‑order so that my selected food is reserved.	1. Add multiple items with quantities2. Auto‑calculates total amount3. Saves with “Pending” status	Member 2
O‑02	As an Admin/Customer, I want to view a list of orders so that I can track all pre‑orders.	1. Shows order number, customer, date, total, status2. Filter/search by date/status/customer3. Sorted newest first	Member 3
O‑03	As an Admin/Customer, I want to view full order details so that I can verify items and status.	1. Full item breakdown, quantities, total2. Pickup/delivery details & notes3. Timestamped status history	Member 4
O‑04	As an Admin, I want to update order details/status so that I can adjust items or progress the order.	1. Edit quantities/add/remove items2. Update status: Pending → Confirmed → Ready → Completed/Cancelled3. Changes are logged	Member 5
O‑05	As an Admin, I want to cancel/delete orders so that I can remove invalid entries.	1. Requires confirmation prompt2. Stock counts revert automatically3. Action is recorded	Member 1

ID	User Story	Acceptance Criteria	Suggested Owner
C‑01	As a Customer/Admin, I want to register/create a customer profile so that orders are linked to my details.	1. Captures name, contact, address, pickup preference2. Unique contact validation3. Profile ready for immediate use	Member 3
C‑02	As an Admin, I want to view a list of all customers so that I can manage and contact them.	1. Shows name, contact, order count, registration date2. Search/filter by name/contact3. Sorted alphabetically	Member 4
C‑03	As a Customer/Admin, I want to view a single customer’s full profile so that I can review their details and history.	1. Displays all contact/preference data2. Shows summary of past orders3. Restricted access rule applied	Member 5
C‑04	As a Customer/Admin, I want to update profile information so that details stay current.	1. Form pre‑fills existing data2. Unique contact rule enforced3. Changes apply to future orders	Member 1
C‑05	As an Admin, I want to delete a customer profile so that I can remove duplicates/inactive accounts.	1. Confirmation warning about linked orders2. Profile removed or marked inactive3. Historical order data retained	Member 2

ID	User Story	Acceptance Criteria	Suggested Owner
S‑01	As the System/Admin, I want to automatically create a sales record when an order is completed so revenue is tracked.	1. Generated automatically on “Completed” status2. Captures order ref, date, items, total, payment method3. Read‑only for non‑admin users	Member 4
S‑02	As an Admin, I want to view a list of sales records so that I can review overall performance.	1. Shows date, order ref, total, payment type2. Filter by date range/payment method3. Displays period totals	Member 5
S‑03	As an Admin, I want to view detailed sales records so that I can verify revenue and audit transactions.	1. Full item & amount breakdown2. Links to original order & customer3. Shows payment status	Member 1
S‑04	As an Admin, I want to adjust sales records so that I can correct errors or refunds.	1. Only admin access with reason log2. Original record preserved3. Report totals update correctly	Member 2
S‑05	As an Admin, I want to archive/delete old sales records so that the system stays organized.	1. Requires admin confirmation2. Does not delete linked order/customer history3. Deletion is logged	Member 3
