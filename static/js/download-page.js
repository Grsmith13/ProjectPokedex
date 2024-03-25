const datasetSelector = document.getElementById("dataset-selector");

function loadDatasets() {
	let user = sessionStorage.getItem("username");
	let destination = sessionStorage.getItem("dest") + "user/" + user;
	fetchGet(destination).then(resp => {
		let respList = resp.split("\r\n");
		let userID = respList[4];
		destination = sessionStorage.getItem("dest") + "dataset/" + userID;
		fetchGet(destination).then(resp => {
			datasets_index = resp.indexOf('begin_datasets');
			let datasets = resp.substring(datasets_index + 15);
			let datasetsList = datasets.split("\r\n");
			for(let i = 0; i < datasetsList.length - 3; i++)
			{
				let datasetUUID = datasetsList[i];
				let datasetName = datasetsList[i + 1];
				populateOptions(datasetUUID, datasetName);
				i++;
			}
		});

	});
}

function downloadDataset() {
	let destination = sessionStorage.getItem("dest") + "download/dataset/" + datasetSelector.value;
    fetch(destination, {
		method: "GET",
		credentials: 'include'
	}).then(response => {
    if (response.status >= 400) throw { code: response.status }
    return response.blob() // if you return a promise in a `then` block, the chained `then` block will get the resolved result
  }).then(blob => {
		const aElement = document.createElement('a');
		aElement.setAttribute('download', datasetSelector.text);
		const href = URL.createObjectURL(blob);
		aElement.href = href;
		aElement.setAttribute('target', '_blank');
		aElement.click();
		URL.revokeObjectURL(href);
  }).catch(err => {
    // if at any stage of the promise chain, if a promise rejects, or throws, it will be caught by the `catch` block
    if (err.code) {
      // handle status error
    } else {
      // handle other errors
    }
  })
}

function viewDataset() {
	sessionStorage.setItem("dataset-name", datasetSelector.text);
	sessionStorage.setItem("dataset-uuid", datasetSelector.value);
	window.location.href = "view-tags.html";
}

function populateOptions(datasetUUID, datasetName) {
	const datasetSelector = document.getElementById("dataset-selector");
	var option = document.createElement("option");
	option.text = datasetName;
	option.value = datasetUUID;
	datasetSelector.add(option);
}

async function fetchGet(destination) {
	const response = await fetch(destination, {
		method: "GET",
		credentials: 'include'
	});
	const data = await response.text();
	return data;
}