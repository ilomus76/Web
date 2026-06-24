<?php


    session_start();

    $id = $_SESSION['id'];


    if(isset($_FILES['img'])){ // 혹시 'img'라는 이름의 식별자가 있는지 여부
        $file = $_FILES['img'];
        // echo "파일이름 : " . $file['name'] . '\n';   // php에서 . 은 연결 연산자. 
        // echo "파일크기 : " . $file['size'] . '\n';
        // echo "임시저장소 : " . $file['tmp_name'] . '\n';

        echo "파일이름 : " . $file['name'] . "<br>";
        // echo nl2br("파일이름 : ".$file['name']."\n");

        echo "파일크기 : " . $file['size'] . "<br>";
        echo "임시저장소 : " . $file['tmp_name'] . "<br>";

        
        // move_uploaded_file($file['tmp_name'], "." . $file['name']); // 임시 저장안에 같은 폴더

        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        // $newName = time() . "_" . $file['name'];
        // $newName = time() . "." . $ext;
        $newName = time() . "_" . $id . "." . $ext;
        // $savePath = "../../../resource/profile/" . $file['name'];
        $savePath = "../../../resource/profile/" . $newName;
        




        // move_uploaded_file($file['tmp_name'], "../../../resource/profile/" . $file['name'];
        $result = move_uploaded_file($file['tmp_name'], $savePath);
                  
        // 이미지 파일은 이곳에 저장하고 DB에는 이 파일의 경로만 저장한다. 


        // 404가 뜬다면
        // profileUpload.php 파일이 서버에 업로드되지 않았거나
        // backend 폴더 안에 없거나
        // 파일명이 다릅니다 (ProfileUpload.php, profileupload.php 등)

        if($result){
            echo "업로드 성공<br>";
        }else{
            echo "업로드 실패<br>";
        }

        //문자열 데이터는 그냥 POST 방식으로 전달되었으니...
        $nickname = $_POST['nickname'];
        echo "닉네임 : $nickname";
        // DB에 저장할 문자열
        $profileImage = "resource/profile/" . $newName;

        // $sql = "UPDATE member
        //         SET nickname='$nickname',
        //         profile_image='$profileImage'
        //         WHERE id='$id'";

    $db = mysqli_connect(
        'localhost',
        'ilomus76',
        'a1s2d3f4!',
        'ilomus76'
    );

    if(!$db){
    die("DB 연결 실패 : " . mysqli_connect_error());
}

    mysqli_query($db, 'set names utf8');

    $sql = "UPDATE member_info
            SET nickname='$nickname',
                profile_image='$profileImage'
            WHERE id='$id'";

    $result2 = mysqli_query($db, $sql);

    // if($result2){
    //     echo "DB 저장 성공";
    // }else{
    //     echo "DB 저장 실패";
    // }
    if($result2){
    echo "DB 저장 성공";
    }else{
        echo "DB 저장 실패<br>";
        echo mysqli_error($db);
    }

    mysqli_close($db);

    }else{
        echo "이미지 없음";
    }
?>

