# Experiment 11

## Title

Creating REST API using Spring Boot

## Problem Statement

Create a Student Management REST API that returns a welcome message, returns student details using a GET request, and accepts student data using a POST request.

## Endpoints

| Method | URL | Purpose |
| --- | --- | --- |
| GET | `http://localhost:8080/` | Welcome message |
| GET | `http://localhost:8080/student` | Get stored student details |
| POST | `http://localhost:8080/student` | Store student details |

## Sample POST Body

```json
{
  "id": 101,
  "name": "Rahul Sharma",
  "course": "B.Tech CSE"
}
```

## How to Run

```bash
mvn spring-boot:run
```

Open `http://localhost:8080/` in a browser or test the endpoints using Postman.
