import {
	connect
} from 'react-redux'

import StartModal from '../presentational/StartModal';
import { closeModal } from '../../actions';


const mapStateToProps = state => {
	return {
		username:state.users.username,
		isShowingModal: state.users.isShowingModal
	}
}
const mapDispatchToProps = dispatch => {
	return {
		confirmButtonHandler: () => {
			dispatch(closeModal());
		}
	}
}

const ModalContainer = connect(mapStateToProps,mapDispatchToProps)(StartModal);

export default ModalContainer;