import {
	combineReducers
} from 'redux'
import {
	SHOW_MESSAGES,
	UPDATE_MESSAGES,
	SEND_MESSAGE,
	SET_ANON_USER,
	SET_USER,
	SHOW_MODAL,
	CLOSE_MODAL
} from './actions'

import { getCookie } from './helpers/cookies';


 function messages(state = {}, action) {
	switch (action.type) {
		case SHOW_MESSAGES:
			return {...state, messages: action.messages}
		case UPDATE_MESSAGES:
			return {...state, messages:action.messages}
		case SEND_MESSAGE:
			return {...state} //send to server
		default:
			return state;
	}
}

function users(state = {username: getCookie('chat-user'), isShowingModal:true}, action){
	switch (action.type)
	{
		case SET_ANON_USER:
		return {...state, username:action.username}
		case SET_USER:
		return {...state, username:action.username}
		case SHOW_MODAL:
		return {...state, isShowingModal:true}
		case CLOSE_MODAL:
		return {...state, isShowingModal:false}
		default: return state;
	}
}

 const chat = combineReducers({messages,users})
 export default chat;