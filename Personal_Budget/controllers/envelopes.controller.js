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

exports.getEnvelopeById =  async (req, res) => {
  try {
    const { id } = req.params;
    // mock retrieval of a real DB with async/await
    const envelopes = await dbEnvelopes;
    const envelope = findById(envelopes, id);

    if (!envelope) {
      return res.status(404).send({
        message: "Envelope Not Found",
      });
    }
    return res.status(200).send(envelope);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateEnvelope = async (req, res) => {
  try {
    const { title, budget } = req.body;
    const { id } = req.params;
    // mimicking the retrieval of a real DB with async/await
    const envelopes = await dbEnvelopes;
    const envelope = findById(envelopes, id);

    if (!envelope) {
      return res.status(404).send({
        message: "Envelope Not Found",
      });
    }

    envelope.title = title;
    envelope.budget = budget;
    res.status(201).send(envelopes);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteEnvelope = async (req, res) => {
  try {
    const { id } = req.params;
    const envelopes = await dbEnvelopes;
    const envelope = findById(envelopes, id);

    if (!envelope) {
      return res.status(404).send({
        message: "Envelope Not Found",
      });
    }

    const updatedEnvelopes = deleteById(envelopes, id);
    return res.status(204).send(updatedEnvelopes);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.transfer = async (req, res) => {
	try {
    const envelopes = await dbEnvelopes;
		const { fromId, toId } = req.params;
		const { amount } = req.body

		const originEnv = findById(envelopes, fromId);
		const destinationEnv = findById(envelopes, toId);

    if (!originEnv || !destinationEnv) {
      return res.status(404).send({
        message: "Envelope Not Found",
      });
		}

		if (originEnv.budget < amount) {
			return res.status(400).send({
				message: "Amount to transfer exceeds envelope budget funds"
			})
		}

		originEnv.budget -= amount;
		destinationEnv.budget += amount;

		return res.status(201).send(originEnv);
	} catch (err) {
		res.status(500).send(err);
	}
}