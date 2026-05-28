<?php
    header('Content-Type:text/html; charset=utf-8');
    
    // 사용자가 POST 방식으로 보낸 글씨 데이터는 $_POST 라는 특별한 배열 변수에 저장됨. 
    // 사용자가 File을 보내면 실제 파일데이터들(픽셀정보들 bytes)은 임시저장소(tmp : 서버마다 다름.)에 임시로 저장됨. 
    // 이 php파일에는 file 의 정보를 가진 $_Files[]라는 배열이 전달됨. (일종의 택배송장 같은 개념..)

    //파일은 용량이 크다... 큰 물건을 운송하는데.. 그것을 한번에 놓지 않고... 별도의 하역장으로 들어옴...임시공간에 놓음. 
    //파일을 업로드 하면 임시 폴더를 놓음..
    // 택배가 사무실로 와서 우리가 꺼내면 되는데.. 파일은 물건이 너무 크니 사무실로 가져오지 못하고 임시 공간에 놓음.. 사무실에는 송장만 가져옴.
    // 송장에 정보가 있는데 그것이 메타 데이타라고 함... 파일 종류.. 어디에 있는지 다 있음... 

    // 이미지 파일은 가로 100, 세로 100픽셀이고 jpg 라면.. 총 10000칸 , 10000바이트 이고 rgb 3개 ... 30000바이트..
    // 메타데이타.. 가 붙는다.. 헤더라고 함... 실제로 용량이 더 잡힘... 

    $file = $_FILES['img1'];    // 파일을 여러개 받을 수 있어 식별자가 많을 수 있다...  html 문서의 img1 요소 받음... 

    // 임시 저장소에 데이타가 있음.. 우리는 송장만 받음.

    // 파일정보들 확인... ( $file은 5칸 짜리 배열임.)
    $file_name = $file['name'];     // 원본 파일명
    $file_size = $file['size'];     // 파일 사이즈 (byte)
    $file_type = $file['type'];     // 파일 타입 (image/jpg, audio/mp3, ..... : MIME type : multi purpose intenet)
    $error_info = $file['error'];   // 에러 정보
    $temp_name = $file['tmp_name']; // 실제 파일 데이터가 있는 임시저장소의 경로(위치)
    // file[''] 의 '' 안의 값은 고정 정해짐. 
    
    
    // 일반적으로는 이 파일정보들이 온전히 있다면... 파일전송이 잘 된것임..

    // 확인해 보기 ... 
    echo "파일명: $file_name<br>";
    echo "파일사이즈 : $file_size<br>";
    // 우리는 부라우저에서 보니 <br>을 넣음.
    
    echo "파일타입 : $file_type<br>";
    echo "에러정보 : $error_info<br>";
    echo "임시저장소 경로: $temp_name<br>";

    // $temp_name 위치에 있는 파일의 실제데이터는 임시공간이기에...
    // 이 코드가 종료되면 사라짐... 

    // 그래서 반드시 서버에서 할당된 내 저장소(html폴더 내부)안으로 이동해야 함..
    // 임시 저장소는 php 설치시 만들어진 공간임... 서버안에 있는 공간.. 

    // 4교시 
    // 옮기는 작업
    //move_uploaded_file(어디서,어디로); 움직여 어디서 어디로..
    // 어디로 : bbb.php와 같은 위치에 폴더하나 만들자... 이름이 uploaded라는 폴더로 만들자... 

    // 이동시킬 곳의 파일명이 중복되면 안되기에 .. 보통은 날짜정보를 파일명으로 사용함.. 
    //$dst_name="./uploaded/aaa.jpg"
    //$dst_name="./uploaded/"."aaa.jpg"; // php에서는 문자열의 결합연산자가 .임 즉 두 문자열이 결합됨. 
    //$dst_name="./uploaded/".$file_name; // user가 제목을 같이 쓰면 서버에서 덮어씌어짐.
    //$dst_name="./uploaded/"."20260101".$file_name; // user가 제목을 같이 쓰면 서버에서 덮어씌어짐.
    $dst_name="./uploaded/".date("YmdHis").$file_name; // 년 월 시 초 까지 해줌... 기본값이 이러해서 안에 파라미터로 해줌.  H: 24 , h : 12시간제... Y: 1999 y:99 
    // Y-m-d H:i:s
    $result = move_uploaded_file($temp_name,$dst_name);  // 임시저장소에서 목적하는 곳으로 이동하겠다... 
    if($result){
        echo "파일 업로드 성공 ^^";
    }else{
        echo "파일 업로드 실패 ㅠㅠ";
    }
    // 파일 질라에서 성공하면 uploaded 폴더에 이미지가 저장됨. 그것을 보려면 refresh해라... 



    



?>
