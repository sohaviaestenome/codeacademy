const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minions.router');
const ideasRouter = require('./ideas.router');
const meetingsRouter = require('./meetings.router');

apiRouter.use('/minions',minionsRouter);
apiRouter.use('/minions/:minionid',minionsRouter);

apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/ideas/:ideaid', ideasRouter);

apiRouter.use('/meetings', meetingsRouter);
apiRouter.use('/meetings/:meetingsid', meetingsRouter);


module.exports = apiRouter;
