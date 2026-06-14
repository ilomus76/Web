<?php
//score_board_A0000000011
header("Content-Type: application/json; charset=utf-8");

$file = "./data/score.json";

if (!file_exists($file)) {
    echo json_encode([
        "game" => 1,
        "teamA" => 0,
        "teamB" => 0,
        "gameOver" => 0,
        "maxScore" => 21
    ]);
    exit;
}

$data = json_decode(file_get_contents($file), true);

echo json_encode([
    "game" => $data["game"] ?? 1,
    "teamA" => $data["teamA"] ?? 0,
    "teamB" => $data["teamB"] ?? 0,
    "gameOver" => $data["gameOver"] ?? 0,
    "maxScore" => $data["maxScore"] ?? 21
], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

?>