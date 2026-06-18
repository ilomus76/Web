// JS를 이용하여 서버에서 게시글 목록 데이터를 불러와서 HTML로 그려내는 작업을 수행할것임.
// 즉 , 가만 보니 JS를 이용하여 웹페이지(웹문서)의 DOM 요소를 생성하여 그려내는 방식을 CSR(client side rendering)이라고 부름.


// JS는 헤더에 추가되어 있고, 게시글을 추가해야 하는 table요소는 body에 있기에 
// body가 완료된 후 DOM 작업을 수행해야 함.

// 방법 2가지: 
// 1. body 요소에 onload 이벤트 적용 -내부스크립트에서 많이 사용
// 2. 외부스크립트일 경우 defer 속성을 적용

// 연습을 목적으로 .. 1번 방식으로 onload 이벤트가 발동하면 자동으로 실행될 함수 만들기.


// alert(); // 경고창이 뜨고 화면뜸
//html에 가서  <body onload="loaded()">  를 해라...
function loaded(){
    // alert(); // debug 용으로 html의 body와 loaded()함수가 연결 됬는지 확인
    // 화면이 보이고 경고창이 뜸.


    // backend 서버에서 게시글 데이터들을 받아오기 [데이터가 많기에 구별이 용이한 json 형식으로 받기]
    //sam20seoul 의 의미를 모름. 
    // 이것을 sam, 20, seoul : csv -> xml -> json 으로 업데이트 됨.

    // 먼저 web_board 테이블에서 모든 데이터를 읽어와서 json으로 응답해 주는 php코드를 작성.
    // js가 직접 backend로 front에서 가기 힘들어 backeend에 요청해서 db에 접근해야 함.

    // 어제 index.php에서 한걸 또 하겠다. backend/board 폴더 loadBoardList.php
    // loadBoardList.php 를 만들고 와라..
    // index.html을 가져와서 loadBoardList.php 가 그려주는 작업.

    // JS에서 페이지의 변경없이 서버에서 데이터만 요청하는 기법을 AJAX라고 부름.
    // 이작업을 수행해 주는 내장 함수 fetch()

    // 내려받아 fetch
    // [경로주의! js파일 기준이 아니라.. js를 연결한 .html파일의 위치를 기준으로 상대경로..], html에 붙었기 때문에...
    fetch('./backend/board/loadBoardList.php')
    .then(function(response){// 함수가 시작될거야 response를 받을 거고 그것은 2진수야 그래서 이해 못함.
        return response.text(); // 그 응답을 글자로 줘
    })
    .then(function(text){ // 그 글씨를 가지고 알아서 해... -> 파이썬의 request 역할.
        // 잘 왔는지 확인
        // alert(text);  // 파일을 서버에 올려라  -> 에러났으니 나중에 확인

        //json 형식의 데이터를 JS의 객체로 변환하여 원하는 값들을 추출 (분석-parse)

        var json = JSON.parse(text); // json 문자를 json 객체로 만들어줌.

        // s= "{'name':'sam','age':20}" ; // 이것은 글씨야 형식만 있음. 그래서 추출할수 없음. 
        
        //o = {name:'sam',age:20}  // 이건 객체   , { } 는 객체다..

        // 이 데이타를 가지고 

        //    <h2>자유 게시판</h2>
        //     <p>자유롭게 게시글을 작성하며 이야기를 나누세요.</p>
        // JS로 화면을 만들어 내기
        // 1) 게시글을 총 개수를 제목명에 표시
        var p = document.querySelector('.board_title>p'); // 자식 
        p.innerHTML = "자유롭게 게시글을 작성하며 이야기를 나누세요.[총 게시글 수 : " + json.total + "]"; 
        // json의 멤버변수와 객체 활용


        // 2) 읽어온 게시글 데이터들을 table의 하위 요소로 추가하기
        // 데이타가 여러개 이므로..반복문으로 구성.. 파이썬의 for.. in 처럼.
        // for(var i=0; i<json.total; i++){
        //     // php와 같은 양식
        // }

        for( board of json.data){ // 배열의 요소가 반복하여 추출됨  [배열 , 파이썬의 리스트]
            //table에 추가될 <tr> 요소와 데이터들을 만들기
            var row = "";
            row +="<tr>";
            row +=`<td class="col_no">${board.no}</td>`;
            row +=`<td class="col_title"><a href="./board/view.html?no=${board.no}">${board.title}</a></td>`;
            row +=`<td class="col_writer">${board.writer}</td>`;
            row +=`<td class="col_date">${board.date}</td>`;
            row +=`<td class="col_hits">${board.hits}</td>`;
            row +="</tr>";

            // table 요소의 자식으로 추가
            document.getElementsByClassName('board_list')[0].innerHTML +=row; // 덧붙이기..  // 클래스 이름이 여러개일 수 있어 복수형임.
            // 즉 php에서 받은 데이타를 js가 가져와서 html에 그리고 rendering 하고 있다.. 인스타그램이 이렇게 하고 있다... 이게 가장 중요함.
            // 이것을 알아야 웹서비스 개념을 이해한것이다. 

            // document.getElementsByClassName('board_list')[0] 에서 [0]을 쓰는 것은 document.getElementsByClassName 가 하나의 요소가 아니라 여러 요소를 가져오기
            // 때문에 배열을 통해서 각각의 요소를 가져와야 하는 것이다.
            // 만일 s가 빠진 document.getElementByClassName 를 사용했다면 [0]없이 사용해도 된다. 
            // 이것은 document.querySelectorAll에도 똑같이 적용이 되는 것이다. 



        } // for....







    })



}// body
