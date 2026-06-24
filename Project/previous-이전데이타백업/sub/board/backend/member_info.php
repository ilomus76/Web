<?php

    session_start();

    // if (!isset($_SESSION['id'])) {
    //     echo "<script>
    //         alert('로그인이 필요합니다.');
    //         header("Location: ../../login/login.html");
    //         location.href='../../login/login.html';
    //         // location.href='../../login/login.php';  
    //         // 즉시 이동이 아니라 “예약 이동
    //     </script>";
    //     exit;
    // }


//     if (!isset($_SESSION['id'])) {
//     echo "<script>
//         alert('로그인이 필요합니다.');
//         location.replace('../../login/login.html');
//         //location.href='../../login/login.html';
//     </script>";
//     exit;
// }

    if (!isset($_SESSION['id'])) {
    header("Location: ../../login/login.html");
    exit;
    }

    // header("Location: ../login/login.html");
    // location.href='../../login/login.html';
    // write.html
?>