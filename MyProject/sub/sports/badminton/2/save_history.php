<?php

$data = json_decode(file_get_contents("php://input"), true);

$file = "game_history.json";

// 기존 데이터 읽기
$history = [];
if (file_exists($file)) {
    $history = json_decode(file_get_contents($file), true);
}

// 새 기록 추가
$history[] = $data;

// 저장
file_put_contents($file, json_encode($history, JSON_PRETTY_PRINT));

echo "ok";
?>