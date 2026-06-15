
<?php
header("Content-Type: application/json");

$input = json_decode(file_get_contents("php://input"), true);

$gameId = $input["gameId"] ?? 1;
$file = __DIR__ . "/games/game_" . $gameId . ".json";

if (!file_exists($file)) {
    $data = [
        "teamA" => 0,
        "teamB" => 0,
        "gameOver" => false,
        "maxScore" => 21
    ];
} else {
    $data = json_decode(file_get_contents($file), true);
}

$data["maxScore"] = $input["maxScore"] ?? 21;

// 저장
file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

echo json_encode($data);
?>