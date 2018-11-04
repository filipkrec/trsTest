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
  }
}
