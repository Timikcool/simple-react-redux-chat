import {
	connect
} from 'react-redux';
import {
	setAnonUser,
	setUser
} from '../../actions';
import UserSelection from '../presentational/UserSelection';



const mapDispatchToProps = dispatch => {
	return {
		anonButtonHandler: () => {
			dispatch(setAnonUser())
		},
		acceptButtonHandler: (username) => {
			dispatch(setUser(username))
		},
		githubButtonHandler: (username)=>{
			dispatch(setUser(username));
		}
	}
}
const SelectUser = connect(null,mapDispatchToProps)(UserSelection);
export default SelectUser