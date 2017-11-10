import axios from 'axios'

var currentUser = {
  isLoggedIn: false,
  username: undefined
}

export default {
  login (form) {
    console.log(form)
    axios.post('http://localhost:3000/login', form)
      .then(function (resp) {
        currentUser = resp
      }).catch(function (error) {
        console.log(error)
      })
  },

  logout (user) {

  }
}
