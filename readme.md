# Node.js Final Project

This project is a **Node.js** application built with the **Fastify** framework and **MongoDB** as the database.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js (verify with `npm -v`)
- **Git**: [Download Git](https://git-scm.com/downloads)
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

---

### 2. **Add Product**
**Endpoint:** `POST     /add-product`  
**Description:** Adds a new product to the database.  
**Request Body:**
```json
{
  "title": "iPhone 16",
  "description": "Latest Apple smartphone",
  "price": "999",
  "category": "Electronics"
}
```

**Response:**

* **200 OK:** Category added successfully.
* **400 Bad Request:** Request body is empty or missing required fields.
* **404 Not Found:** Category for the product not found.
* **500 Internal Server Error:** Indicates an unexpected error occurred on the server.

---

### 3. **Search Product**

**Endpoint:** `GET /search-product`  
**Description:** Searches for products by title and category.  
**Query Parameters:**

- `title`: The title of the product (case-insensitive).  
- `category`: The category of the product (case-insensitive).

**Example Request:**  
`GET /search-product?title=iphone 16&category=electronics`

**Response:**

- **200 OK:** Returns the list of matching products.  
- **400 Bad Request:** Missing query parameters.  
- **500 Internal Server Error:** An error occurred while searching.

---

### 4. **Change Category Name**

**Endpoint:** `PUT /change-category-name`  
**Description:** Updates the name of an existing category.  
**Request Body:**
```json
{
  "current": "Electronics",
  "newCategory": "Gadgets"
}
```

**Response:**

* **200 OK:** Returns the list of matching products.  
* **400 Bad Request:** Missing query parameters.  
* **404 Not Found:** Specified category not found.
* **500 Internal Server Error:** An error occurred while searching.

---

## Conclusion

This project provides a simple yet effective way to manage categories and products. Feel free to extend or modify the API to suit your requirements. If you encounter any issues or have suggestions for improvement, contributions are welcome!

---

## Contributions and Feedback

We welcome contributions! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. For any feedback, questions, or issues, please open an issue in the repository or contact us directly.

---