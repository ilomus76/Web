<?php
session_start();

// POST 아닌 경우 차단
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Location: /myhome/index.html");
    exit;
}

$user_id = trim($_POST['user_id'] ?? '');
$user_password = trim($_POST['user_password'] ?? '');

// ❗ 입력값 비었을 때 먼저 처리
if ($user_id === '' || $user_password === '') {
    echo "<script>
        alert('아이디와 비밀번호를 입력하세요.');
        history.back();
    </script>";
    exit;
}

$correct_id = "ilomus76";
$correct_password = "a1s2d3f4!";

if ($user_id === $correct_id && $user_password === $correct_password) {

    $_SESSION['login'] = true;
    $_SESSION['user_id'] = $user_id;

    // header("Location: /myhome/sub/IT/index.php");
    // header("Location: /myhome/sub/login/index.php");
    header("Location: /myhome/sub/login/index.html?login=success");
    exit;

} else {

    echo "<script>
        alert('아이디 또는 비밀번호가 틀렸습니다.');
        history.back();
    </script>";
    exit;
}