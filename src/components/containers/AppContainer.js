import { connect } from 'react-redux'

import ChatWindow from '../presentational/App'


const mapStateToProps = (state) => {return state.messages}

const MessagesList = connect(mapStateToProps)(ChatWindow);

export default MessagesList