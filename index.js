
var randomNumber1 = Math.floor(Math.random() * 6) + 1 //creates random number between 1-6

var randomDiceImage = "dice" + randomNumber1 +   ".png" //string from dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImageSource)