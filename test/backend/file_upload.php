<?php
    header("Content-Type:text/html; charset=utf-8");

    $file = $_FILES['img_file'];

    $file_name = $file['name'];
    $file_size = $file['size'];
    $file_type = $file['type'];
    $error_info = $file['error'];
    $temp_name = $file['tmp_name'];

    echo "파일명 : $file_name <br>";
    echo "파일사이즈 : $file_size <br>";
    echo "파일타입 : $file_type<br>";
    echo "에러정보 : $error_info<br>";
    echo "임시저장소 경로: $temp_name<br>";

    $dst_name = "./uploaded/".date("YmdHis").$file_name;
    $result = move_uploaded_file($temp_name,$dst_name);
    echo "dst 장소: $dst_name<br>";
    if($result){
        echo " 파일업로드 성공 ^^";
    }else{
        echo " 파일업로드 실패 ㅜ";
    }


?>