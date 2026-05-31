<?php
header('Content-Type: text/html; charset=utf-8');
session_start();



$user_id = $_POST['user_id'] ?? '';
$user_password = $_POST['user_password'] ?? '';

// 🔥 핵심: 원래 가려던 URL (없으면 메인)
$redirect = $_POST['redirect'] ?? $_GET['redirect'] ?? '/myhome/';

$now = date('Y-m-d H:i:s');

// 1. DB 연결
$db = mysqli_connect('localhost', 'ilomus76', 'a1s2d3f4!', 'ilomus76');

// 2. 한글 설정
mysqli_query($db, "set names utf8");

// 3. 로그인 기록 저장 (선택 기능)
$sql = "INSERT INTO login_table(id, pw, date) VALUES ('$user_id', '$user_password', '$now')";
mysqli_query($db, $sql);

// 4. 테스트 계정 (현재 구조 유지)
$correct_id = "ilomus76";
$correct_password = "a1s2d3f4!";

// 5. 로그인 검증
if ($user_id === $correct_id && $user_password === $correct_password) {

    // 세션 저장
    $_SESSION['login'] = true;
    $_SESSION['user_id'] = $user_id;

    // 🔥 핵심: 원래 가던 페이지로 이동
    header("Location: " . $redirect);
    exit();

} else {

    // 로그인 실패
    echo "
    <script>
        alert('아이디 또는 비밀번호가 틀렸습니다.');
        history.back();
    </script>
    ";
}

// 🔥 디버깅 코드 (여기에 넣기)
var_dump($_POST);
exit;



// 6. DB 종료
mysqli_close($db);
?>