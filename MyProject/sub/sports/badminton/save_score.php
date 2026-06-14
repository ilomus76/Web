<?php

//score_board_A0000000011

$maxScore = $_POST['maxScore'];

$data = [
    "game" => $_POST["game"],
    "teamA" => $_POST['teamA'],
    "teamB" => $_POST['teamB'],
    "gameOver" => $_POST['gameOver'],
    "maxScore" => $maxScore   // ⭐ 이 줄이 핵심
];



file_put_contents(
    // "./data/score.json",
    // json_encode($data, JSON_PRETTY_PRINT)

    "./data/score.json",
    json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
);

echo "OK";

?>


?>