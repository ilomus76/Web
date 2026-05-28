<?php
    // Content를 볼건데 텍스트로 볼거고 , html 형식으로 볼거야...
    header("Content-Type:text/html; charset=utf-8");

    // Get 방식으로 http 의 protocol로 HTML로부터 get 방식의 url 변수에 추가해서 요청을 받을 것이다.
    // 요청을 받는 것은 서버에 설치된 PHP 가 해 줄거야.. 
    // 그 요청 데이타를 배열에서 html의 name 식별자에 있는 것을 이용해서 받을 거야...
    $identifier_user_name = $_GET['user_name'];
    $identifier_user_phone_number = $_GET['user_phone_number'];
    $identifier_user_email = $_GET['user_email'];
   

    echo "<p>사용자 이름 : $identifier_user_name.</p>";
    echo "<p>사용자 전화번호 : $identifier_user_phone_number.</p>";
    echo "<p>사용자 이메일 : $identifier_user_email.</p>";

    // 이제 이 데이타를 고정 ip 와 24시간으로 운영되는 서버 컴퓨터에 저장할 거야..
    // 사실 웹서버와 데이타베이스를 저장하는 컴퓨터는 따로 떨어져 있다. 
    // 하지만 우리는 닷홈이라는 작은 용량의 서버로 웹서버도 운영하고 데이타베이스도 같은 PC의 환경에 있는 곳을 사용할 거야.
    // 데이타베이스에 쓰는 작업은 MySQL이라는 DBMS 라고 하는 것을 이용해서 할것이고 언어는 SQL을 사용할 것이다.

    // 1. SQL에 접속하기.
    $db = mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76'); // IP 주소, 야이디 , 비번, 계정(무료 계정이라서 계정이름을 바꿀 수 없음. 하지만 유료버전은 가능함.)
    // localhost는 내 피씨라는 것을 가리키는 127.0.0.1 의 도메인 주소임. 

    // 2. 한글깨짐 방지.
    mysqli_query($db,"set names utf8");

    // 3. 질의 및 요청 
    $now = date('YmdHis');
    $sql = "INSERT INTO reservation_temp(name,phone,email,date) VALUES ('$identifier_user_name','$identifier_user_phone_number','$identifier_user_email','$now')";
    $result_set = mysqli_query($db,$sql);
    if($result_set){
        echo "고객님께서는 폼 테이블에 데이타를 입력완료하셨습니다.";
    }else{
        echo "고객님께서는 폼 테이블에 데이타를 입력하지 않으셨습니다.";
    }

    //4.연결 종료
    mysqli_close($db);

    
    









?>