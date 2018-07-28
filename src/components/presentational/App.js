import React from 'react';
import MessageList from '../containers/MessagesList';
import { connect } from 'react-redux';
import { getMessages } from '../../actions';
import ModalContainer from '../containers/ModalContainer';
import { Container } from 'reactstrap';


let App = ({ dispatch }) => {
	dispatch(getMessages(dispatch));
	return <React.Fragment>
		<Container className="main">
			<MessageList />
			<ModalContainer />
		</Container>
		<footer className="footer">
			<Container>
				<span className="text-muted">Used: <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">react</a> <a href="https://https://redux.js.org/" target="_blank" rel="noopener noreferrer">redux</a> <a href="https://reactstrap.github.io/" target="_blank" rel="noopener noreferrer">reactstrap</a> <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">firebase</a></span>
			</Container>
		</footer>
	</React.Fragment>
}
App = connect()(App);
export default App