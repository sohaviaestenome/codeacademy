const express = require('express');

const app = express();
const usersRouter = require('./routes/users.routes');
require('dotenv').config();

const PORT = process.env.PORT;

app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`)
})

