import {
	connect
} from 'react-redux';

import {
	sendMessage
} from '../../actions';
import InputMessage from '../presentational/InputMessage';

const mapStateToProps = state => {
	return {
		username: state.users.username
	}
};
const mapDispatchToProps = dispatch => {
	return {
		onSubmitHandler: (username,text) => {
			dispatch(sendMessage(username,text)) //send data to server
		}
	}
}
let SendMessage = connect(mapStateToProps, mapDispatchToProps)(InputMessage);
export default SendMessage