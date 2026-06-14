<?php
    header('Content-Type:text/html; charset=utf-8');

    // 사용자가 ajax로 보내온 [이름, 비밀번호]를 받기.
    $name = $_GET['name'];  // SAM을 받음.
    $password = $_GET['pw']; // 1234 를 받음

    //사용자 측에 데이터를 잘 받았다고 응답 (response -echo )
    echo "이름: $name<br>";
    echo "비밀번호: $password<br>";


    // GEt 방식으로 보내는 것이 보안 문제가 있어 POST로 하는데 AJAX로 하면 없지만 우리는 post로 해보자

?>
