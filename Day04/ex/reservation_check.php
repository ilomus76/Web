<?php
    header('Content-Type:text/html;charset=utf-8');

    // html에서 response에 대한 요청이 오면 해당 데이타를 주는 행위.
    // html에서 post 방식으로 요청함. 
    
    // MySQL에 접속 by php에 의해서..
    $db = mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76');


    // 한글깨짐 방지
    mysqli_query($db,"set names utf8");

    // 쿼리문 및 요청 
    $sql = "SELECT * from reservation_temp"; 
    $result_set = mysqli_query($db,$sql);
    if($result_set){
        //echo "모든 데이타베이스의 정보를 가져옵니다."
        echo "<p>순서 &nbsp;&nbsp;&nbsp;&nbsp;이름&nbsp;&nbsp;&nbsp;&nbsp;전화번호 &nbsp;&nbsp;&nbsp;&nbsp; 이메일&nbsp;&nbsp;&nbsp;&nbsp;날짜/시간";

        $row_nums= mysqli_num_rows($result_set);
        for($i=0;$i<$row_nums; $i++){
            $row = mysqli_fetch_array($result_set,MYSQLI_ASSOC); 
            $number = $row['number'];
            $name   = $row['name'];
            $phone  = $row['phone'];
            $email  = $row['email'];
            $date   = $row['date'];
            
            
            echo "<p> $number &nbsp;&nbsp; $name: &nbsp;&nbsp; $phone &nbsp;&nbsp; $email &nbsp;&nbsp; $date&nbsp;&nbsp; </p> ";
        }

    }

    mysqli_close($db);

//user_name
//user_phone_number
//user_email



?>