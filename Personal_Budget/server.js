const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(logger("dev"));
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Yo MOFO");
})

app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}...`);
});