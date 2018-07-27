import React from 'react';
import {Button, InputGroup, FormGroup, Container, Row, Col, Input, Form, InputGroupAddon} from 'reactstrap';
import {Well} from 'react-bootstrap';
import GitHubLoginButton from './GitHubLoginButton';

 



const UserSelection = ({anonButtonHandler, acceptButtonHandler, githubButtonHandler}) => {
	let input;
	return(
		<Well>
			<Container fluid={true}>
				<Row>
					<Col xs="12">
			<h5>Set your anonymous nickname:</h5>
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
			<Container className="accept-name-btn">
			<p>Also you can</p> <Button  outline color="primary" onClick={anonButtonHandler}>get random name</Button> <p>or use</p>
			<GitHubLoginButton callback={githubButtonHandler} />
			</Container>
			</Form>
					</Col>
				</Row>
			</Container>
		</Well>
	)
}
export default UserSelection;