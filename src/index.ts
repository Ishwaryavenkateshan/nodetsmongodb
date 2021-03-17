import mongoose from 'mongoose'
import { json } from 'body-parser';
import express from 'express';
import {userRouter} from './route/user';

const app = express()
app.use(json())
app.use(userRouter)
app.listen(2234, () => {
    console.log('server is listening on port 2234')
})

mongoose.connect('mongodb+srv://Ishwarya_98:ishu@123@cluster0.rxmod.mongodb.net/nodets?retryWrites=true&w=majority',
 {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, () => {
  console.log('Database connected')
})