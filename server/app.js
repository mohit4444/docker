const express=require('express');
const app =express();
const mongoose=require('mongoose');
require('dotenv/config');
const bodyParser=require('body-parser');
const cors=require('cors');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import routes
const postsRoute =require('./routes/tasks');
app.use('/tasks',postsRoute);


//Connect to DB
mongoose.connect('mongodb://mongo:27017/local', { useUnifiedTopology: true },()=>{
    console.log('db connected');
});

app.listen(5000,()=>{
    console.log('server started');
});