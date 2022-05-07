const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const envelopesRouter = require('./routes/envelopes.route');
const transactionsRouter = require('./routes/transactions.route');

dotenv.config({ path: './config/.env' });

const app = express();


const PORT = process.env.PORT;

app.use(logger("tiny"));
app.use(express.json());

app.use('/envelopes',envelopesRouter);
app.use('/transactions',transactionsRouter);

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}...`);
});
