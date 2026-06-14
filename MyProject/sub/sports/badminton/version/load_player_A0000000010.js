// score_board_A0000000010

window.onload = loaded;

let teamA = 0;
let teamB = 0;


function loaded(){

    let form = document.getElementById("player_form");

    form.addEventListener("submit", savePlayer);




    document.querySelector("#team_A").onclick = function(){

    teamA++;
    updateScore();
    saveScore();

    };

    document.querySelector("#team_B").onclick = function(){

    teamB++;
    updateScore();
    saveScore();

    };


    document.querySelector("#teamA_minus").onclick = function(){

        if(teamA > 0){

            teamA--;

            updateScore();

            saveScore();
        }

    };

    document.querySelector("#teamB_minus").onclick = function(){

        if(teamB > 0){

            teamB--;

            updateScore();

            saveScore();
        }

    };
    
    document.querySelector("#reset_score").onclick = function(){

        teamA = 0;

        teamB = 0;

        updateScore();

        saveScore();

    };




    loadPlayer();     // 추가
    loadScore();

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

    fetch("save_player.php",{

        method : "POST",
        body : formData

    })
    .then(response => response.text())
    .then(data => {

        // alert("저장 완료");
        loadPlayer();

    });

}

//////////////////


function loadPlayer(){

    fetch("load_player.php")

    .then(response => response.json())

    .then(data => {

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

    });

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

    formData.append("teamA", teamA);
    formData.append("teamB", teamB);

    fetch("save_score.php", {
        method: "POST",
        body: formData
    });
}


function loadScore() {

    fetch("load_score.php")

    .then(response => response.json())

    .then(data => {

        teamA = Number(data.teamA);
        teamB = Number(data.teamB);

        updateScore();

    });
}