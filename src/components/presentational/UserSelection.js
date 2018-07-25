import React from 'react';
import {Button, InputGroup, FormGroup, Container, Row, Col, Input, Form, InputGroupAddon} from 'reactstrap';
import {Well} from 'react-bootstrap';


const UserSelection = ({anonButtonHandler, acceptButtonHandler}) => {
	let input;
	return(
		<Well>
			<Container fluid={true}>
				<Row>
					<Col xs="12">
			<h5>Set your nickname:</h5>
			<Form onSubmit={(e)=>{
				e.preventDefault(); 
			if (!input.value.trim()) {
				return
			} 
			acceptButtonHandler(input.value)}}>
			<FormGroup>
    <InputGroup>
      <Input placeholder="Nickname" type="text" innerRef={ref => { input = ref; }}/>
	  <InputGroupAddon addonType="append">
	  <Button  color="primary" type="submit">Set</Button>
      </InputGroupAddon>
    </InputGroup>
  </FormGroup>
			<Button className="accept-name-btn" outline color="primary" onClick={anonButtonHandler}>Or randomize!</Button>
			</Form>
					</Col>
				</Row>
			</Container>
		</Well>
	)
}
export default UserSelection;