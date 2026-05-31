<?php
session_start();

function require_login() {
    if (empty($_SESSION['login'])) {
        header("Location: /myhome/login.php");
        exit;
    }
}

function current_user() {
    return $_SESSION['user_id'] ?? null;
}
// session_start();

// function require_login() {
//     if (empty($_SESSION['login'])) {
//         header("Location: /myhome/login.php");
//         exit;
//     }
// }
// // function require_login() {
// //     if (!isset($_SESSION['login']) || $_SESSION['login'] !== true) {
// //         header("Location: /myhome/login.php?redirect=" . urlencode($_SERVER['REQUEST_URI']));
// //         exit;
// //     }
// // }

// function current_user() {
//     return $_SESSION['user_id'] ?? null;
// }


// if (session_status() === PHP_SESSION_NONE) {
//     session_start();   // ⭐ 이게 정답 (쿠키 설정 제거)
// }







// session_start();
// if (session_status() === PHP_SESSION_NONE) {
//     session_start();
// }
// if (session_status() === PHP_SESSION_NONE) {
//     session_set_cookie_params([
//         'path' => '/myhome/',   // ⭐ 핵심
//         'httponly' => true
//     ]);
//     session_start();
// }


// if (session_status() === PHP_SESSION_NONE) {
//     session_set_cookie_params([
//         'path' => '/',        // ⭐ 핵심 (myhome 말고 /)
//         'httponly' => true,
//         'secure' => false
//     ]);
//     session_start();
// }

/**
 * 현재 로그인 유저 반환
 */
// function current_user() {
//     return $_SESSION['user_id'] ?? null;
// }



// function require_login() {
//     if (!isset($_SESSION['login']) || $_SESSION['login'] !== true) {
//         header("Location: /myhome/login.php?redirect=" . urlencode($_SERVER['REQUEST_URI']));
//         exit;
//     }
// }




// if (!function_exists('current_user')) {
//     function current_user() {
//         return $_SESSION['user_id'] ?? null;
//     }
// }

// 로그인 안 됐으면 강제 이동
// function require_login() {
//     if (!isset($_SESSION['login']) || $_SESSION['login'] !== true) {
//         // header("Location: /myhome/login_page.php");
//         header("Location: /myhome/login.php");
//         exit();
//     }
// }


// function require_login() {
//     if (!isset($_SESSION['login']) || $_SESSION['login'] !== true) {

//         $redirect = $_SERVER['REQUEST_URI'];

//         header("Location: /myhome/login.php?redirect=" . urlencode($redirect));
//         exit();
//     }

// function require_login() {
//     if (!isset($_SESSION['login']) || $_SESSION['login'] !== true) {
//         $redirect = $_SERVER['REQUEST_URI'];
//         header("Location: /myhome/login.php?redirect=" . urlencode($redirect));
//         exit();
//     }
// }

// session_start();








/**
 * 로그인 체크
 */
// function require_login() {
//     if (!isset($_SESSION['login']) || $_SESSION['login'] !== true) {

//         $redirect = $_SERVER['REQUEST_URI'];

//         header("Location: /myhome/login.php?redirect=" . urlencode($redirect));
//         exit();
//     }
// }




// // 현재 로그인 유저 반환
// function current_user() {
//     return $_SESSION['user_id'] ?? null;
// }


// }
?>




