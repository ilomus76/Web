<?php
// 여기서 부터 여기까지..
// php 개발자 아니어서 외우지 마라..

header("Content-Type:text/html; charset=utf-8");

// 사용자가 GET 방식으로 보낸 데이타들 받기 
// 변수 
$name = $_GET['name']; // html 에서 get 방식으로 보낼 때..
$message = $_GET['msg'];

// 잘 받았는지 확인.
echo "$name , $message";


// $name 과 $message 변수에 있는 데이이터를 Database에 저장하기.
// Database는 엑셀같은 구조를 가진 프로그램.
// 그래서 데이터를 저장하려면.. 구조를 가진 표(table)를 만들어야 함.
// 닷홈 호스팅을 사용하면 이미 Database가 설치되어 있으며..
// 미리 표를 만들어 놓고 데이터만 삽입하는 것이 가능함..

// mysql 은 cli 프로그램이다... 그래서 표를 먼저 만들어 볼것ㄹ이다.
// 데이타를 삽입하는 작벙은 SQL 이라는 데이터베이스 전용 언어를 사용.


// 2교시.
// 닷홈 로그인해라.
// 우측 위 마이닷홈..  상세보기  -> 아래에 제공 내역 MySQL 관리 주소 클릭
// 닷홈은 표를 command 로 만들지 않고 그래픽으로 만들게 해 줌. 
// memo , 3칸으로 만들어라... 우리는 아이템이 2개이지만 넘버링으로 ...
// A..I  : 자동증가 ,, Primary는 같은 값을 입력을 못하게 하는 것... 
// Null 은 값을 않넣어도 됨.. 
// 이러고 저장... 

// MySQL DBMS 에 접속하여 memo 테이블에 이름$name, 메세지$message 데이타를 삽입하기...
// 1. MySQL에 접속하기... 백앤드와 DB 컴퓨터가 다름.. 그래서 백앤드에서 DB 컴퓨터에 연결하는게 첫번째.. 아래것.
// mysql_connect() // old version
//mysqli_connect('127.0.0.1')  // latest version  i => improved   # DB 서버 URL, DB 접속 아이디 , DB 접속 비번 , DB 명 
$db= mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76');   // 객체를 $db로 받음. 
// 참고로 주석은 // 나 # 둘다 됨. 
// 닷홈은 DB 컴퓨터를 따로 놔야 하는데,,, 작은 곳은 php랑 DB를 같은 컴퓨터를 사용...
// '127.0.0.1' 이것은 내 컴퓨터... 루프백이라고 함.. 이것도 도메인이 있다... localhost 


// 2. DB 안에서 한글이 깨지지 않도록 요청해야 함. 
mysqli_query($db,'set names utf8');   //mysql의 향상된 버전으로 mysqli ... 질문을 하자 query , db에게...utf8dp -이 없다.. 



// 3. 원하는 CRUD 작업을 요청하는 질의문 만들고 요청. 
$sql= "INSERT INTO memo(name, message) VALUES('$name','$message')";  // ''가 있어야 함.   // 글씨만 쓴거다.. 실행은 안한것..
// 변수값으로 문자열을 만든것 
$result = mysqli_query($db,$sql ); // 실행  
// 쿼리문이 성공하면 true, 실패하면 false 를 리턴.
if($result){
    echo "메모글 저장이 완료되었습니다.";
}else{
    echo "메모글 저장에 실패했습니다. 다시 시도해 주세요.";
    // 원래 echo(10); 처럼 써도 됨. 함수임... 
}


// 4. 연결종료
mysqli_close($db)

?>
