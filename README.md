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

- ✍️ Post Management (CRUD) – Create, read, update, and delete blog posts.
  
- 💬 Comment System – Users can comment on posts with proper user-post references.
  
- 🔐 User Authentication – Secure registration and login with hashed passwords and JWT tokens.

- 🧑 User Profiles – Includes user details like name, email, age, and phone.

- 🔗 Relational Data Handling – Posts link to users and comments; comments link back to users and posts.

- 🛡️ Access Control – Only content creators can modify or delete their posts/comments.

- ⚙️ Environment Configuration – Using .env for secure and flexible setup.

- 🚦 Error Handling – Consistent status codes and descriptive error messages.

## 📁 Project Structure

```
├── DB/            # Database connection setup and seed scripts
├── config/        # Environment variables and JWT configuration
├── src/           # Application logic: models, routes, and controllers
├── app.js         # Main Express application entry point
└── package.json   # Project metadata and dependencies
```



---
## 🧪 API Testing

Use **Postman** to interact with and test the API endpoints. Below are the key endpoints along with request methods, example payloads, expected responses, and authentication details where applicable.


---

## 📘 Complete API Usage Guide
### 1. Register a New User  
- **Endpoint:** `POST /api/v1/auth/signUp`  
- **Description:** Create a new user account.  
- **Request Body (JSON):**
```json
{
    "userName": "maryam",
    "email": "maryammohamedsobhy357@gmail.com",
    "password": "Test123",
    "cPassword": "Test123"

}
```

Successful Response (201 Created):
```json
{
    "message": "Registration successful. Please check your email to confirm your account.",
    "savedUser": {
        "userName": "maryam",
        "email": "maryammohamedsobhy357@gmail.com",
        "password": "$2a$09$rRMFNFsj3zwX.PoqLCJLHO0T25qGZpCD6kwExEcd6tBa8ES1Ozqy6",
        "role": "User",
        "active": false,
        "confirmEmail": false,
       ...
    }
}


```
- Note: The user account is created but inactive until the email is confirmed.

#### ⚠️ Edge Case:
**Email Already Registered but Not Confirmed**
If a user tries to register again using the same email without confirming it first, the API responds the following Response:

Response (409 Conflict):

```json
{
  "message": "This email is already registered but not yet confirmed. Please check your inbox to confirm your email."
}
```
#### 🔗 Email Confirmation Flow

After a user successfully registers, a **confirmation email** is sent to the provided email address.  
To activate the account, the user **must click the confirmation link** in the email.

> ℹ️ **Note:**
> - The account remains **inactive** until the email is confirmed.
> - Users **cannot log in or re-register** with the same email until confirmation is completed.

#### ✅ Validation Rules
The Sign Up endpoint uses Joi validation to ensure that user input meets specific criteria before processing. If validation fails, the API responds with a clear error message.
- Validation Schema:
 ```json
  {
  "userName": "string (required) - minimum 2, maximum 20 characters",
  "email": "string (required) - must be a valid email ending with .com or .net",
  "password": "string (required) - must match a specific pattern",
  "cPassword": "string (required) - must exactly match `password`"
}
```
🔐 Password Pattern Requirements:
- Must start with an uppercase letter
- Followed by 3 to 8 lowercase letters or digits
- Examples of valid passwords:
Aabc1
Zx12

❌ If the password doesn’t match the pattern:
You will receive an error message like:
```json
{
  "message": "Not matching pattern"
}
```

#### 📷 SignUp API
![SignUp Request & Response](./imgs/signup_req_res.png)

#### 📷 Email Confirmation for Signing Up
![Email Confirmation for Signing Up](./imgs/email_confirmation.png)

[📬 Click here to open the signUp request](https://www.postman.com/graduation-space-584306/commerceapi/request/5ugm73s/commerceapi?action=share&creator=21090382&ctx=documentation)


