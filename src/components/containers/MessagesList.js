import {
	connect
} from 'react-redux'

import ChatWindow from '../presentational/ChatWindow'
import scrollControl from '../../helpers/scrollControl';


const mapStateToProps = state => {
	scrollControl();
	return {
		username: state.users.username,
		messages: state.messages.messages
	}
}

const MessagesList = connect(mapStateToProps)(ChatWindow);

export default MessagesList