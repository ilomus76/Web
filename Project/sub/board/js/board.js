
// console.log("JS 연결 성공");성공

// alert();
function loaded(){
    // alert();

    // check_login();

    fetch('./backend/loadBoardList.php')
    .then(function(response){
        return response.text();
        })
    .then(function(text){

        var json = JSON.parse(text);


          console.log(json.data.length);
          console.log(json.data);
        var p = document.querySelector('.board_title>p'); 
        p.innerHTML = "자유롭게 게시글을 작성하여 이야기를 나누세요.[총 게시글 수 :] " + json.total + "]";

        for( board of json.data){ 
            var row = "";
            row +="<tr>";
            row +=`<td class="col_no">${board.no}</td>`;
            row +=`<td class="col_title"><a href="./board/view.html?no=${board.no}">${board.title}</a></td>`;
            row +=`<td class="col_writer">${board.writer}</td>`;
            row +=`<td class="col_date">${board.date}</td>`;
            row +=`<td class="col_hits">${board.hits}</td>`;
            row +="</tr>";
        
            document.getElementsByClassName('board_list')[0].innerHTML +=row;           
        
            }           
            
        })     
} 

    // function check_login(){
    //     var reg_ino = document.querySelector('#reg');
    //         reg_ino.addEventListener('click', function(event){ //event정보를 가진 객체
    //             var s= `영역안의 좌표 : ${event.offsetX} , ${event.offsetY}<br>`;
    //             s += `문서안의 좌표 : ${event.clientX} , ${event.clientY}<br>`;
    //             s += `모니터의 좌표 : ${event.screenX} , ${event.screenY}<br>`;

    //             div.innerHTML= s;
    //         )
    // }

  

