import React from 'react'
import { Alert, Row, Col } from 'reactstrap'



const Message = ({ message, username }) => {

	let authored = message.author === username;

	let messageClass = authored ? "message-p-authored" : "message-p";
	let strongClass = authored ? "message-strong-authored" : "message-strong";
	let color = authored ? "secondary" : "primary";

	let colClass = authored ? "float-right" : "float-left";
	return <Row xs="6"><Col className={colClass}><Alert color={color}><p className={messageClass}><strong className={strongClass}>{message.author} : </strong>{message.text}</p></Alert></Col></Row>
}
export default Message;