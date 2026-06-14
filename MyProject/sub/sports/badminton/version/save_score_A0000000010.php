<?php

//score_board_A0000000010

$data = [
    "teamA" => $_POST['teamA'],
    "teamB" => $_POST['teamB']
];

file_put_contents(
    "./data/score.json",
    json_encode($data, JSON_PRETTY_PRINT)
);

echo "OK";

?>