function submitBoard(){
    // alert();

    // 서밋 버튼이 눌러지면 이 함수가 발동하는 지 확인.
    // alert();
    // form 요소는 action속성이 없어도 submit 이벤트가 발동하면...
    // 무조건 페이지 변경이 발생함.. action없기에.. 현재 문서를 새로고침함...
    //결국 페이지 변경이 되는 것임...이 기본 동작을 막기(방식하기)

    window.event.preventDefault(); // 기본동작을 막는다...
    // alert();
    // write.html에 쓰고 저장을 누르면 화면이 바뀌지 않음.... 확인되면 alert 꺼라..


    //사용자가 입력한 값을 서버에 전송하여 web_board 테이블에 저장되도록 AJAX 코드 작성.

    // 3교시

    // write.html 의 인풋 요소 id 만들고 여기로.
    var title = document.getElementById('in1').value ;
    var writer = document.getElementById('in2').value ;
    var password = document.getElementById('in3').value ;
    var message = document.getElementById('in4').value ;

    // 값들을 얻어왔으니 보낼 데이터를 key=value 형식으로 만들기 불편하니..
    // json 형식으로 보내보기...(요즘 선호방식)
    // 응답 과 요청을 모두 json 형식으로 ... 

    // json 을 형식의 문자열을 곧바로 만드는 것을 불편함. 그래서 먼저 JS 객체로 생성.

    var data = {
        title : title,         // 멤버변수명:값
        writer:writer,          // 멤버변수명:값
        password:password,      // 멤버변수명:값
        msg:message             // 멤버변수명:값
    }
    // 변수명과 식별자가 같으면 하나로 써도 됨.

    // 이 JS 객체를 json 문자열로 변환.
    var jsonData = JSON.stringify(data); // parse의 반대 기능... json 객체를 문자열로 만들기.
    //확인 
    //  alert(jsonData); // json 모양으로 변경되는걸 보면 확인... 

    // 됬으면 AJAX기술로 서버에 위 데이터를 POST방식으로 전송하고 응답받기!! GET 방식으로는 데이타가 너무 많음.

    fetch('../backend/insertBoard.php',{  // 그냥쓰면 GET 방식 // html에 있는 것을 php에 써줘야 함.
            method:'POST',
            headers:{'Content-Type':'application/json'}, // 보내는 데이타가 json 임을 알려주기
            body: jsonData    // http는 head 와 body로 나뉨.
    })
    .then(function(res){
        return res.text(); // 2진수를 글씨로.
    })
    .then(function(text){
        // alert(text); // insertBoard.php 로 이동하자.. 만들러..

        // html에서 저장을 했는데 페이지가 그대로 남아서 원래로 돌아가야 하는 리다이렉트를 해 줘야 함..
        //서버 응답이 잘 되었으니..
        window.location.href = '../../board/board.html'; // url 주소 변경  location은 주소창 영역

        // 참고로 

    })


}