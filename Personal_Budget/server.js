const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const app = express();

dotenv.config();

const envelopesRouter = require('./routes/envelopes.route');

const PORT = process.env.PORT;

app.use(logger("tiny"));
app.use(express.json());

app.use('/envelopes', envelopesRouter);


app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}...`);
});