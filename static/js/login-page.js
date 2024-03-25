const username = document.getElementById("username");
const password = document.getElementById("password");

// This gets the 3 button elements for the navbar
const logoutButton = document.getElementById("logout-btn");
const loginButton = document.getElementById("login-btn");
const signupButton = document.getElementById("signup-btn");
// Function makes the logout button visible while also hiding the login and sign-up buttons
function HideButtons() {
	logoutButton.removeAttribute("hidden");
	signupButton.setAttribute("hidden")
	loginButton.setAttribute("hidden")

}


function login() {
	sessionStorage.setItem("dest", "http://10.141.130.250:8080/");
	let data = "user=" + username.value + "&password=" + password.value;
	let destination = sessionStorage.getItem("dest") + "login";
	fetch(destination, {
		method: "POST",
		credentials: 'include',
		headers: {
			'Content-Type': 'text/plain',
		},
		body: data
	}).then(response => {
		if (response.status >= 400) throw { code: response.status }
		return response.text() // if you return a promise in a `then` block, the chained `then` block will get the resolved result
	}).then(text => {
		console.log(text)
		// handle successful event
		HideButtons();
		acc_type_index = text.indexOf('account_type=');
		let account_type = text.charAt(acc_type_index + 13);
		sessionStorage.setItem("username", username.value);
		sessionStorage.setItem("password", password.value);
		sessionStorage.setItem("account-type", account_type);
		if (account_type == 0) {
			window.location.href = 'labeler-home.html';
		}
		else if (account_type == 1) {
			window.location.href = 'researcher-home.html';
		}
	}).catch(err => {
		// if at any stage of the promise chain, if a promise rejects, or throws, it will be caught by the `catch` block
		if (err.code) {
			// handle status error
		} else {
			// handle other errors
		}
	})
}