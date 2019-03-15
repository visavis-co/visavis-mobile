import * as types from '../constants/actionTypes';

// success
export const logIn = (userInfo) => ({
  type: types.LOGIN,
  payload: userInfo,
})

export const userLogin = () => (dispatch, getState) => {
  return fetch('http://localhost:3000/login', {
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
  .then(res=>{
    if (res.status === 200) return res.json();
    else throw new Error('Incorrect email/password');
  })
  .then(data => {
    // console.log(data);
    return dispatch(logIn(data));
  })
  .catch(err=>console.warn(err.message));
}

export const userSignup = () => (dispatch, getState) => {
  return fetch('http://localhost:3000/api/user', {
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
    dispatch(logIn(data));
  })
  .catch(err=>console.warn(err));

}

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

export const sendChatMsg = (userId, matchId, message) => (dispatch, getState) => {
  // console.log('TCL: userId, matchId, message', userId, matchId, message)
  
  return fetch('http://localhost:3000/api/user', {
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
  
}

export const completeMatch = (matchId, location, inPerson) => dispatch => {
  return Axios.post('/api/match', {matchId, location, inPerson})
    .then(() => dispatch(completedMatch({matchId, location, inPerson})))
}

export const updateChatMsg = (value) => ({
  type: types.UPDATE_CHAT_MSG,
  payload: value,
})
