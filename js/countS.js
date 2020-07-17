// 저장용

var countS = 0;
var countB = 0;
var countO = 0;
var count = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];

}
function finding() {
    var userNumber = document.querySelector("#answer1").value;
    if (randomNumber = userNumber) {
        document.querySelector("log").innerHTML = countS + "스트라이크";
    }
    else if (randomNumber != userNumber) {
        document.querySelector("log").innerHTML = "볼";
    }
    else if (randomNumber > userNumber) {
        document.querySelector("log").innerHTML = "볼";
    }

}
