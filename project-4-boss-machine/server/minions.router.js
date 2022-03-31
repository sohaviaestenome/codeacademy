const minionsRouter = require('express').Router();
const {
    getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId
} = require('./db');


minionsRouter.param('minionid',(req,res,next,id) => {
    const minion = getFromDatabaseById('minions', id);
    if(minion) {
        req.minion = minion;
        next();
    } else {
        res.status(404).send();
    }
})

minionsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});

minionsRouter.get('/:minionid', (req, res, next) => {
    res.send(req.minion);
  });

minionsRouter.post('/', (req,res,next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

minionsRouter.put('/:minionid', (req,res,next) => {
    let updatedMinionInstance = updateInstanceInDatabase('minions',req.body);
    res.send(updatedMinionInstance);
});

minionsRouter.delete('/:minionid', (req,res,next) => {
    let deletedMinion = deleteFromDatabasebyId('minions', req.params.minionid);
    if(deletedMinion) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
})





module.exports = minionsRouter;