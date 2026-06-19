


// 상세글 보기 화면은.. 목록에서 선택될때.. 게시글 번호(no)를 URL로 전달받음. 

//url로 전달된 no값 취득하기..
// alert( window.location.href); // 모든 경로 나옴.... 
// alert(window.location.search); // ? 뒤에 전달된 파라미터 값들.. 만 선택됨. 그래서 no=4를 찾을 수 있다.  =가 기준으로 번호숫자...


// 번호 숫자만 필요하니... '='글자를 기준으로 분리
var no = location.search.split('=')[1];

// no=4를 쪼개서 no, 4로 배열로 만들거야..

//확인
// alert(no);

// 서버의 web_board 테이블에서 no번호에 해당하는 게시글 1개를 json형식으로 받기..
var url = `../backend/getBoard.php?no=${no}`;
// var url = `../backend/getBoard.php?no=${no}&page=${page}`;

fetch(url) // GET 방식으로 할거다... 
// .then(function(res){return res.text()})
.then(function(res){return res.json()})
// .then(function(text){
.then(function(json){
    // alert(text)
    // alert(json.text)

      if (json.status === "fail") {
        alert("로그인이 필요합니다.");

        location.replace("../../login/login.html");
        // location.href = "../../login/login.html";
        // 즉시 이동이 아니라 “예약 이동

        return;
    }


      // const list = json.list;

      //   let html = "";

      //   list.forEach(item => {
      //       html += `
      //           <li>
      //               <a href="./view.html?no=${item.no}">
      //                   ${item.title}
      //               </a>
      //           </li>
      //       `;
      //   });

      //   document.querySelector("#boardList").innerHTML = html;

      //   renderPagination(data.totalCount, page)



    // var jason = JSON.parse(text); // jsson string 을 JS객체로 만들기.. 이거 너무 지겨움. => .text()를 json()으로.

    // 이제 get board.php 만 만들면 된다...  

    // 여기로 와서...

    // 데이터를 HTML요소들에 쓰자..
    //1] 글 제목
    document.querySelectorAll('.board_view .title')[0].innerHTML=json.title;

    ///2] 글 번호
    document.querySelectorAll('.board_view .info .col1')[0].innerHTML=json.no;

    // 클래스 선택자로 선택될 요소가 1개라면..all을 사용하지 않아도 됨. 

    document.querySelector('.board_view .info .col2').innerHTML=json.writer;
    document.querySelector('.board_view .info .col3').innerHTML=json.date;
    document.querySelector('.board_view .info .col4').innerHTML=json.hits;
    document.querySelector('.board_view .content').innerHTML=json.msg; 
    //완료.. 서버에 업로드
})

