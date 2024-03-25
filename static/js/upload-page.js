async function uploadZip() {
	const zipFile = document.getElementById("upload-field").files[0];
	const dataType = document.getElementById("data-type");
	let user = sessionStorage.getItem("username");
	let destination = sessionStorage.getItem("dest") + "create/dataset/" + dataType.value + "/" + user + "/" + zipFile.name;
	fetchPost(destination, zipFile, 'application/zip');
}

async function fetchPost(destination, data, contentType) {
	let response = fetch(destination, {
		method: "POST",
		credentials: 'include',
		headers: {
			'Content-Type': contentType,
		},
		body: data
	})
	.then(response => {
		if(response.ok)
		{
			alert("Upload Successful");
		}
		else if(response.status == 417)
		{
			alert("Upload Unsuccessful");
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