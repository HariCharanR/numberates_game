let randNumber = Math.floor(Math.random() * 100);
let response = "";
const btn = document.getElementById("checkButton");
let userAttempts = 10;
console.log(randNumber);
const elementCreator = (res,type) => {
    let body = document.getElementById('main');
    let messageBox = document.createElement("div");
    messageBox.innerText = res;
    messageBox.classList.add(`${type}`);
    body.appendChild(messageBox);
}
btn.onclick = () => {
  var userInput = parseInt(document.getElementById("textBox").value);
  console.log(userInput)
  if (userInput > randNumber && userAttempts !== 0) {
    response = "you have guessed a higher number ,try again with a lower number";
    userAttempts--;
    document.getElementById("attemptCount").innerHTML = userAttempts ;
        elementCreator(response,"warning");
  } else if (userInput < randNumber && userAttempts !== 0) {
    response = "you have guessed a lower number ,try again with a higher number"
    userAttempts--;
    document.getElementById("attemptCount").innerHTML = userAttempts ;
    elementCreator(response,"warning");
  } else if(userInput == randNumber && userAttempts !== 0){
        response = " you have  guessed the  number and you have won the game"
        elementCreator(response,"success");

  }
  else{

    userAttempts = 10;
    document.getElementById("attemptCount").innerHTML = userAttempts ;
    elementCreator(response,"lose");

  }
};

