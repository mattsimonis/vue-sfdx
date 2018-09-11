import ltng from 'lightning-container'

let mockAccounts = require('../data/accounts.json')

export default {
  getAllAccounts (callback) {
    if (process.env.NODE_ENV === 'production') {
      ltng.callApex(
        'VueAppController.getAllAccounts',
        (result, event) => {
          if (event.status) {
            callback(result)
          } else if (event.type === 'exception') {
            console.log(event.message + ' : ' + event.where)
          } else {
            console.log('Unknown Error', event)
          }
        },
        {escape: false}
      )
    } else {
      setTimeout(() => callback(mockAccounts), 100)
    }
  }
}