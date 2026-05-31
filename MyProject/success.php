<?php
session_start(); // 세션 시작

// DB 연결
$db = mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76');
if (!$db) {
    die("DB 연결 실패: " . mysqli_connect_error());
}
mysqli_set_charset($db, "utf8");

// POST로 전달된 값 받기
$user_id = $_POST['user_id'];
$user_password = $_POST['user_password'];

// DB에서 사용자 조회
$stmt = $db->prepare("SELECT pw FROM login_table WHERE id = ?");
$stmt->bind_param("s", $user_id);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($hashed_password);
    $stmt->fetch();

    // 비밀번호 검증
    if (password_verify($user_password, $hashed_password)) {
        // 로그인 성공 → 세션에 사용자 정보 저장
        $_SESSION['user_id'] = $user_id;
        echo "<h2>로그인 성공!</h2>";
        echo "<p>환영합니다, $user_id 님.</p>";
        echo "<a href='mypage.php'>내 페이지로 이동</a>";
    } else {
        echo "<h2>비밀번호가 올바르지 않습니다.</h2>";
        echo "<a href='login.php'>다시 로그인</a>";
    }
} else {
    echo "<h2>존재하지 않는 사용자입니다.</h2>";
    echo "<a href='register.php'>회원가입</a>";
}

$stmt->close();
mysqli_close($db);
?>
