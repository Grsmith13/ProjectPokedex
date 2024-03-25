function func(){
		var name = "Rover 'The' Cat";
		var username = "TrainCrossing2003";
		var email = "RoverTrainLover@gmail.com";
		var passwrd = "cATtO3@!";
		
		document.getElementById('output1').innerHTML = name;
		document.getElementById('output2').innerHTML = username;
		document.getElementById('output3').innerHTML = email;
		document.getElementById('output4').innerHTML = passwrd;
}
		
function editFunction(){
	name = document.getElementById('fname').value;
	username = document.getElementById('uname').value;
	email = document.getElementById('Email').value;
	
	
	document.getElementById('output1').innerHTML = name;
	document.getElementById('output2').innerHTML = username;
	document.getElementById('output3').innerHTML = email;
	
}

function changePass(){
    var passwrd1 = document.getElementById('pass1').value;
    var passwrd2 = document.getElementById('pass2').value;
    if (passwrd1.length < 8){
		alert("Password too short");
	}else if(passwrd1 !== passwrd2){
        alert("Passwords do not match");
    }else{
		alert("Password updated: " + passwrd1);
        document.getElementById('output1').innerHTML = passwrd1;
		
    }

}
