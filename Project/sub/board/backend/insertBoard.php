<?php
    header('Content-Type: text/plain; charset=utf-8');



    ///////////////////  로그인 체크 //////////////// 
    // session_start();

    // if (!isset($_SESSION['user_id'])) {
    //     echo "LOGIN_REQUIRED";
    //     exit;
    // }

    /////////////////////////////////////////////////





    // 사용자가 json으올 데이터를 보내면 php언어는 특정 위치(php://input)에 이 값을 파일로 보관함. 
    // 그래서 그 파일을 읽어와야 함.

    $json_data = file_get_contents('php://input');
    // json 형식의 문자열에서 값들의 추출을 쉽게 하기 위해 연관배열로 해독해 내기
    $datas = json_decode($json_data,true); // 코드를 해독하기 , // true : 연관배열로 만들기 여부.. -> 데이타를 식별하기 쉽기때문.. 즉 parsing

    // 데이타들에게 각 값들을 추출( 제목 ,글쓴이 , 비밀번호, 메세지)
    $title = $datas['title'];
    $writer = $datas['writer'];
    $password = $datas['password'];
    $message = $datas['msg'];

    // 참고로 ... DB에 비밀번호같은 것을 저장할때.. 노출되지 않도록... 암호화 가능...
    // $password = password_hash($password,PASSWORD_DEFAULT); // hash알고리즘. 패스워드를 기본방식으로 바꿈.. 
    password_hash($password,PASSWORD_DEFAULT); // hash알고리즘. 패스워드를 기본방식으로 바꿈.. 
    // => 나중에 해독하는 것은... password_verify() 함수 이용
    // DB 관리자가 볼수도 있기 때문에 방지..

    // 게시글 저장 날짜.

    $now = date('Y.m.d H:i:s'); // date()라는 php 내장함수 를 Y.m.d H:i:s형식으로 만들어  
    //web_board 테이블안에 새로운 게시글을 저장...
    // 테이블 컬룸들 :  no,title,msg,writer , date , hits, password
    // 저장할 값들 : $title , $message , $writer , $now, 0, $password
    
    // MySQL DBMS과 연결하여 위 값들을 삽입하기.

    $db = mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76'); // DB에 접속
    mysqli_query($db, 'set names utf8');

    // 원하는 쿼리 작성
    $sql= "INSERT INTO web_board(title,msg,writer,date,hits,password) VALUES('$title','$message','$writer','$now','0','$password')"; 
    // date,hits는 default로 할수도 있음. 왜 주는지 알아야 하는데 짜증나는 이유알아야 함.

    $result = mysqli_query($db,$sql);// 실행 결과를 true/false 로 줌

    if($result) echo "글 저장을 성공했습니다.";
    else echo "글 저장 중 오류가 발생했습니다. 다시 시도해 주세요.";
    mysqli_close($db);

    // html의 값을 js에 주고 php에 줘소 dB에 넣음...

    // html에서 저장을 했는데 페이지가 그대로 남아서 원래로 돌아가야 하는 리다이렉트를 해 줘야 함..



?>