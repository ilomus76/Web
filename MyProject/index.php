<?php

session_start();

if (!isset($_SESSION['login']))
{
    header("Location: /myhome/index.php");
    exit;
}


// 입력값 받기
$user_id = $_POST['user_id'] ?? '';
$user_password = $_POST['user_password'] ?? '';


// 테스트용 계정
$correct_id = "ilomus76";
$correct_password = "a1s2d3f4!";


// 로그인 확인
if (
    $user_id === $correct_id &&
    $user_password === $correct_password
) {

    // 로그인 성공
    header("Location: ./sub/HTML/HTML.html");
    exit();

} else {

    // 로그인 실패
    echo "
    <script>
        alert('로그인이 필요합니다. 아이디와 비밀번호가 맞는지 확인하시고 로그인을 하세요.');
        alert('You need to login in the site. please login wiht id and password.');
        history.back();
    </script>
    ";
}

?>

