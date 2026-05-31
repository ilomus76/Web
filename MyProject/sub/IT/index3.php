<?php
session_start();

echo "<pre>";
var_dump($_SESSION);
echo "</pre>";

exit;



// 로그인 체크
if (!isset($_SESSION['login']) || $_SESSION['login'] !== true) {
    header("Location: /myhome/");
    exit();
}

$user = $_SESSION['user_id'];
?>






<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>IT Page</title>
    <style>
        body {
            font-family: Arial;
            background: #f4f6f8;
            margin: 0;
        }

        .header {
            background: #111;
            color: white;
            padding: 20px;
        }

        .container {
            padding: 30px;
        }

        .card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .menu {
            display: flex;
            gap: 15px;
        }

        .menu a {
            color: white;
            text-decoration: none;
        }
    </style>
</head>

<body>

<div class="header">
    <div class="menu">
        <a href="/myhome/">HOME</a>
        <a href="/myhome/sub/IT/index.php">IT</a>
        <a href="#">BACKEND</a>
    </div>
</div>

<div class="container">

    <div class="card">
        <h1>IT 페이지</h1>
        <p>환영합니다 👉 <?= htmlspecialchars($user) ?></p>
    </div>

</div>

</body>
</html>