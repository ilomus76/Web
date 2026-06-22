<?php

header("Content-type:text/html; charset=utf-8");

$title = $_GET['title'];
$message = $_GET['msg'];

echo "$title , $message 을 받았습니다.";

echo "<h2> This is php server</h2>";
echo "<p>한글도 잘 되요</p>";

echo $title;
echo $message;
?>