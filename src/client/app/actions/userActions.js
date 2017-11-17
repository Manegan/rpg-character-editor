export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export function loginUser(user) {
  return {
    type: USER_LOGIN,
    user
  }
}

export function logoutUser(user) {
  return {
    type: USER_LOGOUT,
    user
  }
}
