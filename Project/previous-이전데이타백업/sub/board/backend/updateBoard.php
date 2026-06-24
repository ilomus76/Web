<?php

session_start();

$no = $_POST['no'];
$title = $_POST['title'];
$msg = $_POST['msg'];

$db = mysqli_connect(
    'localhost',
    'ilomus76',
    'a1s2d3f4!',
    'ilomus76'
);

mysqli_set_charset($db,"utf8");

$sql = "
UPDATE web_board
SET title='$title',
    msg='$msg'
WHERE no=$no
";

mysqli_query($db,$sql);

mysqli_close($db);

echo "success";

?>