// score_board_A0000000011

window.onload = loaded;

let teamA = 0;
let teamB = 0;
let currentGame = 1;
let form;
let maxScore =21;
let gameOver = false;
let configLocked = false;  // ⭐ 설정 완료 여부



function loaded(){

    form = document.getElementById("player_form");
    if (form) {
        form.addEventListener("submit", savePlayer);
    // form.addEventListener("submit", savePlayer);
    }   


     // ⭐ 여기부터 추가
    // const teamABox = document.querySelector("#team_A .score_area");
    // const teamBBox = document.querySelector("#team_B .score_area");

    // if (teamABox) {
    //     teamABox.addEventListener("click", (e) => {
    //         if (isGameOver()) return;

    //         teamA++;
    //         updateScore();
    //         saveScore();
    //     });
    // }

    // if (teamBBox) {
    //     teamBBox.addEventListener("click", (e) => {
    //         if (isGameOver()) return;

    //         teamB++;
    //         updateScore();
    //         saveScore();
    //     });
    // }


    // ⭐ 여기까지

    document.getElementById("max_score").addEventListener("change", function(){
        maxScore = Number(this.value);
        // maxScore = Number(this.value || 21);
        saveScore();   // ⭐ 이거 반드시 필요
        checkGameOver();
        updateGameStatus();
        updateScore();
        applyLockState();
        
    });



    // document.querySelector("#team_A .score_area").onclick = function(e){
    document.querySelector("#team_A .score_area").addEventListener("click", (e) => {
        e.stopPropagation();

        // if (!configLocked) return;   // ⭐ 핵심 차단
        if (!configLocked) {
            alert("심판 / 선수 / 최대점수를 입력한 후 확인 버튼을 눌러주세요.");
            return;
        }




        // if (gameOver) return;
        if (isGameOver()) return;
        if (teamB + 1 > maxScore) return;

        teamA++;
        checkGameOver();
        updateScore();
        updateGameStatus();
        saveScore();
    });

    // document.querySelector("#team_A .score").parentElement.onclick
    // document.querySelector("#team_A .score_area").onclick = function(){
    // document.querySelector("#team_A .score_area").parentElement.onclick = function(){
    // document.querySelector("#team_A").onclick = function(){



    // document.querySelector("#team_B .score_area").parentElement.onclick = function(){
    // document.querySelector("#team_A .score_area").parentElement.onclick = function(){
    // document.querySelector("#team_B").onclick = function(){
    // document.querySelector("#team_B .score_area").onclick = function(e){
    // document.querySelector("#team_A .score_area").addEventListener("click", (e) => {
    document.querySelector("#team_B .score_area").addEventListener("click", (e) => {

        // if (!configLocked) return;   // ⭐ 핵심 차단
        if (!configLocked) {
            alert("심판 / 선수 / 최대점수를 입력한 후 확인 버튼을 눌러주세요.");
            return;
        }

        //   if (gameOver) return;
        if (isGameOver()) return;
        if (teamB + 1 > maxScore) return;
      

        teamB++;
        checkGameOver();
        updateScore();
        updateGameStatus();
        saveScore();

    });




    const btnA = document.getElementById("teamA_minus");
    const btnB = document.getElementById("teamB_minus");

    if (!btnA || !btnB) {
        console.error("버튼 없음 - HTML 확인 필요");
    return;
}
    // if (!document.getElementById("teamA_minus")) console.error("A 버튼 없음");
    // if (!document.getElementById("teamB_minus")) console.error("B 버튼 없음");
    document.getElementById("teamA_minus").onclick = minusTeamA;
    document.getElementById("teamB_minus").onclick = minusTeamB;
    document.getElementById("reset_score").onclick = resetScore;
    document.getElementById("next_game").onclick = nextGame;

    loadPlayer();     // 추가
    loadScore();

}



function minusTeamA(){

    if (isGameOver()) return;

    if(teamA > 0){

        teamA--;

        updateScore();

        saveScore();
    }
}


function minusTeamB(){

    if (isGameOver()) return;

    if(teamB > 0){

        teamB--;

        updateScore();

        saveScore();
    }
}



function resetScore(){

    // gameOver = false;
    // document.getElementById("game_status").innerText = "경기 중";

    if (gameOver) {
    // if (isGameOver()) {
        alert("경기가 종료되어 초기화할 수 없습니다.");
        return;
    }

    teamA = 0;
    teamB = 0;
    gameOver = false;

    updateScore();
    updateGameStatus();
    // applyLockState();
    saveScore();

    // ⭐ 중요: 설정 다시 열기
    unlockGameConfig();
    
}


function nextGame(){



    // 1. 경기 상태 초기화
    gameOver = false;
    // document.getElementById("game_status").innerText = "경기 중";

    // 2. 경기 번호 증가
    currentGame++;    

    // 3. 점수 초기화
    teamA = 0;
    teamB = 0;
    // gameOver = false;



    
    // 4. 설정 초기화 (핵심)
    // maxScore = 21;

    const judge = document.querySelector('[name="judgement"]');
    const p1 = document.querySelector('[name="playername1"]');
    const p2 = document.querySelector('[name="playername2"]');
    const p3 = document.querySelector('[name="playername3"]');
    const p4 = document.querySelector('[name="playername4"]');
    const maxInput = document.getElementById("max_score");

    if (judge) judge.value = "";
    if (p1) p1.value = "";
    if (p2) p2.value = "";
    if (p3) p3.value = "";
    if (p4) p4.value = "";

    if (maxInput) maxInput.value = 21;



    // 5. 화면 업데이트 /UI 업데이트    
    document.getElementById("game_no").innerText = currentGame;

    updateScore();
    updateGameStatus();

    // 5-2. ⭐ 중요: 설정 다시 열기
    configLocked = false;
    unlockGameConfig();

    // 6. 점수 클릭 다시 활성화 , 점수판 다시 활성화
    document.querySelector("#team_A .score_area").style.pointerEvents = "auto";
    document.querySelector("#team_B .score_area").style.pointerEvents = "auto";


    // 6-2. ⭐ 아래 정보 다시 표시 (핵심)
    document.getElementById("judge_view").innerText = "심판 : ";
    document.getElementById("teamA_player_view").innerText = "Team A : ";
    document.getElementById("teamB_player_view").innerText = "Team B : ";

    // 7. 설정 다시 입력 가능하게
    // configLocked = false;
    // // 6. 설정 영역 다시 활성화 (핵심)
    // unlockGameConfig();

      // 8. 저장
    saveScore(); // gameOver = 0으로 같이 저장됨

    loadPlayer();
}








function savePlayer(event){

    event.preventDefault();

    let formData = new FormData();

    formData.append(
        "judgement",
        document.querySelector('[name="judgement"]').value
    );

    formData.append(
        "playername1",
        document.querySelector('[name="playername1"]').value
    );

    formData.append(
        "playername2",
        document.querySelector('[name="playername2"]').value
    );

    formData.append(
        "playername3",
        document.querySelector('[name="playername3"]').value
    );

    formData.append(
        "playername4",
        document.querySelector('[name="playername4"]').value
    );


    fetch("save_player.php", {
    // fetch("save_score.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(() => {

        // document.getElementById("player_form").reset();

        // loadPlayer();
        configLocked = true;   // ⭐ 설정 완료됨
        lockGameConfig();   // ⭐ 여기 추가
        applyConfigLockState(); // ⭐ 추가 (새로 만들 함수)

       
    })
    .catch(err => console.error("score save error:", err));



    // fetch("save_player.php",{

    //     method : "POST",
    //     body : formData

    // })
    // // .then(response => response.text())
    // .then(response => {
    //     if (!response.ok) throw new Error("Server error");
    //     return response.text();
    // })
    // .then(() => {
    // document.getElementById("player_form").reset();
    // loadPlayer();
    // })
    // .then(data => {

    //     // alert("저장 완료");
    //     // form.reset();
    //     document.getElementById("player_form").reset();
    //     loadPlayer();     

    // })
    // .catch(err => console.error("score save error:", err));
    // .catch(err => console.error("score save error:", err));
    // .catch(err => console.error(err));

}

//////////////////

function loadPlayer(){

    fetch("load_player.php")

    .then(response => response.json())

    .then(data => {

          if (data.judgement !== undefined && data.judgement !== null) {
            document.querySelector('[name="judgement"]').value = data.judgement;
        }


        document.getElementById("judge_view").innerHTML =
            "심판 : " + data.judgement;

        document.getElementById("teamA_player_view").innerHTML =
            "Team A : "
            + data.playername1
            + " / "
            + data.playername2;

        document.getElementById("teamB_player_view").innerHTML =
            "Team B : "
            + data.playername3
            + " / "
            + data.playername4;


        // ⭐⭐⭐ 핵심: input에도 다시 넣어야 함
        document.querySelector('[name="judgement"]').value = data.judgement;
        document.querySelector('[name="playername1"]').value = data.playername1;
        document.querySelector('[name="playername2"]').value = data.playername2;
        document.querySelector('[name="playername3"]').value = data.playername3;
        document.querySelector('[name="playername4"]').value = data.playername4;

    });

    updateGameStatus();
}








function updateScore(){

    document.querySelector("#team_A .score").innerText = teamA;
    document.querySelector("#team_B .score").innerText = teamB;

}

// fetch("load_player.php")
// .then(response=>response.json())
// .then(data=>{

//     document.getElementById("judge_name").innerText =
//         data.judgement;

// });



function saveScore() {

    let formData = new FormData();

    formData.append("game", currentGame);
    formData.append("teamA", teamA);
    formData.append("teamB", teamB);
    formData.append("gameOver", gameOver ? 1 : 0);
    formData.append("maxScore", maxScore);

    fetch("save_score.php", {
        method: "POST",
        body: formData
    });
}



function loadScore() {


//    maxScore = Number(data.maxScore ?? 21);
//     document.getElementById("max_score").value = maxScore; 

    fetch("load_score.php")
    .then(response => response.json())
    .then(data => {

        // currentGame = data.game;
        // teamA = Number(data.teamA);
        // teamB = Number(data.teamB);
        

        currentGame = Number(data.game ?? 1);
        teamA = Number(data.teamA ?? 0);
        teamB = Number(data.teamB ?? 0);
        maxScore = Number(data.maxScore ?? 21);  
        document.getElementById("max_score").value = maxScore;      
          // ⭐ 여기 넣는 게 정답
        gameOver = Number(data.gameOver ?? 0) === 1;        
        document.getElementById("game_no").innerText = currentGame;
        

        // gameOver = false;       
        // gameOver = Number(data.gameOver) === 1;

       // ⭐ 1. 점수 먼저 반영
        updateScore();   // ← 상태 재판정

        // ⭐ 2. 상태 판단
        updateGameStatus();

        // ⭐ 3. 잠금 처리
        applyLockState();

        // ⭐ 4. 마지막 (UI 영향 적은 것)
        loadPlayer();


        // updateScore();              
        // // loadScore();
        // updateGameStatus();
        // applyLockState();

        

    });
}





// function checkGameOver() {

//     if (teamA >= maxScore || teamB >= maxScore) {

//         if (Math.abs(teamA - teamB) >= 2) {
//             gameOver = true;

//             alert(
//                 (teamA > teamB ? "Team A" : "Team B") + " WIN!"
//             );
//         }
//     }
// }



function checkGameOver() {

    if (gameOver) return;

    if (teamA >= maxScore || teamB >= maxScore) {

        if (Math.abs(teamA - teamB) >= 2) {
            gameOver = true;
            updateGameStatus();   // ⭐ 상태 즉시 갱신
            applyLockState();
            alert((teamA > teamB ? "A" : "B") + " WIN");
            // return;
        }

        

        // // 최대 점수 제한
        // if (teamA === 30 || teamB === 30) {
        //     gameOver = true;
        //     alert((teamA > teamB ? "A" : "B") + " WIN (Max)");
        // }
    }
}




function updateGameStatus() {

    const status = document.getElementById("game_status");


    // if (teamA === 0 && teamB === 0 && !gameOver) {
    
    // 1) 시작 전
    if (teamA === 0 && teamB === 0 && !gameOver){
    // if (teamA === 0 && teamB === 0 && currentGame === 1 && !gameOver){
    // if (teamA === 0 && teamB === 0 && currentGame === 1) {
        status.innerText = "경기 시작전";
        status.style.color = "gray";
        return;
    }

    // 2) 경기 종료
     // 종료
    if (gameOver) {
    // if (gameOver === true) {
        status.innerText = "경기 종료";
        status.style.color = "red";
        return;
    }

    // 3) 경기 중
    status.innerText = "경기 중";
    status.style.color = "lime";
}

function isGameOver() {
    return gameOver === true;
}

function lockGame() {
    gameOver = true;
}

function unlockGame() {
    gameOver = false;
}


function lockGameConfig() {

    const form = document.getElementById("player_form");

    // 1. 모든 input 잠금
    const inputs = form.querySelectorAll("input");
    inputs.forEach(input => {
        input.disabled = true;
    });

    // 2. submit 버튼 잠금
    const buttons = form.querySelectorAll("input[type='submit']");
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    // ⭐ 3. maxScore도 잠금 (중요)
    const maxInput = document.getElementById("max_score");
    if (maxInput) {
        maxInput.disabled = true;
    }
}



function lockGameConfig() {

    const form = document.getElementById("player_form");

     // 1. 모든 input 잠금

    const inputs = form.querySelectorAll("input");

    inputs.forEach(input => {
        input.disabled = true;
    });

    // 2. submit 버튼 잠금
    const buttons = form.querySelectorAll("input[type='submit']");

    buttons.forEach(btn => {
        btn.disabled = true;
    })

    // ⭐ 3. maxScore도 잠금 (중요)
    const maxInput = document.getElementById("max_score");
    if (maxInput) {
        maxInput.disabled = true;
    };
    // .then(() => {

    // loadPlayer();

    // lockGameConfig();   // 입력칸 잠금
    // });
}



function unlockGameConfig() {

    const form = document.getElementById("player_form");

    // const inputs = form.querySelectorAll("input");

    // inputs.forEach(input => {
    //     input.disabled = false;
    // });

    form.querySelectorAll("input").forEach(input => {
        input.disabled = false;
    });

    // maxScore 포함 확실히 해제
    const maxInput = document.getElementById("max_score");
    if (maxInput) {
        maxInput.disabled = false;
    }
}


// function applyLockState() {

//     if (!gameOver) return;

//     document.querySelector("#team_A .score_area").style.pointerEvents = "none";
//     document.querySelector("#team_B .score_area").style.pointerEvents = "none";
// }


function applyLockState() {

    const a = document.querySelector("#team_A .score_area");
    const b = document.querySelector("#team_B .score_area");

    if (gameOver) {
        a.style.pointerEvents = "none";
        b.style.pointerEvents = "none";
    } else {
        a.style.pointerEvents = "auto";
        b.style.pointerEvents = "auto";
    }
}


function applyConfigLockState() {

    const inputs = document.querySelectorAll("#player_form input");

    inputs.forEach(input => {

        // score 관련 입력만 잠금
        if (
            input.name === "judgement" ||
            input.name === "playername1" ||
            input.name === "playername2" ||
            input.name === "playername3" ||
            input.name === "playername4" ||
            input.id === "max_score"
        ) {
            input.disabled = configLocked;
        }
    });

    const submitBtn = document.querySelector("#player_form input[type='submit']");
    if (submitBtn) submitBtn.disabled = configLocked;
}


function applyConfigLockState() {

    const form = document.getElementById("player_form");
    const inputs = form.querySelectorAll("input");

    inputs.forEach(input => {
        input.disabled = configLocked;
    });

    const submitBtn = form.querySelector("input[type='submit']");
    if (submitBtn) submitBtn.disabled = configLocked;

    const maxInput = document.getElementById("max_score");
    if (maxInput) maxInput.disabled = configLocked;
}