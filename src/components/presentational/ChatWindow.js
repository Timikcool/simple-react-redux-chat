import React from 'react'
import dataToArray from '../../helpers/dataToArray';

import Message from './Message'
import SendMessage from '../containers/SendMessage';
import { Container } from 'reactstrap';

const ChatWindow = ({ messages, username }) => {
	messages = dataToArray(messages);


	return (
		<React.Fragment>
			<Container className="messages">
				{
					messages.map(message => <Message key={message.key} message={message} username={username} />)
				}
				<div className="dummyForScroll" style={{ float: "left", clear: "both" }}>
				</div>
			</Container>
			<Container>
				<SendMessage />
			</Container>
		</React.Fragment>
	)
}
export default ChatWindow;