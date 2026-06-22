<?php
    header("Content-Type:text/html; charset-utf8");

    $db = mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76');
    if(!$db){
        echo "DB에 연결 실패";
    }

    mysqli_query($db,'set names utf8');
    $sql = "SELECT * FROM board " ;
    $result = mysqli_query($db,$sql);

    if($result){
        $row_number = mysqli_num_rows($result);
        // $num = count($result);

        for($i=0 ; $i<$row_number ; $i+=1){
            $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
            $no = $row['no'];
            $name = $row['name'];
            $title = $row['title'];
            $message = $row['message'];
            $file_path = $row['file_path'];
            $date = $row['date'];

            $message = nl2br($message);

            echo "<h4> $no $name </h4>";
            echo "<h5> $title </h5>" ;
            echo "<p> $message </p>" ;
            echo "<p> $date </p>" ;

            if($file_path){
                echo "<img src='$file_path' alt='첨부이미지' width='200'>";


            }
            echo "<hr>";
        }
    }else{
            echo "게시글 리스트를 불러오는 중 오류가 발생했습니다. <br>";
        }
                  
    mysqli_close($db);
?>