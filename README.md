# ESMIRIINGHOY
# Maramag Home Food Pre‑Order Manager

## 📌 Project Overview
A simple CRUD web app for small home‑based food sellers in Maramag to manage menu items, customer orders, client profiles, and daily sales — replacing handwritten notes and scattered chat messages.

## 🎯 Problem Statement
Small home‑based food sellers currently track orders, stock, and customer details using handwritten notes or scattered chat messages — leading to lost orders, wrong stock counts, missed pickups, and no clear sales record.

# Team Roster & Starter Roles
| Member Name | Starting Role | Primary Responsibility |
|---|---|---|
| [Aclaracion] | Repo Lead | Branch protection, merge rules, repo hygiene |
| [Enclonar] | Board Lead | Task board setup, ticket tracking, status updates |
| [Ansungay] | Scribe | Meeting notes, decisions, AI use log, retrospectives |
| [Enclonar] | Builder 1 | Feature development, code reviews |
| [Ansungay] | Builder 2 | Feature development, code reviews |

## Core CRUD Entities & Record Types
# Project: Maramag Home Food Pre‑Order Manager

| Entity / Record Type | Key Fields | CRUD Operations | Purpose |
|---|---|---|---|
| **Menu Items** | id, name, description, category, price, stock_quantity, status | Create, Read, Update, Delete | Manage food offerings and available stock |
| **Customer Orders** | id, customer_id, order_number, items, total_amount, pickup_datetime, payment_status, order_status | Create, Read, Update, Delete | Track all pre‑orders and fulfillment status |
| **Customer Profiles** | id, full_name, contact_number, preferences, total_orders | Create, Read, Update, Delete | Store customer details and order history |
| **Sales Records** | id, order_id, transaction_date, total_received, payment_method | Create, Read, Update, Delete | Log completed sales and view revenue |

## 🛠 Tech Stack

> 💡 *Note: This project scaffolding is configured for a Python/Streamlit ecosystem (or your team's chosen alternative).*

### Prerequisites
*   Python 3.10+
*   Git

### Local Installation
1. Clone the repository:
   ```bash
   # Everyone clones
git clone https://github.com/OWNER/REPO.git
cd REPO

# Maramag Home Food Pre‑Order Manager
A CRUD app for local home‑based food sellers to manage menu items, orders, customers, and sales.

  # Customer Records


