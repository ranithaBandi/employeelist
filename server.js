import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import morgan from 'morgan';
import mongoose from 'mongoose';
import employeeRouter from './routes/employeeRouter'

dotenv.config();
const app = express();

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routes coonection
app.use('/api',employeeRouter)

//db
mongoose.connect(process.env.DATABASE)
.then(()=>console.log("Database connected"))
.catch((err)=>console.error("Database connection failed",err))

//listen
const port  = process.env.PORT || 8000;
app.listen(port,()=>console.log(`server is running on ${port}`))

