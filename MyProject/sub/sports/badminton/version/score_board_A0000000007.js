function savePlayer(){

    let formData = new FormData();

    formData.append("judgement",
        document.querySelector('[name="judgement"]').value);

    formData.append("playername1",
        document.querySelector('[name="playername1"]').value);

    formData.append("playername2",
        document.querySelector('[name="playername2"]').value);

    formData.append("playername3",
        document.querySelector('[name="playername3"]').value);

    formData.append("playername4",
        document.querySelector('[name="playername4"]').value);

    fetch("save_player.php",{
        method:"POST",
        body:formData
    })
    .then(response=>response.text())
    .then(data=>{
        alert("저장 완료");
    });
}