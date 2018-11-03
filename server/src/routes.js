const AuthenticationController = require('./controllers/AuthenticationController')
const KlijentController = require('./controllers/KlijentController')

module.exports = (app) => {
  app.post('/login', AuthenticationController.login)
  app.post('/register', AuthenticationController.register)

  app.get('/klijenti', KlijentController.index)
  app.post('/klijenti', KlijentController.post)
}
