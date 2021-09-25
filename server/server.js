const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

(
    async () => {
        try {
            await mongoose.connect(process.env.db_url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            console.log('connected to the database');      
        } catch (error) {
            console.log(error);
        }
    }
)();

app.listen(port, () => {
    console.log(`listening on port : ${port}`);
})