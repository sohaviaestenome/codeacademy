const ideasRouter = require('express').Router();
const {
    getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId
} = require('./db');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

ideasRouter.param('ideaid',(req,res,next,id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        req.idea = idea;
        next();
    } else {
        res.status(404).send();
    }
})

ideasRouter.get('/', (req,res,next) => {
    res.send(getAllFromDatabase('ideas'));
});

ideasRouter.get('/:ideaid', (req,res,next) => {
    res.send(req.idea);
});

ideasRouter.put('/:ideaid', (req,res,next) => {
    let updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedIdea);
});

ideasRouter.post('/',checkMillionDollarIdea, (req,res,next) => {
    const addedIdea = addToDatabase('ideas', req.body);
    res.status(201).send(addedIdea)
});

ideasRouter.delete('/:ideaid', (req,res,next) => {
    let deletedIdea = deleteFromDatabasebyId('ideas', req.params.ideaid);
    if (deletedIdea) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
})

module.exports = ideasRouter;