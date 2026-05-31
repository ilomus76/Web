<?php
session_start();
session_destroy();
header("Location: /myhome/");
if (isset($_SESSION['login_time']) && time() - $_SESSION['login_time'] > 1800) {
    session_destroy();
    header("Location: /myhome/");
    exit();
}



exit();
?>