// score_board.js (기초 버전)

let teamA = 0;
let teamB = 0;
let gameOver = false;
let maxScore = 21;
let currentGame = 1;
let isRunning = false;

// DOM
let scoreA, scoreB, statusBox, gameNo;

// 시작
window.addEventListener("DOMContentLoaded", init);   // addEventListener(메세지 이벤트 , 실행함수)

function init() {
    scoreA = document.querySelector("#team_A .score");
    scoreB = document.querySelector("#team_B .score");
    statusBox = document.getElementById("game_status");
    gameNo = document.getElementById("game_no");

    // A팀 점수 클릭 (증가)
    document.querySelector("#team_A .score_area").addEventListener("click", () => {
        // if (gameOver) return;
        if (gameOver || isRunning) return;


        // 이 블럭은 단순 PC 나 모바일환경에서 점수 업데이트를 위해서만 동작하는 코드입니다. 서버 작업은 아래의 서버 부분에서 하세요.
        // 아래의 블럭은 주석으로 남겨둠
        //teamA++;
        //checkWin();
        //updateUI();
        
        // JS → 서버 요청 → 서버가 점수 증가 → 결과 받기  : 이제부터 teamB++;teamA++;같은 로컬 변경 금지
        // setInterval(() => {

            
            
            isRunning = true;

            fetch("update_score.php", {
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({team: "A"})
            })
            .then(res => res.json())  // res: response , response가 json()형태로 올것이다..
            .then(data => {
                teamA = data.teamA;
                teamB = data.teamB;
                gameOver = data.gameOver;

                checkWin();
                updateUI();
            })
            .finally(() => {
                isRunning = false;
            });
        // }, 1000);


    }); // A팀 점수 클릭 (증가) 의 끝


    // B팀 점수 클릭 (증가)
    document.querySelector("#team_B .score_area").addEventListener("click", () => {
        // if (gameOver) return;
        if (gameOver || isRunning) return;


        // 이 블럭은 단순 PC 나 모바일환경에서 점수 업데이트를 위해서만 동작하는 코드입니다. 서버 작업은 아래의 서버 부분에서 하세요.
        // 아래의 블럭은 주석으로 남겨둠
        // teamB++;
        // checkWin();
        // updateUI();

        
        // JS → 서버 요청 → 서버가 점수 증가 → 결과 받기  : 이제부터 teamB++;teamA++;같은 로컬 변경 금지
     
  
            
            isRunning = true;

            fetch("update_score.php", {
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({team: "B"})
            })
            .then(res => res.json())     
            // 화살표 함수 (Arrow Function) 입니다.  function hello() {return "안녕";} [일반함수] 
            // const hello = () => {  return "안녕"; };   => 더쉬운 표현   : const hello = () => "안녕";
            .then(data => {

                teamA = data.teamA;
                teamB = data.teamB;
                gameOver = data.gameOver;

                checkWin();
                updateUI();
            })
            .finally(() => {
                isRunning = false;
            });
       
        
    });// B팀 점수 클릭 (증가) 의 끝

    // A팀 점수 감소 버튼
    document.getElementById("teamA_minus").onclick = () => {
        if (gameOver) return;
        if (teamA > 0) teamA--;
        updateUI();
    };

    document.getElementById("teamB_minus").onclick = () => {
        if (gameOver) return;
        if (teamB > 0) teamB--;
        updateUI();
    };

    // RESET
    document.getElementById("reset_score").onclick = resetGame;

    // 다음 경기
    document.getElementById("next_game").onclick = nextGame;

    // 점수 설정  -> max score의 id를 불러와서 이벤트를 듣는것을 붙이는데 그 이벤트는 변경이되는 이벤트이고 그것이 발생하면 함수를 실행해라.
    document.getElementById("max_score").addEventListener("change", function () {
        maxScore = Number(this.value); 
        // this : 지금 이 코드를 실행한 HTML 요소 , value = 그 요소의 “선택된 값”
        resetGame();
    });

    updateUI();
}

////////////////////(승리 판단)//////////////////////////////////////////

function checkWin() {
    if (gameOver) return;

    if ((teamA >= maxScore || teamB >= maxScore) &&
        Math.abs(teamA - teamB) >= 2) {

        gameOver = true;

        statusBox.innerText =
            (teamA > teamB ? "Team A WIN!" : "Team B WIN!");

        statusBox.style.color = "red";
    }
}


////////////////////// UI 업데이트//////////////////////////////////////


function updateUI() {
    scoreA.innerText = teamA;
    scoreB.innerText = teamB;

    if (!gameOver) {
        statusBox.innerText = "경기 중";
        statusBox.style.color = "green";
    }

    if (teamA === 0 && teamB === 0 && !gameOver) {
        statusBox.innerText = "경기 시작전";
        statusBox.style.color = "gray";
    }

    gameNo.innerText = currentGame;
}


////////////////////// Reset 기능//////////////////////////////////////
function resetGame() {
    teamA = 0;
    teamB = 0;
    gameOver = false;

    updateUI();  // 위쪽에 있음. 
}


///////////////////// 다음 경기 //////////////////////////////////////
function nextGame() {
    currentGame++;
    resetGame();   // 바로위에 있음
}
