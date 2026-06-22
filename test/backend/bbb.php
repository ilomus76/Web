<?php
    header("Content-Type:text/html; charset=utf-8");
    $user_id = $_POST['userid'];
    $user_pw = $_POST['pw'];
    $gender = $_POST['gender'];
    $message = $_POST['msg'];
    $brand = $_POST['brand'];

    $message = nl2br($message);

    echo "<p>아이디 : $user_id</p>";
    echo "<p>비밀번호 : $user_pw</p>";
    echo "<p>성별 : $gender</p>";
    echo "<p>자동차 브랜드: $brand</p>";
    echo "<p>메세지: <br> $message</p>";

    $fruits = $_POST['fruit'];

    $num = count($fruits);
    for($i=0 ; $i<$num ; $i+=1){
        echo "$fruits[$i],";
    }
?>