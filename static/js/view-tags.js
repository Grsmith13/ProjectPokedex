const image = document.getElementById("image");

function loadImage() {
	let datasetName = sessionStorage.getItem("dataset-name");
	let datasetUUID = sessionStorage.getItem("dataset-uuid");
	let destination = sessionStorage.getItem("dest") + "download/dataset/";
	fetchGet(destination).then(resp => {
		image_index = resp.indexOf('image=');
		let path = resp.substring(image_index + 7);
		alert(path);
		image.src = path;
	});
}

async function fetchGet(destination) {
	const response = await fetch(destination, {
		method: "GET",
		credentials: 'include'
	});
	const data = await response.text();
	return data;
}