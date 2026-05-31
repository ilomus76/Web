<?php
header('Content-Type: text/html; charset=utf-8');
session_start();

/*
========================================
🔥 1. 디버깅 (필요할 때만 사용)
========================================
POST 값이 제대로 오는지 확인하려면
아래 2줄을 잠깐 켜고 테스트하세요.
========================================
*/


var_dump($_SERVER['REQUEST_METHOD']);
exit;
// var_dump($_POST);
// exit;

/*
========================================
🔥 2. 입력값 받기
========================================
*/

$user_id = $_POST['user_id'] ?? '';
$user_password = $_POST['user_password'] ?? '';

// redirect (IT로 돌아갈 주소)
$redirect = $_POST['redirect'] ?? '/myhome/';

/*
========================================
🔥 3. 테스트 계정 (임시)
========================================
*/

$correct_id = "ilomus76";
$correct_password = "a1s2d3f4!";

/*
========================================
🔥 4. 로그인 처리
========================================
*/

if ($user_id === $correct_id && $user_password === $correct_password) {

    // 세션 저장
    $_SESSION['login'] = true;
    $_SESSION['user_id'] = $user_id;

    // 🔥 핵심: 원래 가던 페이지로 이동
    header("Location: " . $redirect);
    exit();

} else {

    // 실패 처리
    echo "
    <script>
        alert('아이디 또는 비밀번호가 틀렸습니다.');
        history.back();
    </script>
    ";
}
?>