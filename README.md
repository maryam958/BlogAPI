# 📝 BlogAPI

A secure and scalable RESTful API for managing posts and comments, built with Node.js (Express.js) and MongoDB. The system includes full user authentication and authorization using JWT tokens, enabling users to register, log in, create posts, and engage through comments. All endpoints are thoroughly tested using Postman to ensure reliability and performance.

---
## 🔧 Tech Stack

- **Node.js** & **Express.js** – Server-side runtime and framework

- **MongoDB** & **Mongoose** – NoSQL database and ODM

- **JWT Authentication** – Secure token-based auth system

- **RESTful API** – Standardized and scalable endpoints

- **Postman** – API testing and validation

---

## 🚀 Features

- ✍️ Post Management (CRUD) – Create, read, update, and delete blog posts

- 💬 Comment System – Users can comment on posts with proper user-post references

- 🔐 User Authentication – Secure registration and login with hashed passwords and JWT tokens

- 🧑 User Profiles – Includes user details like name, email, age, and phone

- 🔗 Relational Data Handling – Posts link to users and comments; comments link back to users and posts

- 🛡️ Access Control – Only content creators can modify or delete their posts/comments

- ⚙️ Environment Configuration – Using .env for secure and flexible setup

- 🚦 Error Handling – Consistent status codes and descriptive error messages
