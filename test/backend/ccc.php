<?php

header("Content-Type:text/html; charset:utf-8");

$name_title = $_GET['title2'];
$name_msg = $_GET['msg2'];

echo "<p>이름 : $name_title</p>";
echo "<p>메세지 : $name_msg</p>";


?>