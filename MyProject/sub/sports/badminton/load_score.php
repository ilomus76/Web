<?php
header("Content-Type: application/json");

$file = __DIR__ . "/current_game.json";

if (!file_exists($file)) {

    $data = [
        "teamA" => 0,
        "teamB" => 0,
        "gameOver" => false,
        "maxScore" => 21
    ];

} else {

    $data = json_decode(file_get_contents($file), true);

    $data["teamA"] = $data["teamA"] ?? 0;
    $data["teamB"] = $data["teamB"] ?? 0;
    $data["gameOver"] = $data["gameOver"] ?? false;
    // $data["maxScore"] = $data["maxScore"] ?? 21;
}

echo json_encode($data);
?>