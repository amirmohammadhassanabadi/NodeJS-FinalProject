# Node.js Fastify Project with MongoDB

This project is a **Node.js** application built with the **Fastify** framework and **MongoDB** as the database.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js (verify with `npm -v`)
- **MongoDB**:
  - **Option 1**: [Install MongoDB locally](https://www.mongodb.com/try/download/community).
  - **Option 2**: Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/amirmohammadhassanabadi/NodeJS-FinalProject.git
   cd NodeJS-FinalProject
   ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up MongoDB:**
    - **For local MongoDB**, ensure MongoDB is running:
        ```bash
        mongod
        ```
    - **For MongoDB Atlas**, create a cluster and obtain your connection string.

## Running the Application

To start the application, follow these steps:

1. **Run the server in development mode**:
   Use the following command for live reload (requires `nodemon` to be installed):
   ```bash
   npm run dev
   ```
2. **Run the server in roduction mode**:
   Use the following command for starting the app
   ```bash
   npm run start
   ```

3. **Access the server**: the server will run on:
   ```bash
   http://localhost:3001
   ```

## Test the API
Use tools like Postman or cURL to test your API endpoints.

Visit (e.g., http://localhost:3000) in a API client.

## Endpoints and Usage

### 1. **Add Category**
**Endpoint:** `POST     /add-category`  
**Description:** Adds a new category to the database.  
**Request Body:**
```json
{
  "title": "Electronics",
  "description": "Devices and gadgets",
  "subCategory": ["Phones", "Laptops"]
}
```

**Response:**

* **200 OK:** Category added successfully.
* **400 Bad Request:** Request body is empty or missing required fields.
* **409 Conflict:** Category already exists.
* **500 Internal Server Error:** Indicates an unexpected error occurred on the server