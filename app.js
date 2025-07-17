import * as dotenv from 'dotenv' 
dotenv.config()

import express from 'express';
import  connection  from './DB/connection.js';
import * as allRoutes from './modules/index.route.js'
const app=express();


app.use(express.json());
app.use('/api/v1/user',allRoutes.userRouter);
app.use('/api/v1/auth',allRoutes.authRouter);
app.use('/api/v1/post',allRoutes.postRouter);
app.use('/api/v1/comment',allRoutes.commentRouter);
app.use("*", (req, res, next) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Blog API</title>
      <style>
        * {
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .card {
          background: white;
          padding: 40px 30px;
          border-radius: 16px;
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 500px;
        }
        h1 {
          color: #333;
          margin-bottom: 20px;
          font-size: 28px;
        }
        p {
          font-size: 16px;
          color: #555;
          margin-bottom: 30px;
        }
        .btn {
          background: #007BFF;
          color: white;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: bold;
          transition: background 0.3s ease;
        }
        .btn:hover {
          background: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>📝 Welcome to the Blog API</h1>
        <p>This API allows you to manage blog posts, comments, and users.<br>Explore the endpoints to get started.</p>
        <a href="https://github.com/maryam958/BlogAPI" class="btn" target="_blank">
        📘 View README on GitHub
        </a>
      </div>
    </body>
    </html>
  `);
});


connection();


app.listen(3000,()=>{
    console.log("Server is running");
})