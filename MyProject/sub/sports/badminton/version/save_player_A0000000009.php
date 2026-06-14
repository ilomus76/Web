

<?php

//score_board_A0000000008

$data = [
    "judgement" => $_POST['judgement'],
    "playername1" => $_POST['playername1'],
    "playername2" => $_POST['playername2'],
    "playername3" => $_POST['playername3'],
    "playername4" => $_POST['playername4']
];

file_put_contents(
    "./data/player.json",
    json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
);

echo "OK";
?>


