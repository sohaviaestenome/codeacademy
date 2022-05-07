const { db } = require('../config/index');

exports.getEnvelopes = async (req, res) => {
	const query = "SELECT * FROM envelopes";

  try {
		const envelopes = await db.query(query);
		if (envelopes.rowCount < 1) {
			return res.status(404).send({
				message: "Records not found"
			})
		}
		res.status(200).send({
			status: 'Success',
			message: 'Envelopes Information retrieved',
			data: envelopes.rows,
			});
  } catch (err) {
    return res.status(500).send({
			error: err.message
		});
  }
};
