let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/japan.jpeg') {
      myImage.setAttribute('src','images/japan2.jpeg');
    } else {
      myImage.setAttribute('src','images/japan.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else { 
    localStorage.setItem('name', myName);
    myHeading.textContent = '日本はカッコい, ' +myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '日本はカッコい, ' + storedName;
}
myButton.onclick = function() { 
    setUserName();
}