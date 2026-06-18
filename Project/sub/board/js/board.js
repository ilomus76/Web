
// console.log("JS 연결 성공");성공

// alert();
function loaded(){
    // alert();

    
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

