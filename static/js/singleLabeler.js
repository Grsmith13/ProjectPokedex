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

}



// variable drop down list for 4 lists, takes input for html id


//script that loads during page load
function pageLoad(){
    createImage("img/1.png", null)



    imageTransfer();
    
    displayImage();

    recieveTags();

   
}

//takes the submitted tags and assigns them to corresponding images
function submit(tag1){
    imageLabeling[0].tag = tag1;

}

//return format for how we send text to server. 
//ONLY WORKS FOR THE FIRST IMAGE IN QUEUE AND DOES NOT REMOVE FROM QUEUE
function send(){
    var send = imageLabeling[0].UUID +"\n" +imageLabeling[0].tag
    return send;
}
// a test that gets the ids form the list and sends a message with them
//also tests submit and send functions
// most likely will gut this for later use but will neeed the tag code
function submitButton(){

    var e = document.getElementById("inputTag");
    var value1 = e.value;

    if(value1 == ""){
        alert("Please choose a tag");
        return;
    }


    alert("Image 1: " + value1 );
    submit(value1);
    
    alert(send());
}
