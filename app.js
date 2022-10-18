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


connection();


app.listen(3000,()=>{
    console.log("Server is running");
})