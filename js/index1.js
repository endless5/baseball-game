var randomNumber = getRandomNumber();
var number = ["#answer1","#answer2","#answer3"]
var countS = 0;
var countB = 0;
var countO = 0;
var count = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
function getRandomNumber(){
    return Math.floor(Math.random() * 9);
}
function finding(){
    var userNumber = document.querySelector("#answer1").value;
    if (randomNumber = userNumber) {
        document.querySelector("log").innerHTML = countS +"스트라이크"
        }else if (randomNumber != userNumber){
            document.querySelector("log").innerHTML = "볼";
        }else if (randomNumber > userNumber){
            document.querySelector("log").innerHTML = "볼";
        }
        
}
function newStart() {
    randomNumber = getRandomNumber();
    count = 0;
    document.querySelector("#answer1").innerHTML = "";
    document.querySelector("#answer2").innerHTML = "";
    document.querySelector("#answer3").innerHTML = "";
    document.querySelector("#counter").innerHTML = "";
  }