//Replace dice image
window.onload = function replaceDiceImage () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var diceImageElement1 = document.querySelector(".img1");
    var diceImageElement2 = document.querySelector(".img2");
    var replaceImgSrc1 = '/images/dice' + randomNumber1 + '.png';
    var replaceImgSrc2 = '/images/dice' + randomNumber2 + '.png';
    diceImageElement1.setAttribute('src', replaceImgSrc1);
    diceImageElement2.setAttribute('src', replaceImgSrc2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!"
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!"
    }
}