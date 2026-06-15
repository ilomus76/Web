<?php
header("Content-Type: application/json");

$raw = file_get_contents("php://input");

if (!$raw) {
    echo json_encode(["error" => "no data received"]);
    exit;
}

$data = json_decode($raw, true);
$team = $data["team"] ?? "";

// 파일 경로
$file = __DIR__ . "/score.json";

// 초기값
if (!file_exists($file)) {
    file_put_contents($file, json_encode([
        "teamA" => 0,
        "teamB" => 0
    ]));
}

// 읽기
$current = json_decode(file_get_contents($file), true);

// 증가
if ($team === "A") {
    $current["teamA"]++;
} else if ($team === "B") {
    $current["teamB"]++;
}

// 저장
file_put_contents($file, json_encode($current, JSON_PRETTY_PRINT));

// 응답
echo json_encode([
    "teamA" => $current["teamA"],
    "teamB" => $current["teamB"],
    "gameOver" => false
]);


?>









