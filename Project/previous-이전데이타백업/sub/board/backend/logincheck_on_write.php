<?php

    session_start();

    if (!isset($_SESSION['id'])) {
        echo "<script>
            alert('로그인이 필요합니다.');
            // location.href='../../login/login.html';
            location.href='../../login/backend/login.php';  
            // 즉시 이동이 아니라 “예약 이동
        </script>";
        exit;
    }


    header("Location: ../board/write.html");
    // location.href ='../board/write.html';
    // write.html
?>