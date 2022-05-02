const dbEnvelopes = require('../db');
const router = require('../routes/envelopes.route');
const { createId, findById, deleteById } = require('../helpers/db-helpers');



exports.getEnvelopes = async (req, res) => {
    try {
        const envelopes = await dbEnvelopes;
        res.status(200).send(envelopes);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.addEnvelope = async (req, res) => {
    try {
      const { title, budget }  = req.body;
      // mock retrieval of a real DB with async/await
      const envelopes = await dbEnvelopes;
      const newId = createId(envelopes);
      const newEnvelope = {
        id: newId,
        title,
        budget,
      };
      envelopes.push(newEnvelope);
      res.status(201).send(newEnvelope);
    } catch (err) {
      res.status(500).send(err);
    }
  };



