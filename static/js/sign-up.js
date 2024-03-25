const username = document.getElementById("username-field");
const password = document.getElementById("password-field");
const account_type = document.getElementById("account-field");

function register() {
	sessionStorage.setItem("dest", "http://10.141.130.250:8080/");
    fetchPost(username.value, password.value, account_type.value);
}

async function fetchPost(username, password, account_type) {
	let data = username + "\r\n" + password + "\r\n" + account_type + "\r\n";
	let destination = sessionStorage.getItem("dest") + "create/account";
	let response = fetch(destination, {
		method: "POST",
		credentials: 'include',
		headers: {
			'Content-Type': 'text/plain',
		},
		body: data
	})
	.then(response => {
		if(response.ok)
		{
			alert("Sign Up Successful");
			sessionStorage.setItem("username", username);
			sessionStorage.setItem("password", password);
			sessionStorage.setItem("account-type", account_type);
			if(account_type == 0)
			{
				window.location.href = 'labeler-home.html';
			}
			else
			{
				window.location.href = 'researcher-home.html';
			}
		}
		else if(response.status == 401)
		{
			alert("Sign Up Unsuccessful");
		}
		else {
			throw new Error('Network response was not ok');
		}
		return response;
	})
	.then(data => {
		console.log(data);
	})
	.catch(error => {
		console.error('There was a problem with the fetch operation:', error);
	});
}