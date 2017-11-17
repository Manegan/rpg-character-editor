import { combineReducers } from 'redux'
import {
  USER_LOGIN,
  USER_LOGOUT
} from '../actions/userActions'

const initialState = {
  isLoggedIn: false,
  username: undefined
}

function user(state, action) {
  if (!state) return initialState
  switch (action.type) {
    case USER_LOGIN:
      return Object.assign({}, state, {
        isLoggedIn: action.user.isLoggedIn,
        username: action.user.username
      })
    case USER_LOGOUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
        username: undefined
      })
    default:
      return state
  }
}

const rpgApp = combineReducers({
  user
})

export default rpgApp
