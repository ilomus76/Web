<?php
header('Content-Type: text/html; charset=utf-8');
session_start();

$user_id = $_POST['user_id'] ?? '';
$user_password = $_POST['user_password'] ?? '';

// 🔥 핵심: 반드시 URL 형태
$redirect = $_POST['redirect'] ?? $_GET['redirect'] ?? '/myhome/';

// 테스트 계정
$correct_id = "ilomus76";
$correct_password = "a1s2d3f4!";

$now = date('Y-m-d H:i:s');

// DB 연결
$db = mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76');
mysqli_query($db,"set names utf8");

// 로그인 기록 (선택)
$sql = "INSERT INTO login_table(id,pw,date) VALUES ('$user_id','$user_password','$now')";
mysqli_query($db,$sql);

// 로그인 체크
if ($user_id === $correct_id && $user_password === $correct_password) {

    $_SESSION['login'] = true;
    $_SESSION['user_id'] = $user_id;

    // 🔥 핵심: redirect 이동
    header("Location: " . $redirect);
    exit();

} else {

    echo "
    <script>
        alert('아이디 또는 비밀번호가 틀렸습니다.');
        history.back();
    </script>
    ";
}

mysqli_close($db);
?>