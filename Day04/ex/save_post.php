<?php
// save_post.php

// DB 연결 정보
$host = "localhost";
$dbname = "ilomus76";
$username = "ilomus76";
$password = "a1s2d3f4!";

//$host = "localhost";
//$dbname = "interest_board";
//$username = "root";
//$password = "";


// MySQL 연결
$conn = new mysqli($host, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die("DB 연결 실패: " . $conn->connect_error);
}

// UTF-8 설정
$conn->set_charset("utf8");

// POST 데이터 받기
$title = $_POST['title'] ?? '';
$category = $_POST['category'] ?? '';
$content = $_POST['content'] ?? '';
$urls = $_POST['urls'] ?? [];

// URL 배열 → 문자열 변환
$urlString = implode(",", $urls);

// 파일 업로드 폴더
$uploadDir = "uploads/";

// 업로드 폴더 없으면 생성
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

// 업로드 파일명 저장
$uploadedFiles = [];

if (!empty($_FILES['files']['name'][0])) {

    foreach ($_FILES['files']['tmp_name'] as $key => $tmpName) {

        $fileName = basename($_FILES['files']['name'][$key]);

        // 중복 방지용 시간 추가
        $newFileName = time() . "_" . $fileName;

        $targetFile = $uploadDir . $newFileName;

        // 업로드
        if (move_uploaded_file($tmpName, $targetFile)) {
            $uploadedFiles[] = $targetFile;
        }
    }
}

// 파일 문자열화
$fileString = implode(",", $uploadedFiles);

// SQL 저장
$sql = "
INSERT INTO posts
(
    title,
    category,
    content,
    urls,
    files
)
VALUES
(
    ?,
    ?,
    ?,
    ?,
    ?
)
";

// prepare 사용 (보안)
$stmt = $conn->prepare($sql);

$stmt->bind_param(
    "sssss",
    $title,
    $category,
    $content,
    $urlString,
    $fileString
);

// 실행
if ($stmt->execute()) {

    echo "
    <script>
      alert('게시글 저장 완료');
      location.href='index.html';
    </script>
    ";

} else {

    echo "
    <script>
      alert('저장 실패');
      history.back();
    </script>
    ";
}

$stmt->close();
$conn->close();

?>