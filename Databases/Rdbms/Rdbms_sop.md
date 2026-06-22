# Relational Database Management System (RDBMS)

**Date:** 08-10-2025

---

# What is RDBMS?

**RDBMS (Relational Database Management System)** is a software system used to create, store, manage, retrieve, and manipulate data that is organized in the form of **tables (relations)**.

An RDBMS manages data in multiple tables and establishes relationships between them using **Primary Keys** and **Foreign Keys**.

The term **Relational** comes from the fact that tables can be related to one another through common columns.

---

# Definition

> An RDBMS is a database management system that stores data in structured tables consisting of rows and columns and uses relationships between tables to efficiently organize and manage data.

---

# Basic Terminology

## Table (Relation)

A table is a collection of related data organized into rows and columns.

### Example

| Student_ID | Name  | Class |
| ---------- | ----- | ----- |
| 1          | Alice | 10    |
| 2          | Bob   | 10    |

---

## Row (Record)

A row represents a single entry in a table.

### Example

| Student_ID | Name  | Class |
| ---------- | ----- | ----- |
| 1          | Alice | 10    |

The above row represents one student record.

---

## Column (Attribute)

A column represents a specific property of the data.

### Example

| Student_ID | Name | Class |
| ---------- | ---- | ----- |

Here:

* Student_ID
* Name
* Class

are columns.

---

# RDBMS vs DBMS

| Feature            | DBMS                       | RDBMS                             |
| ------------------ | -------------------------- | --------------------------------- |
| Structure          | Stores data as files       | Stores data in tables (relations) |
| Relationships      | No table relationships     | Tables are related through keys   |
| Data Redundancy    | Higher                     | Reduced through normalization     |
| Query Language     | No standard query language | Uses SQL                          |
| Multi-User Support | Limited                    | Strong support                    |
| Data Integrity     | Basic                      | Strong integrity enforcement      |
| Security           | Basic                      | Advanced access control           |
| Examples           | MS Access, File Systems    | MySQL, PostgreSQL, Oracle         |

---

# Main Features of an RDBMS

| Feature             | Description                                    |
| ------------------- | ---------------------------------------------- |
| Tables (Relations)  | Data is stored in rows and columns             |
| Relationships       | Multiple tables can be connected using keys    |
| SQL Support         | Uses SQL (Structured Query Language)           |
| Data Integrity      | Ensures data accuracy through constraints      |
| Concurrency Control | Supports multiple users simultaneously         |
| Security            | Authentication, authorization, and permissions |
| Normalization       | Reduces redundancy and improves efficiency     |
| Transactions        | Supports reliable transaction processing       |
| Backup & Recovery   | Protects data from failures                    |

---

# Keys in RDBMS

Keys are used to uniquely identify records and establish relationships between tables.

---

## Primary Key (PK)

A Primary Key uniquely identifies each record in a table.

### Characteristics

* Unique value
* Cannot be NULL
* One Primary Key per table

### Example

| Student_ID | Name  |
| ---------- | ----- |
| 1          | Alice |
| 2          | Bob   |

Here:

`Student_ID` is the Primary Key.

---

## Foreign Key (FK)

A Foreign Key creates a relationship between two tables.

It references the Primary Key of another table.

### Purpose

* Maintains referential integrity
* Connects related tables

---

# ACID Properties

RDBMS ensures data reliability and consistency through **ACID Properties**.

---

## A — Atomicity

A transaction is completed entirely or not at all.

### Example

If a money transfer involves:

* Deduct ₹1000 from Account A
* Add ₹1000 to Account B

If the second operation fails, the first operation is rolled back.

---

## C — Consistency

A transaction moves the database from one valid state to another valid state.

### Example

Rules and constraints remain satisfied before and after execution.

---

## I — Isolation

Simultaneous transactions do not interfere with one another.

### Example

Two users updating different records can work independently.

---

## D — Durability

Once a transaction is committed, the data remains permanently stored.

### Example

Even after a system crash, committed data is preserved.

---

# Popular RDBMS Software

| RDBMS                | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| MySQL                | Most popular open-source RDBMS used in web applications                         |
| PostgreSQL           | Advanced open-source RDBMS with enterprise-level features                       |
| SQLite               | Lightweight, file-based RDBMS commonly used in mobile and embedded applications |
| Oracle Database      | Enterprise-grade commercial RDBMS                                               |
| Microsoft SQL Server | Microsoft's enterprise-level relational database system                         |
| MariaDB              | Community-driven fork of MySQL with enhanced features                           |

---

# Example of a Relational Database

Consider two tables:

---

## Students Table

| Student_ID | Name  | Class |
| ---------- | ----- | ----- |
| 1          | Alice | 10    |
| 2          | Bob   | 10    |

---

## Marks Table

| Mark_ID | Student_ID | Subject | Marks |
| ------- | ---------- | ------- | ----- |
| 1       | 1          | Math    | 88    |
| 2       | 2          | Science | 92    |

---

# Relationship Between Tables

### Observations

* Both tables are connected through `Student_ID`.
* `Student_ID` in the **Students** table is the **Primary Key**.
* `Student_ID` in the **Marks** table is the **Foreign Key**.
* This relationship allows data from multiple tables to be linked together.

### Visual Representation

```text
Students Table
--------------
Student_ID (PK)
Name
Class

        |
        |
        V

Marks Table
-----------
Mark_ID (PK)
Student_ID (FK)
Subject
Marks
```

---

# Advantages of RDBMS

* Structured and organized data storage
* Reduced data redundancy
* Improved data consistency
* Strong security mechanisms
* Easy data retrieval using SQL
* Supports complex relationships
* Reliable transaction management
* Scalable for enterprise applications

---

# Common Real-World Applications

## Banking Systems

* Account Management
* Transactions
* Loans

---

## E-Commerce Platforms

* Customers
* Orders
* Payments
* Inventory

---

## Educational Systems

* Students
* Courses
* Attendance
* Marks

---

## Hospital Management Systems

* Patients
* Doctors
* Appointments
* Billing

---

# Summary

An **RDBMS (Relational Database Management System)** stores data in structured tables and manages relationships between those tables using keys.

Key concepts include:

* Tables
* Rows
* Columns
* Primary Keys
* Foreign Keys
* SQL
* Relationships
* ACID Properties

RDBMS forms the foundation of modern applications such as banking systems, e-commerce platforms, ERP systems, healthcare systems, and enterprise software.
