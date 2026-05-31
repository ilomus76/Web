<?php



session_start();

$user_id = $_POST['user_id'] ?? '';
$user_password = $_POST['user_password'] ?? '';

$correct_id = "ilomus76";
$correct_password = "a1s2d3f4!";

if ($user_id === $correct_id && $user_password === $correct_password) {

    $_SESSION['login'] = true;
    $_SESSION['user_id'] = $user_id;

    header("Location: /myhome/");
    exit;

} else {
    echo "LOGIN FAIL";
}



// session_start();

// $_SESSION['login'] = true;
// $_SESSION['user_id'] = $user_id;

// header("Location: /myhome/");
// exit;
// // session_start();

// // $_SESSION['user_id'] = 'test';
// // $_SESSION['login'] = true;

// // var_dump($_SESSION);
// // exit;


// // session_start();

// // $user_id = $_POST['user_id'] ?? '';
// // $user_password = $_POST['user_password'] ?? '';
// // // $redirect = $_POST['redirect'] ?? '/myhome/';
// // $redirect = $_POST['redirect'] ?? ($_GET['redirect'] ?? '/myhome/');


// // // 테스트 계정 (나중에 DB로 변경)
// // $correct_id = "ilomus76";
// // $correct_password = "a1s2d3f4!";

// // if ($user_id === $correct_id && $user_password === $correct_password) {

// //     session_regenerate_id(true); // 🔥 세션 고정 공격 방지

// //     $_SESSION['login'] = true;
// //     $_SESSION['user_id'] = $user_id;
// //     $_SESSION['login_time'] = time();

// //     header("Location: " . $redirect);
// //     exit();

// // } else {
// //     echo "<script>alert('로그인 실패'); history.back();</script>";
// // }


// // echo "LOGIN PROCESS END";
// // exit;

// // if (session_status() === PHP_SESSION_NONE) {
// //     session_set_cookie_params([
// //         'path' => '/myhome/'
// //     ]);
// //     session_start();
// // }

// session_start();

// echo "LOGIN START<br>";
// echo session_id();



// if (session_status() === PHP_SESSION_NONE) {
//     session_start();
// }
// // if (session_status() === PHP_SESSION_NONE) {
// //     session_set_cookie_params([
// //         'path' => '/'
// //     ]);
// //     session_start();
// // }
// // // session_start();

// $user_id = $_POST['user_id'] ?? '';
// $user_password = $_POST['user_password'] ?? '';

// // 기본 redirect
// $redirect = $_POST['redirect'] ?? '/myhome/';





// // 안전 필터 (중요)
// if (strpos($redirect, '/myhome') !== 0) {
//     $redirect = '/myhome/';
// }

// $correct_id = "ilomus76";
// $correct_password = "a1s2d3f4!";

// if ($user_id === $correct_id && $user_password === $correct_password) {

//     session_regenerate_id(true);

//     $_SESSION['login'] = true;
//     $_SESSION['user_id'] = $user_id;
//     $_SESSION['login_time'] = time();

//     // // 👇 여기 바로 아래에 넣기
//     // var_dump($_SESSION);
//     // var_dump($redirect);
//     // exit;


    
//     echo "<br>SESSION SET<br>";
//     var_dump($_SESSION);

//     exit;

//     session_write_close();   // ⭐⭐⭐ 이거 추가 (핵심)

//     header("Location: $redirect");
//     exit;

// } else {
//     echo "<script>alert('로그인 실패'); history.back();</script>";
//     exit;
// }
?>




