const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");

dotenv.config({ path: './config/.env' });

const app = express();

// const envelopesRouter = require('./routes/envelopes.route');

const PORT = process.env.PORT;

app.use(logger("tiny"));
app.use(express.json());

app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}...`);
});
