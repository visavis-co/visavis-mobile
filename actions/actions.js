// import Axios from "axios";
import * as types from '../constants/actionTypes';

// success
export const logIn = (userInfo) => ({
  type: types.LOGIN,
  payload: userInfo,
})

// failure
export const loginFailed = (err) => ({
  type: types.LOGIN_FAILED,
  payload: err,
})

export const signupFailed = (err) => ({
  type: types.SIGNUP_FAILED,
  payload: err,
})

export const receiveChats = (chats) => ({
  type: types.RECEIVE_CHATS,
  payload: chats,
})

export const userLogin = () => (dispatch, getState) => {
  return fetch('http://192.168.0.149:3000/login', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: getState().user.email,
      password: getState().user.password
    })
  })
  .then(res=>res.json())
  .then(data => {
    // console.log(data);
    return dispatch(logIn(data));
  })
  .catch(err=>console.warn(err));
}
// export const userSignup = (fullName, email, password) => dispatch => {
//   return Axios.post('/api/user', {fullName: fullName, email: email, password: password})
//     .then(userInfo => {
//       console.log('Created User (POST: /api/user): ', userInfo);
//       dispatch(logIn(userInfo));
//     })
//     .catch(err => dispatch(signupFailed(err)))
// }
// export const inSession = () => dispatch => {
//   return Axios.get('/api/user')
//     .then(userInfo => dispatch(logIn(userInfo)))
//     .catch(err => dispatch(signupFailed(err)))
// }

export const enterEmail = (value) => ({
  type: types.ENTER_EMAIL,
  payload: value,
});
// export const enterFullName = (value) => ({
//   type: types.ENTER_FULLNAME,
//   payload: value,
// });
export const enterPassword = (value) => ({
  type: types.ENTER_PASSWORD,
  payload: value,
});

// export const logOut = () => ({
//   type: types.LOGOUT,
// })

// export const userLogout = (userid) => dispatch => {
//   return Axios.post('/logout', {id: userid})
//   .then(() => dispatch(logOut()))
// }

// export const getChats = (matchId) => dispatch => {
//   return Axios.get('/api/chat/' + matchId)
//     .then(chats => dispatch(receiveChats(chats)))
// }