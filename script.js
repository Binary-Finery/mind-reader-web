var counter = 0;
var n;
var msg;

function initGame() {

    switch (counter) {
        case 0:
            document.getElementById("btn").innerText = "next"
            msg = "Think of a number";
            break;
        case 1:
            msg = "Multiply that number by 2";
            break;
        case 2:
            n = getRandomNumber();
            msg = "add " + n + " to it";
            break;
        case 3:
            msg = "Divide that number by 2";
            break;
        case 4:
            msg = "Subtract that number by the number you thought of first";
            break;
        case 5:
            msg = "the number in your mind is " + (n / 2);
            break;
    }

    document.getElementById("output").innerHTML = msg;

    counter++;

    if (counter > 5) {
        document.getElementById("btn").innerText = "Play Again"
        counter = 0;
    }
}

function getRandomNumber() {
    return (Math.floor(Math.random() * 50) + 1) * 2;
}