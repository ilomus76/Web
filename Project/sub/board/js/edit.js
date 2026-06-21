

    var no = location.search.split("=")[1];

    fetch(`../backend/getBoard.php?no=${no}`)
    .then(res => res.json())
    .then(json => {

        document.querySelector("#title").value = json.title;
        document.querySelector("#msg").value = json.msg;

    });






function updateBoard(){

    let title = document.querySelector("#title").value;
    let msg = document.querySelector("#msg").value;

    fetch("../backend/updateBoard.php",{

        method : "POST",

        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },

        body :
            `no=${no}&title=${encodeURIComponent(title)}&msg=${encodeURIComponent(msg)}`
    })
    .then(res => res.text())
    .then(text=>{

        alert("수정 완료");

        location.href = `./view.html?no=${no}`;

    });

}