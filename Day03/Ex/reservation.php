<?php
    header("Content-Type:text/html; charset=utf-8");

    $identifier_user_name = $_GET['user_name'];
    $identifier_user_phone_number = $_GET['user_phone_number'];
    $identifier_user_email = $_GET['user_email'];
   

    echo "<p>사용자 이름 : $identifier_user_name.</p>";
    echo "<p>사용자 전화번호 : $identifier_user_phone_number.</p>";
    echo "<p>사용자 이메일 : $identifier_user_email.</p>";


?>