const { Klijent } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const klijent = await Klijent.findAll({
        limit: 10
      })
      res.send(klijent)
    } catch (err) {
      res.status(500).send({ error: 'Error while trying fetch.' })
    }
  },
  async post (req, res) {
    try {
      const klijent = await Klijent.create(req.body)
      res.send(klijent)
    } catch (err) {
      res.status(500).send({ error: 'Error while creating.' })
    }
  }
}
