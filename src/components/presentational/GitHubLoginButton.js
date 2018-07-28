import React from 'react'
import GitHubLogin from "react-github-login";
const GitHubLoginButton = ({callbackOnSuccess}) => {
	const onSuccess = response => {
		console.log("response.code", response.code);
		fetch(
			`https://my-simple-react-redux-chat.herokuapp.com/authenticate/${
			response.code
			}`,
			{ method: "GET" }
		).then(response => {
			console.log("access token");
			response.json().then(data => {
				console.log('#githublogin token',data.token);
				fetch(
					`https://api.github.com/user?access_token=${data.token}`,
					{ method: 'GET' }
				).then(r => {
					r.json().then((data) => {
						console.log('#githublogin login',data.login);
						callbackOnSuccess(data.login);
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
			redirectUri="https://my-react-redux-chat.firebaseapp.com/"
			onSuccess={onSuccess}
			onFailure={onFailure}
		/>)
}
export default GitHubLoginButton;