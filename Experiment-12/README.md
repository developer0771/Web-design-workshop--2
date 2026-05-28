# Experiment 12

## Title

CRUD Operations using Spring Boot REST API

## Problem Statement

Create an Employee Management System REST API that adds employees, retrieves all employees, retrieves an employee by ID, updates employee details, and deletes employee records.

## Endpoints

| Method | URL | Purpose |
| --- | --- | --- |
| POST | `http://localhost:8080/employees` | Add employee |
| GET | `http://localhost:8080/employees` | Get all employees |
| GET | `http://localhost:8080/employees/{id}` | Get employee by ID |
| PUT | `http://localhost:8080/employees/{id}` | Update employee |
| DELETE | `http://localhost:8080/employees/{id}` | Delete employee |

## Sample POST Body

```json
{
  "id": 1,
  "name": "Pranshi Verma",
  "department": "IT",
  "salary": 50000
}
```

## How to Run

```bash
mvn spring-boot:run
```

Use Postman or a browser to test the endpoints. The H2 console is enabled at `http://localhost:8080/h2-console`.
