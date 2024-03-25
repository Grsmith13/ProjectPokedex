var imageQueue = [];
var imageLabeling = [];
var tags = [];

// creates the image class and pushes to queue
// uuid set to null
function createImage(image, ID){
    img = {image: image, UUID: ID, tag:null}
    imageQueue.push(img);
}

//moves the images that are in queue to the list of images being labeled
function imageTransfer (){
    imageLabeling.push(imageQueue.shift());
}

//assigngs photo class from array to var and then displays the class.image which is a image path
function displayImage(){
    image1 = imageLabeling[0];
    document.querySelector(".id-of-img-tag1").src = image1.image;

    image2 = imageLabeling[1];
    document.querySelector(".id-of-img-tag2").src = image2.image;

    image3 = imageLabeling[2];
    document.querySelector(".id-of-img-tag3").src = image3.image;

    image4 = imageLabeling[3];
    document.querySelector(".id-of-img-tag4").src = image4.image;
}

// functions that handles tags by putting them into the array
// note we have not way of removing them, unsure if needed
function recieveTags(){
    tags.push("tag1");
    tags.push("tag2");
    tags.push("tag3");
    tags.push("tag4");
}

// variable drop down list for 4 lists, takes input for html id
function test(id){
    var select = document.getElementById(id);

    for(var i = 0; i < tags.length; i++) {
        var opt = tags[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

//script that loads during page load
function pageLoad(){
    createImage("img/1.png", null)
    createImage("img/2.png", null)
    createImage("img/3.png", null)
    createImage("img/4.png", null)


    for(i = 0; i<4; i++){
        imageTransfer();
    }
    
    displayImage();

    recieveTags();
    for(var i = 1; i < 5; i++){
        test("tag-list"+i);
    }
   
}

//takes the submitted tags and assigns them to corresponding images
function submit(tag1, tag2, tag3, tag4){
    imageLabeling[0].tag = tag1;

    imageLabeling[1].tag = tag2;
    
    imageLabeling[2].tag = tag3;

    imageLabeling[3].tag = tag4;
}

//return format for how we send text to server. 
//ONLY WORKS FOR THE FIRST IMAGE IN QUEUE AND DOES NOT REMOVE FROM QUEUE
function send(){
    var send = imageLabeling[0].UUID +"\n" +imageLabeling[0].tag
    return send
}
// a test that gets the ids form the list and sends a message with them
//also tests submit and send functions
// most likely will gut this for later use but will neeed the tag code
function submitButton(){

    var e = document.getElementById("tag-list1");
    var value1 = e.value;

    if(value1 == "Choose a tag"){
        alert("Please choose a tag");
        return;
    }

    e = document.getElementById("tag-list2");
    var value2 = e.value;

    if(value2 == "Choose a tag"){
        alert("Please choose a tag");
        return;
    }

    e = document.getElementById("tag-list3");
    var value3 = e.value;

    if(value3 == "Choose a tag"){
        alert("Please choose a tag");
        return;
    }

    e = document.getElementById("tag-list4");
    var value4 = e.value;

    if(value4 == "Choose a tag"){
        alert("Please choose a tag");
        return;
    }

    alert("Image 1: " + value1 + "\n" + "Image 2: " + value2 + "\n" + "Image 3: " + value3 + "\n" + "Image 4: " + value4)
    submit(value1, value2, value3, value4);
    
    alert(send());
}
