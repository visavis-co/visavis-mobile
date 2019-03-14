// import Axios from "axios";
import * as types from '../constants/actionTypes';

// success
export const logIn = (userInfo) => ({
  type: types.LOGIN,
  payload: userInfo,
})

// failure
// export const loginFailed = (err) => ({
//   type: types.LOGIN_FAILED,
//   payload: err,
// })

// export const signupFailed = (err) => ({
//   type: types.SIGNUP_FAILED,
//   payload: err,
// })

// export const receiveChats = (chats) => ({
//   type: types.RECEIVE_CHATS,
//   payload: chats,
// })

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

export const userSignup = () => (dispatch, getState) => {
  return fetch('http://192.168.0.149:3000/api/user', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName: getState().user.fullName,
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

// export const inSession = () => dispatch => {
//   return Axios.get('/api/user')
//     .then(userInfo => dispatch(logIn(userInfo)))
//     .catch(err => dispatch(signupFailed(err)))
// }

export const enterEmail = (value) => ({
  type: types.ENTER_EMAIL,
  payload: value,
});
export const enterFullName = (value) => ({
  type: types.ENTER_FULLNAME,
  payload: value,
});
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

export const sendChatMsg = (userId, matchId, message) => (dispatch, getState) => {
  // console.log('TCL: userId, matchId, message', userId, matchId, message)
  
  return fetch('http://192.168.0.149:3000/api/user', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: getState().user.userInfo.id,
      matchId: getState().user.currentMatch.id,
      message: getState().user.chatMsg
    })
  })
  .then(res=>res.json())
  .then(data => {
    // console.log(data);
    dispatch(updateChatMsg(''));
    dispatch(getChats(getState().user.currentMatch.id));
  })
  .catch(err=>console.warn(err));
  
  
  
  return Axios.post('/api/chat/', {userId, matchId, message})
    .then(() => {
      dispatch(updateChatMsg(''));
      dispatch(getChats(matchId));
    })
}

export const completeMatch = (matchId, location, inPerson) => dispatch => {
  return Axios.post('/api/match', {matchId, location, inPerson})
    .then(() => dispatch(completedMatch({matchId, location, inPerson})))
}

// export const completedMatch = (match) => ({
//   type: types.COMPLETED_MATCH,
//   payload: match,
// });


// export const changeNameInState = newName => ({
//   type: types.CHANGE_NAME,
//   payload: newName
// });
// export const updateMatchLocation = (value) => ({
//   type: types.UPDATE_MATCH_LOCATION,
//   payload: value,
// });

export const updateChatMsg = (value) => ({
  type: types.UPDATE_CHAT_MSG,
  payload: value,
})
