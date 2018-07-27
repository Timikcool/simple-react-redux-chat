import firebase from 'firebase';
import 'firebase/database/dist/index.cjs';

import generateUsername from './helpers/generateUsername';
import scrollControl from './helpers/scrollControl';


// Initialize Firebase
let config = {
	apiKey: "AIzaSyChWFMMfuhFZWwhLO79JrXEsqnGOlI7b74",
	authDomain: "my-react-redux-chat.firebaseapp.com",
	databaseURL: "https://my-react-redux-chat.firebaseio.com",
	projectId: "my-react-redux-chat",
	storageBucket: "my-react-redux-chat.appspot.com",
	messagingSenderId: "752165594266"
};
firebase.initializeApp(config);
let database = firebase.database();


export const SEND_MESSAGE = 'SEND_MESSAGE'


export function sendMessage(username, text) {
	sendMessageToServer(username, text);
	return {
		type: SEND_MESSAGE,
		author: username,
		text
	}
}

export const UPDATE_MESSAGES = 'UPDATE_MESSAGES'

export function updateMessages(messages) {
	scrollControl();
	return {
		type: UPDATE_MESSAGES,
		messages
	}
}

export const SHOW_MESSAGES = 'SHOW_MESSAGES'

export function showMessages(messages) {
	return {
		type: SHOW_MESSAGES,
		messages
	}
}

export function getMessages(dispatch) {
	database.ref('/messages/').on('value', (snapshot) => {
		let val = snapshot.val();

		dispatch(updateMessages(val))
	})
	return {
		type: SHOW_MESSAGES,
		messages: [{ key: 10, text: 'if you see this then something went wrong', author: 'app' }]
	}
}
function sendMessageToServer(username, text) {
	let message = {
		author: username,
		text
	};

	let newMessageKey = database.ref('/message/').push().key;
	message.key = newMessageKey;
	let updates = {};
	updates['/messages/' + newMessageKey] = message;

	return database.ref().update(updates);
}
export const SET_ANON_USER = 'SET_ANON_USER';

export function setAnonUser() {
	let username = generateUsername()
	return {
		type: SET_ANON_USER,
		username: username
	}
}

export const SET_USER = 'SET_USER';
export function setUser(username) {
	return {
		type: SET_USER,
		username
	}
}
export const SHOW_MODAL = 'SHOW_MODAL';
export function showModal() {
	return {
		type: SHOW_MODAL
	}
}
export const CLOSE_MODAL = 'CLOSE_MODAL';
export function closeModal() {
	return {
		type: CLOSE_MODAL
	}
}