// score_board.js (기초 버전)

let teamA = 0;
let teamB = 0;
let gameOver = false;
let maxScore = 21;
let currentGame = 1;
let isRunning = false;
let gameId = 1;

// DOM
let scoreA, scoreB, statusBox, gameNo;

// 시작
window.addEventListener("DOMContentLoaded", init);   // addEventListener(메세지 이벤트 , 실행함수)

function init() {
    scoreA = document.querySelector("#team_A .score");
    scoreB = document.querySelector("#team_B .score");
    statusBox = document.getElementById("game_status");
    gameNo = document.getElementById("game_no");



    // resetGame();
    // loadScore();


    document.getElementById("player_form").addEventListener("submit", saveInfo);



   

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

            
            console.log("fetch 시작: A 버튼 클릭됨");
            fetch("update_score.php", {
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                // body: JSON.stringify({team: "A"})
                body: JSON.stringify({
                    gameId: gameId,
                    team: "A",
                    action: "plus"
                })             
                
            })
            .then(res => {      
                console.log("응답 받음:", res);
                return res.json();      // res: response , response가 json()형태로 올것이다..

                
            })    
            .then(data => {

                console.log("서버 응답:", data);
                teamA = data.teamA;
                teamB = data.teamB;
                gameOver = data.gameOver;

                console.log("전체 응답:", data);
                console.log("result:", data.result);

                checkWin();
                updateUI();


                
            })
            .catch(err => {
                console.error("에러 발생:", err);
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
            console.log("fetch 시작: B 버튼 클릭됨");
            fetch("update_score.php", {
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                // body: JSON.stringify({team: "B"})
                body: JSON.stringify({
                    gameId: gameId,
                    team: "B",
                    action: "plus"
                })   
                
            })
            .then(res => {
                console.log("응답 받음:", res);
                return res.json();
            })     
            // 화살표 함수 (Arrow Function) 입니다.  function hello() {return "안녕";} [일반함수] 
            // const hello = () => {  return "안녕"; };   => 더쉬운 표현   : const hello = () => "안녕";
            .then(data => {
                console.log("서버 응답:", data);
                teamA = data.teamA;
                teamB = data.teamB;
                gameOver = data.gameOver;

                console.log("전체 응답:", data);
                console.log("result:", data.result);

                checkWin();
                updateUI();
            })
            .catch(err => {
                console.error("에러 발생:", err);
            })
            .finally(() => {
                isRunning = false;
            });
       
        
    });// B팀 점수 클릭 (증가) 의 끝

    ///////////////////////////////////////////////////////////////////////////
    // A팀 점수 감소 버튼
    // document.getElementById("teamA_minus").onclick = () => {
    //     if (gameOver) return;
    //     if (teamA > 0) teamA--;
    //     updateUI();
    // };
    document.getElementById("teamA_minus").onclick = () => {

        if (gameOver || isRunning) return;

        isRunning = true;

        fetch("update_score.php", { 
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                gameId: gameId,
                team: "A",
                action: "minus"
            })
        })
        .then(res => res.json())
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
    };

        ////




    // document.getElementById("teamB_minus").onclick = () => {
    //     if (gameOver) return;
    //     if (teamB > 0) teamB--;
    //     updateUI();
    // };

    document.getElementById("teamB_minus").onclick = () => {

    if (gameOver || isRunning) return;

    isRunning = true;

    fetch("update_score.php", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            gameId: gameId,
            team: "B",
            action: "minus"
        })
    })
    .then(res => res.json())
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
};


//////////////////////////////////////////////////////////////////

    // RESET
    // document.getElementById("reset_score").onclick = resetGame;
    document.getElementById("reset_score").onclick = () => {
    if (gameOver) return;
    resetGame();
    };



    // 다음 경기
    document.getElementById("next_game").onclick = nextGame;

    // 점수 설정  -> max score의 id를 불러와서 이벤트를 듣는것을 붙이는데 그 이벤트는 변경이되는 이벤트이고 그것이 발생하면 함수를 실행해라.
    document.getElementById("max_score").addEventListener("change", function () {
        maxScore = Number(this.value); 
        // this : 지금 이 코드를 실행한 HTML 요소 , value = 그 요소의 “선택된 값”
        resetGame();
    });

    // updateUI();
    // fetch("load_score.php")
    // .then(response => response.json())
    // .then(data => {

    //     teamA = data.teamA;
    //     teamB = data.teamB;
    //     gameOver = data.gameOver;
    //     maxScore = data.maxScore;

    //     // updateUI();
        
    //     loadScore();                  // 시작 시 한 번 읽기
    //     setInterval(loadScore, 1000); // 주기적으로 읽기
        
    // });

    // loadScore();                  // 시작 시 한 번 읽기
    // setInterval(loadScore, 1000); // 주기적으로 읽기

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


// function updateUI() {
//     scoreA.innerText = teamA;
//     scoreB.innerText = teamB;

//     if (!gameOver) {
//         statusBox.innerText = "경기 중";
//         statusBox.style.color = "green";
//     }

//     if (teamA === 0 && teamB === 0 && !gameOver) {
//         statusBox.innerText = "경기 시작전";
//         statusBox.style.color = "gray";
//     }

//     gameNo.innerText = currentGame;
// }


function updateUI() {

    scoreA.innerText = teamA;
    scoreB.innerText = teamB;

    if (gameOver) {

        statusBox.innerText =
            (teamA > teamB ? "Team A WIN!" : "Team B WIN!");

        statusBox.style.color = "red";
    }
    else if (teamA === 0 && teamB === 0) {

        statusBox.innerText = "경기 시작전";
        statusBox.style.color = "gray";
    }
    else {

        statusBox.innerText = "경기 중";
        statusBox.style.color = "green";
    }

    gameNo.innerText = currentGame;
}

///////////////////////  점수 불러오기 ////////////////////////////////////////////


function loadScore() {

    // fetch("load_score.php")
    fetch("load_score.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            gameId: gameId
        })
    })
        .then(res => res.json())
        .then(data => {

            teamA = data.teamA;
            teamB = data.teamB;
            gameOver = data.gameOver;
            // maxScore = data.maxScore;

            

            updateUI();
        });
}

////////////////////// Reset 기능//////////////////////////////////////
// function resetGame() {

//     // if (gameOver) return;   // 경기 종료 시 Reset 금지

//     // teamA = 0;
//     // teamB = 0;
//     // gameOver = false;
//     // fetch("reset_score.php")


//     // fetch("reset_game.php")
//        fetch("reset_game.php", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             // body: JSON.stringify({
//             //     maxScore: maxScore
//             // })
//             body: JSON.stringify({
//             gameId: gameId
//             // maxScore: maxScore
//             })
//         })
//         .then(response => response.json())
//         .then(data => {

//             console.log("reset 응답:", data);

//             teamA = data.teamA;
//             teamB = data.teamB;
//             gameOver = data.gameOver;

//             console.log(teamA, teamB, gameOver);

//             // updateScore();
//             updateUI();  // 위쪽에 있음. 
//             return data;
//         })
//         .catch(err => {
//                 console.error(" reset 에러 발생 :", err);
//             })


//             // updateUI();

//             // resetGame();
//             // loadScore();
//             // resetGame().then(() => loadScore());
//             // resetGame().then(loadScore)
// }


function resetGame() {

    return fetch("reset_game.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            gameId: gameId
        })
    })
    .then(res => res.json())
    .then(data => {

        teamA = data.teamA;
        teamB = data.teamB;
        gameOver = data.gameOver;

        updateUI();

        return data;
    });
}
///////////////////// 다음 경기 //////////////////////////////////////
function nextGame() {
    currentGame++;
    gameOver = false;


    // 입력창 다시 활성화
    document.getElementById("judgement").disabled = false;
    document.getElementById("player_name1").disabled = false;
    document.getElementById("player_name2").disabled = false;
    document.getElementById("player_name3").disabled = false;
    document.getElementById("player_name4").disabled = false;
    document.getElementById("max_score").disabled = false;

    // 기존 입력값 지우기(선택사항)
    document.getElementById("judgement").value = "";
    document.getElementById("player_name1").value = "";
    document.getElementById("player_name2").value = "";
    document.getElementById("player_name3").value = "";
    document.getElementById("player_name4").value = "";

    // 아래 표시 영역도 초기화(선택사항)
    document.getElementById("judge_view").innerText = "";
    document.getElementById("teamA_player_view").innerText = "";
    document.getElementById("teamB_player_view").innerText = "";

    // resetGame();   // 바로위에 있음
    // resetGame().then(() => loadScore());
    resetGame().then(() => {
        updateUI();
});

}



////////////////// 정보 저장 /////////////////////////

function saveInfo(event) {

    // submit 후 페이지 새로고침 방지
    event.preventDefault();

    let judge = document.getElementById("judgement").value;
    let playerA = document.getElementById("player_name1").value + "," + document.getElementById("player_name2").value;
    let playerB = document.getElementById("player_name3").value + "," + document.getElementById("player_name4").value;


    fetch("set_config.php", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            gameId: gameId,
            maxScore: Number(document.getElementById("max_score").value)
        })
    })
    // fetch("set_config.php", ...)
    .then(() => {
        updateUI();
    });

    // maxScore = Number(document.getElementById("max_score").value);
    // resetGame();   // 서버에 maxScore 저장

    // 아래 표시 영역 갱신
    document.getElementById("judge_view").innerText = "심판 : " + judge;
    document.getElementById("teamA_player_view").innerText ="A팀 : " + playerA;
    document.getElementById("teamB_player_view").innerText ="B팀 : " + playerB;
    // 입력창 잠금
    document.getElementById("judgement").disabled = true;
    document.getElementById("player_name1").disabled = true;
    document.getElementById("player_name2").disabled = true;
    document.getElementById("player_name3").disabled = true;
    document.getElementById("player_name4").disabled = true;
    document.getElementById("max_score").disabled = true;
}

