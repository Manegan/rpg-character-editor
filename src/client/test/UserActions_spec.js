import {
  USER_LOGIN,
  USER_LOGOUT,
  loginUser,
  logoutUser
} from '../app/actions/userActions'
import rpgApp from '../app/reducers/rpg'
import { connect } from 'react-redux'
import { createStore } from 'redux'
import { expect } from 'chai'

var store = createStore(rpgApp)

const testUser = {isLoggedIn: true, username: 'toto'}
const emptyUser = {isLoggedIn: false, username: undefined}

describe('UserActions', function () {
  it('should log actions as they are dispatched/connect to the store', function () {
    // var unsubscribe = store.subscribe(() => {
    //   console.log(store.getState())
    // })

    store.dispatch(loginUser(testUser))
    expect(store.getState()).to.deep.eq({user: testUser})
    store.dispatch(logoutUser())
    expect(store.getState()).to.deep.eq({user: emptyUser})

    // unsubscribe()
  })
})
