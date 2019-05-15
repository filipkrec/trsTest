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
  },
  async show (req, res) {
    try {
      const klijent = await Klijent.findById(req.params.klijentId)
      res.send(klijent)
    } catch (err) {
      res.status(500).send({ error: 'Error while trying fetch.' })
    }
  },
  async delete (req, res) {
    try {
      const klijent = await Klijent.destroy({ where: { Id: req.params.klijentId } })
      res.send(klijent.klijentId)
    } catch (err) {
      res.status(500).send({ error: 'Error while trying delete.' })
    }
  },
  async update (req, res) {
    try {
      const klijent = await Klijent.upsert(req.body)
      res.send(klijent)
    } catch (err) {
      res.status(500).send({ error: 'Error while updating.' })
    }
  }
}
