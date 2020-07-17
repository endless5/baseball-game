// 카운트값
var playCounter = 0; 
var computerNumbers = [];

var answer1;
var answer2;
var answer3;
var counter; 
var log;

// 게임 준비하는 부분
// 카운트 초기화, 입력한 내용 모두 초기화
function initialize() {
    // 카운터 0으로 초기화
    playCounter = 0;
    // 랜덤숫자 컴퓨터꺼 생성
    computerNumbers = shuffle();
    // 랜덤숫자 출력
    console.log(computerNumbers); // 디버그용

    // HTML 요소 불러오기
    answer1 = document.querySelector("#answer1");
    answer2 = document.querySelector("#answer2");
    answer3 = document.querySelector("#answer3");
    counter = document.querySelector("#counter");
    log = document.querySelector("#log");

    // 모든 내용 초기화
    answer1.value = '';
    answer2.value = '';
    answer3.value = '';
    counter.innerHTML = playCounter + "회 시도함";
    log.innerHTML = '';
}

function checkClick() {
    // 입력한거 검사
    var a1 = checkValid(answer1.value);
    var a2 = checkValid(answer2.value);
    var a3 = checkValid(answer3.value);

    if (a1 == -1 || a2 == -1 || a3 == -1) {
        alert("제대로 된 수를 입력하세요");
        return;
    }

    var userArr = [ a1, a2, a3 ];
    var result = checkNumbers(userArr, computerNumbers, computerNumbers.length);

    var strike= result[0]; // 리턴받은거중에서 첫번째 변수
    var ball = result[1]; // 두번째 변수
    
    if (strike == 3) {
        log.innerHTML = "정답입니다";
        // alert("정답입니다.");
    }
    else if (strike == 0 && ball == 0) {
        log.innerHTML = "아웃"

        // 지우기
        answer1.value = "";
        answer2.value = "";
        answer3.value = "";
    }
    else { // 정답은 아님
        // 결과 표시
        log.innerHTML = "스트라이크는 " + strike + "개, 볼은 " + ball + "개 입니다"; 

        // 지우기
        answer1.value = "";
        answer2.value = "";
        answer3.value = "";
    }

    playCounter++;
    counter.innerHTML = playCounter + "회 시도함";
}

// user는 유저가 입력한 숫자, answer 는 정답 
// 비교해서 볼, 스트라이크 등등 확인하는 함수
function checkNumbers(user, answer, length) {
    var strike = 0;
    var ball = 0;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
             if(user[i] == answer[j]) {
                 if (i == j) {
                     strike++
                 } 
                 else {
                     ball++
                 }
            }
        }
    }

    return [strike, ball]; // 동시에 변수 두개 리턴하는거
}

// 입력한게 숫자인지, 0부터 9 사이까지인지 확인하는 함수
// str 에 입력한 문자가 들어감
// 올바르지 않은 수라면 -1 리턴, 올바른수면 숫자를 리턴
function checkValid(str) {
    if (!str) // str 가 아무것도 없으면 -1 반환
        return -1;

    if (isNaN(str)) // str 이 숫자가 아니면 isNaN 이 true 를 반환
        return -1; 
    
    var intValue = parseInt(str);
    if (intValue < 0 || intValue > 9)
        return -1;
    else
        return intValue;
}

  // 랜덤 숫자 배열 만들기, 중복 없이
  //Math.floor(Math.random() * 9)
function shuffle() {
    var result = []; 
    while (result.length < 3) { 
        var newRandom = Math.floor(Math.random() * 9); 
        if (!result.includes(newRandom)) 
            result.push(newRandom);
    } 
    return result;
};

function newstart() {
    // 새시작
    initialize();
}

// 게임 시작
initialize();
