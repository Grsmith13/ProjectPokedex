const category = document.getElementById("category-field");
const datasetSelector = document.getElementById("datasets");
const categoryList = document.getElementById("categoryList");
const datasetCatDict = {};
const datasets = ["Dataset 1", "Dataset 2", "Dataset 3"];

window.onload = function fillSelector() {
	datasets.forEach(populateOptions);
}

function addCategory() {
	selectELement = document.querySelector('#datasets');
	dataset = selectELement.value;
	datasetCatDict[dataset].add(category.value);
	categoryList.textContent = Array.from(datasetCatDict[dataset].values());
}

datasetSelector.addEventListener("change", (e) => {
	e.preventDefault();
	selectELement = document.querySelector('#datasets');
	dataset = selectELement.value;
	categoryList.textContent = Array.from(datasetCatDict[dataset].values());
})

function populateOptions(dataset) {
	var option = document.createElement("option");
	option.text = dataset;
	datasetSelector.add(option);
	datasetCatDict[dataset] = new Set();
}