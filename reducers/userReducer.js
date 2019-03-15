import * as types from '../constants/actionTypes';

const initialState = {
  loginError: '',
  signupError: '',
  isLoggedIn: false,
  email: '',
  fullName: '',
  password: '',
  userInfo: {},
  currentMatch: {},
  pastMatches: [],
  matchChats: [],
  chatMsg: '',
}

// dummy initial state for testing purposes

/*
initialState.userInfo = {
  id: 5,
  fullname: "nisha"
}

initialState.matchChats = [
  {
    fullname: "stout",
    match_id: 30,
    message: "Hello Nisha!",
    timestamp: "2019-03-12T07:47:31.807Z"
  },
  {
    user_id: 5,
    match_id: 30,
    fullname: "nisha",
    message: "Hello Test! When can you meet?",
    timestamp: "2019-03-12T07:47:42.619Z"
  }
];

initialState.pastMatches = [
  {
    email: 'person@test.com',
    fullname: 'Person',
    pictureurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwJtK1Cp5-WRrbYYQeB0xxRn-4uBk0ePi44ry9yjjKkh2kVZ9Dw',
    id: 5,
    user1_id: 5,
    user2_id: 27,
    inperson: false,
    locatoin: 'Skype'
  },
  {
    email: 'person@test.com',
    fullname: 'Person2',
    pictureurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwJtK1Cp5-WRrbYYQeB0xxRn-4uBk0ePi44ry9yjjKkh2kVZ9Dw',
    id: 5,
    user1_id: 5,
    user2_id: 27,
    inperson: false,
    locatoin: 'Skype'
  },
  {
    email: 'person@test.com',
    fullname: 'Person3',
    pictureurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwJtK1Cp5-WRrbYYQeB0xxRn-4uBk0ePi44ry9yjjKkh2kVZ9Dw',
    id: 5,
    user1_id: 5,
    user2_id: 27,
    inperson: false,
    locatoin: 'Skype'
  }
]
*/

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:{
      return {
        ...state,
        userInfo: action.payload.user,
        currentMatch: action.payload.currentMatch,
        pastMatches: action.payload.pastMatches,
        isLoggedIn: true,
        email: '',
        password: '',
      }}
      case types.LOGIN_FAILED: {
      return {
        ...state,
        loginError: action.payload,
      }
      }
      case types.SIGNUP_FAILED:
      return {
        ...state,
        signupError: action.payload,
      }
    case types.RECEIVE_CHATS:
      return {
        ...state,
        matchChats: action.payload.data,
      }
      case types.ENTER_EMAIL:
      return {
        ...state,
        email: action.payload,
      }
      case types.ENTER_FULLNAME:
      return {
        ...state,
        fullName: action.payload,
      }
      case types.ENTER_PASSWORD:
      return {
        ...state,
        password: action.payload,
      }
      case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      }
      case types.UPDATE_CHAT_MSG:
      return {
        ...state,
        chatMsg: action.payload,
      }
      default:
      return state;
  }
}

export default userReducer;