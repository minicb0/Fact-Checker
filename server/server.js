const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use('/api', require('./routes/userRoute'));
app.use('/api', require('./routes/newsRoute'));
app.use('/api', require('./routes/voteRoute'));

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