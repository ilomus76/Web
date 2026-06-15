<?php

header("Content-Type: application/json");

$input = json_decode(file_get_contents("php://input"), true);

$data = [
    "teamA" => 0,
    "teamB" => 0,
    "gameOver" => false,
    // "maxScore" => $input["maxScore"] ?? 21
];

file_put_contents(
    "current_game.json",
    json_encode($data, JSON_PRETTY_PRINT),
    LOCK_EX
);

echo json_encode($data);
?>

