<?php
session_start();

$loggedIn = isset($_SESSION['id']);
$nickname = $_SESSION['nickname'] ?? '';
$profileImg = $_SESSION['profile_img'] ?? './img/default_profile.png';
?>

<header class="site_header">

    <!-- 로고 -->
    <div class="logo">
        <a href="./index.php">ARPES</a>
    </div>

    <!-- 메뉴 -->
    <nav id="menu_bar">
        <a href="./index.php">홈</a>
        <a href="./sub/study/study.html">과학</a>
        <a href="./sub/sports/sports.html">운동</a>
        <a href="./sub/health/health.html">건강</a>
        <a href="./sub/favoritefood/food.html">맛집</a>
        <a href="./sub/board/board.html">게시판</a>
        <a href="./sub/registration/registration.html">회원가입</a>
    </nav>

    <!-- 유저 영역 -->
    <div class="user_area">

        <?php if ($loggedIn): ?>

            <img class="profile_img" src="<?= $profileImg ?>" alt="profile">
            <span class="nickname"><?= htmlspecialchars($nickname) ?></span>
            <a class="logout_btn" href="./sub/login/backend/logout.php">로그아웃</a>

        <?php else: ?>

            <a class="login_btn" href="./sub/login/login.html">로그인</a>

        <?php endif; ?>

    </div>

</header>


<!-- css -->
 site_header{
    display:flex;
    align-items:center;
    padding:10px 20px;
    border-bottom:1px solid #ddd;
    background:#fff;
}

/* 로고 */
.logo a{
    font-size:20px;
    font-weight:bold;
    text-decoration:none;
    color:black;
    margin-right:20px;
}

/* 메뉴 */
#menu_bar{
    display:flex;
    gap:15px;
}

#menu_bar a{
    text-decoration:none;
    color:#333;
    font-size:14px;
}

#menu_bar a:hover{
    color:#000;
    font-weight:bold;
}

/* 오른쪽 유저 영역 */
.user_area{
    margin-left:auto;
    display:flex;
    align-items:center;
    gap:10px;
}

/* 프로필 */
.profile_img{
    width:30px;
    height:30px;
    border-radius:50%;
    object-fit:cover;
    border:1px solid #ccc;
}

.nickname{
    font-size:14px;
    font-weight:500;
}

/* 버튼 */
.logout_btn,
.login_btn{
    font-size:13px;
    text-decoration:none;
    color:#555;
}

.logout_btn:hover{
    color:red;
}

.login_btn:hover{
    color:blue;
}