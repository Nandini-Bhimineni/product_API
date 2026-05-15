

---

```md
# Product API (Node.js + Express + MongoDB + Multer)

##  Overview

This project is a RESTful API built using Node.js, Express, and MongoDB (Mongoose).  
It allows users to create products with image upload functionality and retrieve product data from the database.

The project follows MVC architecture (Model–Controller–Routes) for clean and scalable structure.

---

##  Features

- Create product with image upload (Multer)
- Store product data in MongoDB
- Fetch all products from database
- REST API using Express.js
- MVC architecture
- Environment variable configuration (.env)

---

##  Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- dotenv

---

## Project Structure

```

project-folder/
│
├── config/
│   ├── db.js
│   └── multer.js
│
├── controllers/
│   └── productController.js
│
├── models/
│   └── product.js
│
├── routes/
│   └── productRoutes.js
│
├── uploads/
├── .env
├── server.js
├── package.json

````

---

##  Installation

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd project-folder
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Install required packages

```bash
npm install express mongoose multer dotenv nodemon
```

---

### 4. Create `.env` file

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/wardrobe
```



---

### 5. Run the server

```bash
node server.js
```



---

##  API Endpoints

### ➤ Create Product (with Image Upload)

**POST**
```

/api/products/add

````

### Body (form-data):

| Key         | Type | Value        |
| ----------- | ---- | ------------ |
| productName | Text | Shoes        |
| brand       | Text | Nike         |
| category    | Text | Sports       |
| price       | Text | 2999         |
| stock       | Text | 5            |
| image       | File | Upload image |

---

### ➤ Get All Products

**GET**

```

/api/products

```

---

##  Architecture

* Model → Defines schema
* Controller → Handles logic
* Routes → API endpoints
* Config → Database + Multer setup

---

## Functionality

* Stores product data in MongoDB
* Uploads images using Multer
* Saves image filename in database
* Returns product data via API

---

##  Author

Nandini Bhimineni

---



