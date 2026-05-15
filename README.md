

---

```md
#   Product API (Node.js + Express + MongoDB + Multer)

## 📌 Overview

This project is a RESTful API built using Node.js, Express, and MongoDB (Mongoose).  
It allows users to create products with image upload functionality using Multer and retrieve product data from the database.

The project follows MVC architecture (Model–Controller–Routes) for clean backend structure.

---

## 🚀 Features

- Create product with image upload (Multer)
- Store product data in MongoDB
- Fetch all products from database
- REST API using Express.js
- MVC architecture
- Tested using Postman

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- dotenv

---

## 📤 Image Upload (Multer)

- Images uploaded using Multer middleware
- Stored inside `/uploads` folder
- Image filename saved in MongoDB
- Images can be accessed via:

```

[http://localhost:5000/uploads/filename.jpg](http://localhost:5000/uploads/filename.jpg)

```

---

## 📡 API Endpoints

### ➤ Add Product

**POST**
```

/api/products/add

```

**Body (form-data):**

| Key         | Type | Description      |
|-------------|------|------------------|
| productName | Text | Product name     |
| brand       | Text | Brand name       |
| category    | Text | Category         |
| price       | Text | Price            |
| stock       | Text | Stock quantity   |
| image       | File | Product image    |

---

### ➤ Get All Products

**GET**
```

/api/products

```

---

## 🧪 API Testing (Postman)

- POST API tested using form-data (including image upload)
- GET API tested to fetch all products
- Data successfully stored in MongoDB
- Image upload verified in `/uploads` folder

---

## 🧠 Project Structure

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

```

---

## 👨‍💻 Author

**Nandini Bhimineni**

---

## 📜 License

This project is for educational purposes only.
```

---



