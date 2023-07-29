const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const Branch = document.getElementById('Branch');
const PhoneNumber = document.getElementById('Phone Number');
const popup=document.getElementById('popup');


form.addEventListener("submit",(e)=> {
	e.preventDefault();	
   
	checkInputs();
    form.reset();	
});
const firebaseConfig = {
	apiKey: "AIzaSyB_h_JhYcLj28D-GW2cgdVmir1YfmalBxo",
	authDomain: "registrationform-99159.firebaseapp.com",
	databaseURL: "https://registrationform-99159-default-rtdb.firebaseio.com",
	projectId: "registrationform-99159",
	storageBucket: "registrationform-99159.appspot.com",
	messagingSenderId: "665177471406",
	appId: "1:665177471406:web:da5944381d06cbc7cd703f",
	measurementId: "G-1Q5092V7RQ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var contactFormDB =firebase.database().ref("form");

  document.getElementById("form").addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

var username = document.getElementVal('username');
var email = document.getElementVal('email');
var Branch = document.getElementVal('Branch');
var PhoneNumber = document.getElementVal('Phone Number');

saveMessages(usernameValue,emailValue,Branch,PhoneNumberValue)
};

const saveMessages = (usernameValue, emailValue, BranchValue, PhoneNumberValue) => {
		var newContactForm =contactFormDB.push();
		newContactForm.set({
			username: usernameValue,
			email: emailValue,
			Branch: BranchValue,
			PhoneNumber: PhoneNumberValue,
		});

	};

	const getElementVal =(id)=>{
		return document.getElementById(id).value;
	};





function checkInputs() {
	
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const BranchValue = Branch.value.trim();
	const PhoneNumberValue = PhoneNumber.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Please enter your Username');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Please enter your Email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(BranchValue === "Branch") {
		setErrorFor(Branch, 'Please enter your Branch');
	} else {
		setSuccessFor(Branch);
	}
	
	if(PhoneNumberValue === '') {
		setErrorFor(PhoneNumber, 'Please enter your Phone Number');
	} 
	else if(PhoneNumberValue.length < 10) {
		setErrorFor(PhoneNumber, 'Phone Number is invalid');
	} 
	else if(isNaN (PhoneNumberValue)){
		setErrorFor(PhoneNumber, 'Phone Number is invalid');
	}
	else if(PhoneNumberValue.length > 10) {
		setErrorFor(PhoneNumber, 'Phone Number is invalid');
	}
	else if((PhoneNumberValue.charAt(0) !=9) && (PhoneNumberValue.charAt(0) !=8) && (PhoneNumberValue.charAt(0)!=7) && (PhoneNumberValue.charAt(0)!=6)){
		setErrorFor(PhoneNumber, 'Phone Number is invalid');
	}  else{
	setSuccessFor(PhoneNumber);
	}
	
	console.log(usernameValue);
	console.log(emailValue);
	console.log(PhoneNumberValue);
	if(BranchValue!=="Branch"){
		console.log(BranchValue);
	}
	
	

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
	
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function openPopup () {
	popup.classList.add("open-popup");	
}
function closePopup(){
popup.classList.remove("open-popup");
};
	

}