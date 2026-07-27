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

import streamlit as st
import sqlite3
import pandas as pd
from datetime import datetime

# --------------------------
# ⚙️ Page Config
# --------------------------
st.set_page_config(page_title="ESMIRIINGHOY", layout="wide")
st.title("🍽️ ESMIRIINGHOY — Maramag Home Food Pre‑Order Manager")
st.markdown("*Simple CRUD tool for local home‑based food sellers*")

# --------------------------
# 🗄️ Database Initialization
# --------------------------
def init_db():
    conn = sqlite3.connect("esmiriinghoy.db")
    c = conn.cursor()

    # Menu Items
    c.execute('''CREATE TABLE IF NOT EXISTS menu_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        category TEXT NOT NULL,
        price REAL NOT NULL,
        stock_quantity INTEGER NOT NULL DEFAULT 0,
        status TEXT NOT NULL
    )''')

    # Customer Profiles
    c.execute('''CREATE TABLE IF NOT EXISTS customer_profiles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        contact_number TEXT NOT NULL,
        preferences TEXT,
        total_orders INTEGER DEFAULT 0
    )''')

    # Customer Orders
    c.execute('''CREATE TABLE IF NOT EXISTS customer_orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_id INTEGER NOT NULL,
        order_number TEXT UNIQUE NOT NULL,
        items TEXT NOT NULL,
        total_amount REAL NOT NULL,
        pickup_datetime TEXT NOT NULL,
        payment_status TEXT NOT NULL,
        order_status TEXT NOT NULL,
        FOREIGN KEY (customer_id) REFERENCES customer_profiles(id)
    )''')

    # Sales Records
    c.execute('''CREATE TABLE IF NOT EXISTS sales_records (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        transaction_date TEXT NOT NULL,
        total_received REAL NOT NULL,
        payment_method TEXT NOT NULL,
        FOREIGN KEY (order_id) REFERENCES customer_orders(id)
    )''')

    conn.commit()
    conn.close()

init_db()

# --------------------------
# 📦 Database Helpers
# --------------------------
def run_query(query, params=(), fetch=False):
    conn = sqlite3.connect("esmiriinghoy.db")
    c = conn.cursor()
    c.execute(query, params)
    res = c.fetchall() if fetch else None
    conn.commit()
    conn.close()
    return res

# --------------------------
# 🧭 Navigation Tabs
# --------------------------
tab_menu, tab_orders, tab_customers, tab_sales = st.tabs([
    "📋 Menu Items", "🛒 Orders", "👤 Customers", "💰 Sales"
])

# ==========================
# TAB 1: MENU ITEMS
# ==========================
with tab_menu:
    st.header("Manage Menu & Stock")
    with st.form("add_menu"):
        c1,c2,c3 = st.columns(3)
        name = c1.text_input("Item Name")
        desc = c2.text_input("Description")
        cat = c3.text_input("Category (e.g. Viand, Drink)")
        price = c1.number_input("Price (PHP)", 0.0)
        stock = c2.number_input("Stock Quantity", 0)
        status = c3.selectbox("Status", ["Available", "Low Stock", "Unavailable"])
        if st.form_submit_button("Add Item"):
            run_query("INSERT INTO menu_items VALUES (NULL,?,?,?,?,?,?)",
                      (name,desc,cat,price,stock,status))
            st.success("Menu item added!")

    st.subheader("Menu List")
    menu = run_query("SELECT * FROM menu_items", fetch=True)
    if menu:
        df_menu = pd.DataFrame(menu, columns=["ID","Name","Description","Category","Price","Stock","Status"])
        st.dataframe(df_menu, use_container_width=True)

        sel = st.selectbox("Select to Edit/Delete", [f"{m[0]} - {m[1]}" for m in menu])
        mid = int(sel.split(" - ")[0])
        itm = next(m for m in menu if m[0]==mid)
        with st.form("upd_menu"):
            u_name = st.text_input("Name", itm[1])
            u_desc = st.text_input("Desc", itm[2])
            u_cat = st.text_input("Category", itm[3])
            u_price = st.number_input("Price", value=itm[4])
            u_stock = st.number_input("Stock", value=itm[5])
            u_stat = st.selectbox("Status", ["Available","Low Stock","Unavailable"],
                                  index=["Available","Low Stock","Unavailable"].index(itm[6]))
            if st.form_submit_button("Update"):
                run_query("UPDATE menu_items SET name=?,description=?,category=?,price=?,stock_quantity=?,status=? WHERE id=?",
                          (u_name,u_desc,u_cat,u_price,u_stock,u_stat,mid))
                st.success("Updated!")
                st.experimental_rerun()
            if st.form_submit_button("Delete"):
                run_query("DELETE FROM menu_items WHERE id=?", (mid,))
                st.warning("Deleted!")
                st.experimental_rerun()
    else:
        st.info("No menu items yet.")

# ==========================
# TAB 2: CUSTOMER ORDERS
# ==========================
with tab_orders:
    st.header("Manage Customer Orders")
    with st.form("add_order"):
        c1,c2 = st.columns(2)
        cust_id = c1.number_input("Customer ID", min_value=1)
        ord_num = c2.text_input("Order No. (e.g. ORD-20260727-001)")
        items = st.text_area("Ordered Items & Qty")
        total = c1.number_input("Total Amount (PHP)", 0.0)
        p_date = c2.date_input("Pickup Date")
        p_time = c2.time_input("Pickup Time")
        pay_stat = c1.selectbox("Payment Status", ["Pending","Partial","Paid","Refunded"])
        ord_stat = c2.selectbox("Order Status", ["New","Confirmed","Preparing","Ready for Pickup","Completed","Cancelled"])
        if st.form_submit_button("Save Order"):
            pickup = datetime.combine(p_date,p_time).strftime("%Y-%m-%d %H:%M")
            try:
                run_query("INSERT INTO customer_orders VALUES (NULL,?,?,?,?,?,?,?)",
                          (cust_id,ord_num,items,total,pickup,pay_stat,ord_stat))
                st.success("Order saved!")
            except Exception as e:
                st.error(f"Error: {e}")

    st.subheader("All Orders")
    orders = run_query("SELECT * FROM customer_orders ORDER BY pickup_datetime", fetch=True)
    if orders:
        df_ord = pd.DataFrame(orders, columns=["ID","CustID","OrderNo","Items","Total","Pickup","Payment","Status"])
        st.dataframe(df_ord, use_container_width=True)

        sel_o = st.selectbox("Select Order", [f"{o[0]} | {o[2]}" for o in orders])
        oid = int(sel_o.split(" | ")[0])
        odat = next(o for o in orders if o[0]==oid)
        with st.form("upd_order"):
            uc_id = st.number_input("Customer ID", value=odat[1])
            uc_on = st.text_input("Order No.", odat[2])
            uc_it = st.text_area("Items", odat[3])
            uc_tt = st.number_input("Total", value=odat[4])
            uc_pk = st.text_input("Pickup", odat[5])
            uc_ps = st.selectbox("Payment", ["Pending","Partial","Paid","Refunded"],
                                 index=["Pending","Partial","Paid","Refunded"].index(odat[6]))
            uc_os = st.selectbox("Status", ["New","Confirmed","Preparing","Ready for Pickup","Completed","Cancelled"],
                                 index=["New","Confirmed","Preparing","Ready for Pickup","Completed","Cancelled"].index(odat[7]))
            if st.form_submit_button("Update Order"):
                run_query("UPDATE customer_orders SET customer_id=?,order_number=?,items=?,total_amount=?,pickup_datetime=?,payment_status=?,order_status=? WHERE id=?",
                          (uc_id,uc_on,uc_it,uc_tt,uc_pk,uc_ps,uc_os,oid))
                st.success("Updated!")
                st.experimental_rerun()
            if st.form_submit_button("Delete Order"):
                run_query("DELETE FROM customer_orders WHERE id=?", (oid,))
                st.warning("Deleted!")
                st.experimental_rerun()
    else:
        st.info("No orders yet.")

# ==========================
# TAB 3: CUSTOMER PROFILES
# ==========================
with tab_customers:
    st.header("Customer Profiles")
    with st.form("add_cust"):
        name = st.text_input("Full Name")
        contact = st.text_input("Contact Number")
        pref = st.text_area("Preferences / Notes")
        if st.form_submit_button("Add Customer"):
            run_query("INSERT INTO customer_profiles VALUES (NULL,?,?,?,0)", (name,contact,pref))
            st.success("Customer added!")

    st.subheader("Customer List")
    custs = run_query("SELECT * FROM customer_profiles", fetch=True)
    if custs:
        df_cust = pd.DataFrame(custs, columns=["ID","Full Name","Contact","Preferences","Total Orders"])
        st.dataframe(df_cust, use_container_width=True)

        sel_c = st.selectbox("Select Customer", [f"{c[0]} - {c[1]}" for c in custs])
        cid = int(sel_c.split(" - ")[0])
        cdat = next(c for c in custs if c[0]==cid)
        with st.form("upd_cust"):
            uname = st.text_input("Name", cdat[1])
            ucont = st.text_input("Contact", cdat[2])
            upref = st.text_area("Preferences", cdat[3])
            if st.form_submit_button("Update"):
                run_query("UPDATE customer_profiles SET full_name=?,contact_number=?,preferences=? WHERE id=?",
                          (uname,ucont,upref,cid))
                st.success("Updated!")
                st.experimental_rerun()
            if st.form_submit_button("Delete"):
                run_query("DELETE FROM customer_profiles WHERE id=?", (cid,))
                st.warning("Deleted!")
                st.experimental_rerun()
    else:
        st.info("No customers yet.")

# ==========================
# TAB 4: SALES RECORDS
# ==========================
with tab_sales:
    st.header("Sales Records & Revenue")
    with st.form("add_sale"):
        ord_id = st.number_input("Linked Order ID", min_value=1)
        date = st.date_input("Transaction Date")
        received = st.number_input("Total Received (PHP)", 0.0)
        method = st.selectbox("Payment Method", ["Cash","GCash","Bank Transfer","Other"])
        if st.form_submit_button("Log Sale"):
            run_query("INSERT INTO sales_records VALUES (NULL,?,?,?,?)",
                      (ord_id, str(date), received, method))
            st.success("Sale recorded!")

    st.subheader("Sales Log")
    sales = run_query("SELECT * FROM sales_records ORDER BY transaction_date DESC", fetch=True)
    if sales:
        df_sale = pd.DataFrame(sales, columns=["ID","OrderID","Date","Amount Received","Method"])
        st.dataframe(df_sale, use_container_width=True)
        total_rev = sum(s[3] for s in sales)
        st.metric("Total Revenue", f"₱ {total_rev:,.2f}")
    else:
        st.info("No sales recorded yet.")

# --------------------------
# ℹ️ Footer
# --------------------------
st.markdown("---")
st.caption("ESMIRIINGHOY | Maramag Home Food Pre‑Order Manager | Built with Python + Streamlit + SQLite")
