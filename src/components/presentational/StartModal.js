import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col, Button} from 'reactstrap'
import SelectUser from '../containers/SelectUser'


const StartModal = ({username, isShowingModal,confirmButtonHandler}) =>{
	return(
		<Modal size='lg' isOpen={isShowingModal} backdrop="static">
    <ModalHeader>
      Greetings, stranger!
    </ModalHeader>

    <ModalBody>
		<Container fluid={true}>
			<Row>
				<Col xs="12"><p>This webchat is flawlessly anonymous, open sourced and forever free! What else do you need?</p></Col>
			</Row>
			<Row>
				<Col xs="12"> <SelectUser/> </Col>
			</Row>
		</Container>
	</ModalBody>
    <ModalFooter className="modal-footer">
		<h6>Your current name is: <strong>{username}</strong></h6>
      <Button color="success" onClick={confirmButtonHandler}>Let's rock!</Button>
    </ModalFooter>
</Modal>
	)
}
export default StartModal;