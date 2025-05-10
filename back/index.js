require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const userRouter = require('./components/user/user-router')
// const now = require('./now');

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'https://1jfqnl4w-5173.euw.devtunnels.ms',
        'https://everbetai.com',
    ],
    credentials: true
}));

app.use('/user', userRouter);


const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)

        app.listen(PORT, () => {
            logger.write(`Server started on PORT = ${PORT}`)
        })

    } catch (e) {
        console.log(e);
    }
}

start()
