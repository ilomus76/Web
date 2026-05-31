<?php
header('Content-Type: text/html; charset=utf-8');
// require_once("../../index.php");

// session_start();

// if (!isset($_SESSION['login'])) {
//     header("Location: /myhome/login.php");
//     exit;
// }

// session_start();

// echo "<pre>";
// print_r($_SESSION);
// echo "</pre>";

// exit





// session_start();

// if (!isset($_SESSION['login']))
// {
//     header("Location: /myhome/sub/login/index.php");
//     exit;
// }


// session_start();

// if (!isset($_SESSION['login']))
// {
//     header("Location: /myhome/sub/login/index.html");
//     exit;
// }


// session_start();

// if (!isset($_SESSION['login'])) {

//     // header("Location: /myhome/index.html?redirect=IT");
//     // exit;

//     // header("Location: /login/index.php?redirect=/myhome/sub/IT/index.php");
//     // exit();

//     header("Location: /myhome/sub/login/index.html?redirect=/myhome/sub/IT/");
//     exit();
// }


// session_start();

// $_SESSION['login'] = true;
// $_SESSION['user_id'] = $user_id;

// session_write_close(); // 🔥 추가 (중요)

// header("Location: /myhome/sub/IT/index.php");
// exit();

// session_start();

// // 로그인 체크
// if (!isset($_SESSION['login']) || $_SESSION['login'] !== true) {
//     header("Location: /myhome/sub/login/index.html?redirect=/myhome/sub/IT/index.php");
//     exit();
// }

// // 로그인 된 상태 → 여기부터 IT 페이지 출력
// echo "IT 페이지입니다. 환영합니다 " . $_SESSION['user_id'];


// session_start();

// // 로그인 체크
// if (!isset($_SESSION['login']) || $_SESSION['login'] !== true) {
//     header("Location: /myhome/index.html?redirect=/myhome/sub/IT/index.php");
//     exit();
// }


// session_start();

// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// if (!isset($_SESSION['login'])) {
//     header("Location: /myhome/");
//     exit();
// }

// echo "IT 페이지 정상 접근됨 - " . $_SESSION['user_id'];

// session_start();
// $login = $_SESSION['login'] ?? false;
// $user = $_SESSION['user_id'] ?? '';


session_start();

if (!isset($_SESSION['login'])) {
    header("Location: /myhome/");
    exit();
}

$user = $_SESSION['user_id'];

?>
