import Api from '@/services/Api'

export default {
  index () {
    return Api().get('klijenti')
  },
  post (klijent) {
    return Api().post('klijenti', klijent)
  },
  show (klijentId) {
    return Api().get(`klijenti/${klijentId}`)
  },
  delete (klijentId) {
    return Api().delete(`klijenti/${klijentId}`)
  },
  update (klijent) {
    return Api().update('klijenti/update', klijent)
  }
}
