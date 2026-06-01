<?php

// ver 201
// session_start();

// if (!isset($_SESSION['userid'])) {
//     //세션에 userid가 있나? 
//     header("Location: login.php");
//     // 없으면 login.php로 가라..
//     exit;
// }else{
//     // 로그인 성공 후
//     // 성공하면 userid를 가지고 있어라.. 
//     $_SESSION['userid'] = $userid;
// }

// ver202
// 여기서 $userid가 어디에도 정의되어 있지 않습니다.
// 즉, 이미 로그인된 상태인지 확인하는 페이지에서 다시 세션값을 설정하고 있는데, 오히려 문제가 될 수 있습니다.
// IT/index.php는 아래처럼 단순해야 합니다.
session_start();

// if (empty($_SESSION['login'])) { // 아래와 같은 표현
if (!isset($_SESSION['user_id'])) {
    // header("Location: /myhome/login.php");
    header("Location: /myhome/sub/IT/index.php");
    
    exit;
}


// session_start();

// echo "IT PAGE<br>";
// echo session_id();
// echo "<br>";
// var_dump($_SESSION);


// session_start();

// echo "IT PAGE<br>";
// echo "SESSION ID: " . session_id() . "<br>";
// var_dump($_SESSION);

// var_dump($_SESSION);
// session_start();
// echo "<pre>";
// var_dump($_SESSION);
// echo "</pre>";
// exit;
// require_once($_SERVER['DOCUMENT_ROOT'] . "/myhome/auth.php");

// echo "STEP1";
// exit;

// require_once("../../auth.php");
// var_dump(file_exists($_SERVER['DOCUMENT_ROOT'] . "/myhome/auth.php"));
// exit;

// version 200
// session_start();
// require_once($_SERVER['DOCUMENT_ROOT'] . "/myhome/auth.php");

// require_login();

// echo "<pre>";
// var_dump($_SESSION);
// echo "</pre>";




#$user = current_user();
// echo "LOGIN OK";
// echo $_SERVER['REQUEST_URI'];
// exit;

// die("HERE IT PAGE");

// require_once($_SERVER['DOCUMENT_ROOT'] . "/myhome/auth.php");
// require_login();

// echo "<h1 style='color:red; font-size:60px;'>IT PAGE HERE</h1>";
// exit;

// echo "IT HIT";
// echo "<br>";
// echo $_SERVER['REQUEST_URI'];
// exit;
// echo "<h1 style='color:red'>IT PAGE SUCCESS</h1>";
// echo $_SERVER['REQUEST_URI'];





// require_login();

// $user = current_user();
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>IT Dashboard</title>
    <style>
        body {
            font-family: Arial;
            background: #f5f6f8;
            margin: 0;
        }

        .topbar {
            background: #111;
            color: white;
            padding: 15px;
            display: flex;
            justify-content: space-between;
        }

        .container {
            padding: 30px;
        }

        .card {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }

        a {
            color: white;
            text-decoration: none;
        }
    </style>
</head>

<!-- <body> -->
<body style="background: yellow;">
<h1 style="font-size:60px; color:red;">
IT PAGE ACTIVE
</h1>

<!-- <body style="background: yellow;"> -->
<!-- <h1 style="color:red; font-size:50px;">IT PAGE</h1> -->


<!-- <div class="topbar"> -->
    <!-- <div> -->
        <!-- <a href="/myhome/">HOME</a> -->
        <!-- &nbsp;|&nbsp; -->
        <!-- IT DASHBOARD -->
    <!-- </div> -->

    <!-- <div> -->
        <!-- 👤 <?= htmlspecialchars($user) ?> -->
        <!-- &nbsp;|&nbsp; -->
        <!-- <a href="/myhome/logout.php">LOGOUT</a> -->
    <!-- </div> -->
<!-- </div> -->

<!-- <div class="container"> -->
    <!-- <div class="card"> -->
        <!-- <h1>IT 페이지</h1> -->
        <!-- <p>로그인 성공 상태입니다.</p> -->
    <!-- </div> -->
<!-- </div> -->

</body>
</html>