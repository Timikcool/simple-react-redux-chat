import React from 'react'
import { Alert, Row, Col } from 'reactstrap'
import scrollControl from '../../helpers/scrollControl';

class Message extends React.Component{
	constructor(props){
		super(props);
		this.message = props.message;
		this.username = props.username;
	}
	componentDidMount(){
		scrollControl();
	}
	render(){
	let authored = this.message.author === this.username;

	let messageClass = authored ? "message-p-authored" : "message-p";
	let strongClass = authored ? "message-strong-authored" : "message-strong";
	let color = authored ? "secondary" : "primary";

	let colClass = authored ? "float-right" : "float-left";
	return <Row xs="6"><Col className={colClass}><Alert color={color}><p className={messageClass}><strong className={strongClass}>{this.message.author} : </strong>{this.message.text}</p></Alert></Col></Row>

	}
}

export default Message;