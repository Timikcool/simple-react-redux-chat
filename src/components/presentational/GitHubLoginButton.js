import React from 'react'
import GitHubLogin from "react-github-login";
const GitHubLoginButton = ({callback}) => {
	const onSuccess = response => {
		console.log("response.code", response.code);
		fetch(
			`https://my-simple-react-redux-chat.herokuapp.com/authenticate/${
			response.code
			}`,
			{ method: "GET" }
		).then(r => {
			console.log("access token");
			r.json().then(data => {
				console.log(data.token);
				fetch(
					`https://api.github.com/user?access_token=${data.token}`,
					{ method: 'GET' }
				).then((r) => {
					console.log(r);
					r.json().then((data) => {
						console.log(data.login);
						callback(data.login);
					})
				});
			});
		});
	};
	const onFailure = response => console.error(response);
	return (
		<GitHubLogin
			className="btn btn-outline-secondary"
			clientId="ee453ac76d91c6ad7560"
			redirectUri="http://localhost:3000/redirect.html"
			onSuccess={onSuccess}
			onRequest={r => {
				console.log(r);
			}}
			onFailure={onFailure}
		/>)
}
export default GitHubLoginButton;