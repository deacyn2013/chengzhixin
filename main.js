let myImage = document.querySelector('img');

myImage.onclick = () => {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src', 'images/firefox2.png');
	} else {
		myImage.setAttribute('src', 'images/firefox-icon.png');
	}
}

var setHeading = name => {
	let myHeading = document.querySelector('h1');
	myHeading.textContent = "Mozilla 苦逼了，" + name + "！";
}

var setUserName = () => {
	let myName = prompt('请输入你的姓名');
	if (!myName) {
		return;
	}
	localStorage.setItem('name', myName);
	setHeading(myName);
}

let storedName = localStorage. getItem('name');
if (!storedName) {
	setUserName();
} else {
	setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;


