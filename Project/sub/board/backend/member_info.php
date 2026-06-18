<?php

    session_start();

    if (!isset($_SESSION['user_id'])) {
        echo "<script>
            alert('로그인이 필요합니다.');
            location.href='../../login/login.html';
        </script>";
        exit;
    }

?>