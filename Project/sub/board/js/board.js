
// console.log("JS 연결 성공");성공

// alert();
function loaded(){

    // check_login();
    // loadBoard_default();

    loadBoard_pagination();

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






function loadBoard_default(){

    
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


    
var currentPage = 0;
function loadBoard_pagination(page = 1){
    currentPage = page;

    

    fetch(`./backend/loadBoardList2.php?page=${page}`)
    // fetch(`./backend/getBoardList2.php?page=${page}`)
    .then(res => res.json())
    .then(json => {



         var p = document.querySelector('.board_title>p'); 
        p.innerHTML = "자유롭게 게시글을 작성하여 이야기를 나누세요.[총 게시글 수 :] " + json.total + "]";

        var row="";
        for( board of json.data){ 
            var row = "";

            row ="<tr>";
            row +=`<td class="col_no">${board.no}</td>`;
            row +=`<td class="col_title"><a href="./board/view.html?no=${board.no}">${board.title}</a></td>`;
            row +=`<td class="col_writer">${board.writer}</td>`;
            row +=`<td class="col_date">${board.date}</td>`;
            row +=`<td class="col_hits">${board.hits}</td>`;
            row +="</tr>";
        
            // document.getElementsByClassName('board_list')[0].innerHTML +=row;           
        
            }           
            // alert('');
             document.querySelector('.board_list').innerHTML = row;
       

        renderPagination(json.totalCount, page);
    });
}
  
function renderPagination(totalCount, currentPage){

    const perPage = 5;                 // 한 페이지 글 수
    const totalPage = Math.ceil(totalCount / perPage);

    let html = "";

    for(let i = 1; i <= totalPage; i++){

        if(i === currentPage){
            html += `<strong>${i}</strong> `;
        }else{
            html += `<a href="#" onclick="loadBoard(${i})">${i}</a> `;
        }
    }

    document.querySelector("#pagination").innerHTML = html;
}

