<?php
header('Content-Type: text/html; charset=utf-8');

session_start();

// echo "LOGIN SUCCESS";
// exit;


$user_id = $_POST['user_id'] ?? '';
$user_password = $_POST['user_password'] ?? '';
$redirect = $_POST['redirect'] ?? '/myhome/';

$correct_id = "ilomus76";
$correct_password = "a1s2d3f4!";

if ($user_id === $correct_id && $user_password === $correct_password) {

    $_SESSION['login'] = true;
    $_SESSION['user_id'] = $user_id;

    // ❗ 출력 절대 금지 (echo 삭제)
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
?>
