<?php

 header("Content-type:text/html; charset = utf-8");

 $name = $_POST['name5'];
 $title = $_POST['title5'];
 $msg = $_POST['msg5'];
 $msg = nl2br($msg);

 $file = $_FILES['img_input'];
 $file_name = $file['name'];
 $file_size = $file['size'];
 $file_type = $file['type'];
 $file_error = $file['error'];
 $temp_name = $file['tmp_name'];

 echo "<p> $name, $title </p>";
 echo "<pre> $msg </pre>";
 echo "$file_name, $file_size, $file_type, $file_error, $temp_name";


?>
