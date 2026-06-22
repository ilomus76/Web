<?php
    header("Content-Type:text/html; charset=utf-8");

    $name = $_GET['name3'];
    $msg = $_GET['msg3'];

    echo "$name , $msg";

    $db = mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76');

    mysqli_query($db,'set names utf8');

    $sql = "INSERT INTO memo(name, message) VALUES('$name','$msg')";
    $result = mysqli_query($db,$sql);

    if($result){
        echo "메모글 저장이 완료되었습니다.";
    }else{
        echo "메모글 저장에 실패했습니다. 다시 시도해 주세요.";
    }

    mysqli_close($db);





    


?>