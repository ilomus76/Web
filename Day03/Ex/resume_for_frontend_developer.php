<?php
    header("Content-Type:text/html; charset=utf-8");

    $identifiler_user_name = $_GET['user_name'];
    $identifiler_user_phone_number = $_GET['user_phone_number'];
    $identifiler_user_applicaiton = $_GET['user_applicaiton'];
    $identifiler_user_target = $_GET['user_target'];


    echo "<p>지원자 이름 : $identifiler_user_name</p>";
    echo "<p>연락처 : $identifiler_user_phone_number</p>";
    echo "<p>지원분야: $identifiler_user_applicaiton</p>" ;
    echo "지원동기: <br> $identifiler_user_target ";
    

?>