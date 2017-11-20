import axios from 'axios'

var user = {
  isLoggedIn: false,
  username: undefined
}

export default {
  login (form) {
    // console.log(form)
    return axios({
      url: 'http://localhost:3000/login',
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
      data: form
    }).then(function (resp) {
      user = resp.data
      return resp.data
    })
  },

  logout () {
    user = {
      isLoggedIn: false,
      username: undefined
    }
  },

  getUser() {
    return user
  }
}
