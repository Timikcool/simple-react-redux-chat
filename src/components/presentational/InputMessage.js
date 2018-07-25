import React from 'react';
import {Input, Button, Form} from 'reactstrap'


let InputMessage = ({username, onSubmitHandler}) => {
	let input;
		return(
			
			<Form className="input-message-form" inline onSubmit={(e)=>{
				e.preventDefault()
			if (!input.value.trim()) {
				return
			}
				onSubmitHandler(username, input.value);
				input.value = '';
				}}>
          <Input
		  	className="input-message-input"
            type="text"
			placeholder="Enter text"
			innerRef={ref => {input = ref; }}
          />
		<Button type="submit">Send</Button>
      </Form>
		)
}

export default InputMessage;