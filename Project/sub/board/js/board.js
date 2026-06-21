
// console.log("JS 연결 성공");성공

// 


//     window.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("searchInput")
//     .addEventListener("keydown", function(e){
//         if(e.key === "Enter"){
//             searchBoard();
//         }
//     });
// });

// alert();

//////////////


///////////////
function loaded(){

    // check_login();
    // loadBoard_default();


    const params = new URLSearchParams(location.search);
    searchKeyword = params.get("search") || "";


    const input = document.getElementById("searchInput");
    let timer;

    input.addEventListener("input", () => {
        clearTimeout(timer);
        timer = setTimeout(searchBoard, 300);
    });


    document.getElementById("searchInput")
    .addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        searchBoard();
    }
});
    
    document.getElementById("searchInput").value = searchKeyword;
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
            // alert('보드1');
            var row = "";
            row ="<tr>";
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


    
var currentPage = 1;
var board_num_per_page=3;
var totalPage = 0;   // 추가
var groupPage = 5;
var startPage = 0;
var endPage = 0;

var searchKeyword = "";

function loadBoard_pagination(){
    // currentPage = page;

    // alert('test');

 
        // currentPage = Number(
        //     document.querySelector('.btn.selected').textContent 
        //     // 문자열 "2"를 숫자 2로 변환
        // );

    
    // 브라우저에서:
    // loadBoardList2.php?currentPage=1&board_num_per_page=3
    // fetch(`./backend/loadBoardList2.php?currentPage=${currentPage}&board_num_per_page=${board_num_per_page}`)
    
    fetch(`./backend/loadBoardList2.php?currentPage=${currentPage}&board_num_per_page=${board_num_per_page}&search=${searchKeyword}`)
    // fetch(`./backend/getBoardList2.php?page=${page}`)
    // .then(res => res.json())
    // .then(json => {
    // fetch(`./backend/loadBoardList2.php`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){



        const totalAll = json.totalAll;   // 전체 31
        const totalSearch = json.total;   // 검색 결과 4
        // board_num_per_page=3;
        // totalPage= Math.ceil(json.total/board_num_per_page);
        totalPage = Math.ceil(totalSearch / board_num_per_page);
        // alert(currentPage);
        // console.log(currentPage);  





        var p = document.querySelector('.board_title>p'); 
         p.innerHTML =
        //   `자유롭게 게시글을 작성하여 이야기를 나누세요.
        // [전체 게시글 수 : ${totalAll}]
        // [검색 결과 수 : ${totalSearch}]`;
        `게시판 전체 ${totalAll}개 / 검색 결과 ${totalSearch}개`;
        //  var p = document.querySelector('.board_title>p'); 
        //  p.innerHTML = "자유롭게 게시글을 작성하여 이야기를 나누세요.[총 게시글 수 : " + json.total + "]";
        //  브라우저에서 F12로 콘솔창에 옆의 명령을 이용해서 확인 console.log(document.querySelector('.board_title>p'));

        if(json.data.length === 0){
                document.querySelector('.board_list').innerHTML =
                    "<tr><td colspan='5'>검색 결과 없음</td></tr>";
                    return;
            }
     
        document.querySelector('.board_list').innerHTML = `
                    <tr class="colum_title">
                        <th class="col_no">번호</th>
                        <th class="col_title">제목</th>
                        <th class="col_writer">글쓴이</th>
                        <th class="col_date">작성일</th>
                        <th class="col_hits">조회</th>
                    </tr>
                    `;

        //  var row="";
        // for( board of json.data){ 
        // for(var i=0 ; i < json.data.length && i < board_num_per_page ; i++){
        for(var i=0 ; i < json.data.length ; i++){
            //board_num_per_page 가 loadBoard2.php에서 내려오고 있기에 
            // for(var i=0 ; i < json.data.length && i < board_num_per_page ; i++){ 게 안써도 됨
            var row = "";
            
            // row ="<tr>";
            // row +=`<td class="col_no">${board.no}</td>`;
            // row +=`<td class="col_title"><a href="./board/view.html?no=${board.no}">${board.title}</a></td>`;
            // row +=`<td class="col_writer">${board.writer}</td>`;
            // row +=`<td class="col_date">${board.date}</td>`;
            // row +=`<td class="col_hits">${board.hits}</td>`;
            // row +="</tr>";



            row ="<tr>";
            row +=`<td class="col_no">${json.data[i].no}</td>`;
            row +=`<td class="col_title"><a href="./board/view.html?no=${json.data[i].no}">${json.data[i].title}</a></td>`;
            row +=`<td class="col_writer">${json.data[i].writer}</td>`;
            row +=`<td class="col_date">${json.data[i].date}</td>`;
            row +=`<td class="col_hits">${json.data[i].hits}</td>`;
            row +="</tr>";
        
            document.getElementsByClassName('board_list')[0].innerHTML +=row;           
        
            }           
            // alert('');
            //  document.querySelector('.board_list').innerHTML += row;
       

        // renderPagination(json.totalCount, page);
        // renderPagination(totalPage, page);
        renderPagination(totalPage,board_num_per_page,currentPage);
    })


}

// function renderPagination(totalCount, currentPage){
function renderPagination(totalPage,board_num_per_page , currentPage){

    // const perPage = board_num_per_page;                 // 한 페이지 글 수
    // const totalPage = Math.ceil(totalCount / perPage);  // NaN
    // alert(totalPage);
    // console.log(totalPage);
    




    startPage = Math.floor((currentPage - 1) / groupPage) * groupPage + 1;
    endPage = startPage + groupPage - 1;

    if(endPage > totalPage){
        endPage = totalPage;
    }


    let html = "";

    
    // html += "<a href=''> &lt;&lt; </a>";
    html += "<a href='' class='btn' onclick='firstPage(); return false;'> &lt;&lt; </a>";
    // html += "<a href='' class='btn'> &lt; </a>";
    html += "<a href='' class='btn' onclick='prevPage(); return false;'> &lt; </a>";
    // for(let i = 1; i <= totalPage; i++){
    for(let i = startPage; i <= endPage; i++){
        // alert('totalPage');
        // alert('totalPage');
        // console.log(totalPage);
        

        // if(i === currentPage){
        //     html += `<strong>${i}</strong> `;
        // }else{
            // html += `<a href="#" onclick="loadBoard(${i})">${i}</a> `;
            // html += `<a href="#" onclick="loadBoard_pagination(${i})">${i}</a> `;



                // for(var j=0; j<totalPage ; j++)
                // {
                    // var j=0;
                    // if(i === (totalPage))
                    // {
                    //     if(i === currentPage ){
                    //         html += `<a href='' class='btn selected'> ${i} </a>`;
                    //     }else{
                    //         html += `<a href='' class='btn '> ${i} </a>`;

                    //     }
                      
                    // }else{
                    //     if(i === currentPage ){
                    //         html += `<a href='' class='btn selected'> ${i} </a>`;
                    //     }else{
                    //         html += `<a href='' class='btn '> ${i} </a>`;

                    //     }             
                        

                    // }
                    



                    if(i === currentPage){
                        html += `<a href='' class='btn selected' onclick='changePage(${i}); return false;'>${i}</a>`;
                        
                    }
                    else{
                        html += `<a href='' class='btn' onclick='changePage(${i}); return false;'>${i}</a>`;
                    }
                    
                // }
            
            

        // }
    }
    // html += "<a href='' class='btn'> &gt; </a>";
    html += "<a href='' class='btn' onclick='nextPage(); return false;'> &gt; </a>";
    // html += "<a href=`` class=`btn`> &gt;&gt; </a>";
    html += "<a href='' class='btn' onclick='lastPage(); return false;'> &gt;&gt; </a>";

    document.querySelector(".board_pagination").innerHTML = html;
}

function changePage(page){
    currentPage = page;
    loadBoard_pagination();
}


function firstPage(){

        currentPage=1;
        loadBoard_pagination();
    
}



function prevPage(){
    if(currentPage > 1){
        currentPage--;
        loadBoard_pagination();
    }
}

function nextPage(){
    if(currentPage < totalPage){
        currentPage++;
        loadBoard_pagination();
    }
}

function lastPage(){

        currentPage=totalPage;
        loadBoard_pagination();
    
}



// function searchBoard(){
//     const keyword = document.getElementById("searchInput").value;
//     alert('tttt');

//     fetch(`../backend/loadBoardList2.php?search=${keyword}`)
//     .then(res => res.json())
//     .then(json => {
//         renderBoardList(json.data);
//     });
// }

function searchBoard(){
    // searchKeyword = document.getElementById("searchInput").value;
    // currentPage = 1;
    // loadBoard_pagination();



    searchKeyword = document.getElementById("searchInput").value;
    currentPage = 1;

    history.replaceState(null, null, `?search=${searchKeyword}`);

    loadBoard_pagination();
}