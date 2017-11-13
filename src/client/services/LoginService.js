import axios from 'axios'

var currentUser = {
  isLoggedIn: false,
  username: undefined
}

export default {
  login (form) {
    console.log(form)
    axios({
      url: 'http://localhost:3000/login',
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest'},
      data: form
    })
    .then(function (resp) {
      currentUser = resp
    })
    .catch(function (error) {
      console.log(error)
    })
  },

  logout (user) {

  }
}
