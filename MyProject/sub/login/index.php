///
// session_start();

// $user_id = $_POST['user_id'] ?? '';
// $user_password = $_POST['user_password'] ?? '';

// // 🔥 핵심: 반드시 fallback URL
// $redirect = $_POST['redirect'] ?? '/myhome/';

// // 테스트 계정
// $correct_id = "ilomus76";
// $correct_password = "a1s2d3f4!"; -->

// 로그인 성공
// if ($user_id === $correct_id && $user_password === $correct_password) {

//     $_SESSION['login'] = true;
//     $_SESSION['user_id'] = $user_id;

    // 🔥 IT로 이동
//     header("Location: " . $redirect);
//     exit();

// } else {
//     echo "<script>
//         alert('로그인 실패');
//         history.back();
//     </script>";
// }
// 


///
// session_start();

// if (empty($_SESSION['login'])) {
//     // header("Location: /myhome/login.php");
//     header("Location: /myhome/sub/login/index.html");
//     exit;
// }

// echo "로그인 성공";
///

<?php
session_start();
?>

<a href="<?php
if (!empty($_SESSION['login'])) {
    echo '/myhome/sub/IT/index.html';
} else {
    echo '/myhome/sub/IT/index.php';
}
?>">IT</a>