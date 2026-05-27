<?php
    // 응답할 데이터의 형식을 미리 알려주어야 함.
    // http통신은 head 와 body 로 통신한다. 
    header("Content-Type:text/html; charset=utf-8");  
    // 내가 보내는 내용의 타입은 텍스트이고 형식은 html이다.
    // image 는 img/png


    // 사용자가 GET 방식으로 보낸 데이터를 처리해보기.
    // PHP는 GET 방식으로 보내온 데이터들을 $_GET 이라는 이름을 가진 배열에 자동 넣어줌. 
    // PHP 언어에서 변수를 만들거나 사용할때는 반드시 $와 함께 사용해야 한다. $_GET
    $title=$_GET['title']; // title 이라는 식별자를 통해 GET 방식으로 전달
    $message=$_GET['msg']; 

    //$a=10;
    //$b=20;
    //$c=$a + $b;

    //echo $c;
    //echo "$a 를 출력합니다."; // 문자열에서 a를 변수로 인식
    //echo '$a 를 출력합니다.'; // 문자열에서 a를 변수로 인식 못함. 




    
    // 이 부분이 body , 사용자에게 보여줄 곳.
    // 주석 : 
    // 사용자가 보는 브라우저에 글씨 출력하기 (응답하기 response)
    echo "<h2>this is php server</h2>";  
    // echo "this is php server">; 도 가능. 하지만 html방식이 아님.
    // 에러가 나오면 그 전까지의 에러를 봐라.... 
    echo "<p>한글도 잘 되요</p>";  

    //사용자가 보내온 데이터를 잘 받았는지 응답해보기(브라우저에 출력)
    echo "$title <br>";
    echo "$message";

?>