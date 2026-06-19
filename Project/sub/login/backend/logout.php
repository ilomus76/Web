<?php

session_start();

// 모든 세션 변수 제거
$_SESSION = [];

// 세션 쿠키 삭제 (브라우저에 남아있는 로그인 흔적 제거)
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();

    setcookie(
        session_name(),
        '',
        time() - 3600,
        $params["path"],
        $params["domain"],
        $params["secure"],
        $params["httponly"]
    );
}




// 세션 자체 제거
session_destroy();

// 메인 페이지로 이동
header("Location: ../../../index.html");
exit;


// session_start();     // 세션 시작
// $_SESSION = [];      // 세션 데이터 삭제
// session_destroy();   // 세션 완전 제거
// header("Location: ../../../index.html"); // 메인으로 이동
?>

