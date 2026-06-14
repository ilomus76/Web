<?php
    header('Content-Type:text/html; charset=utf-8');
    $name=$_POST['name'];
    $password = $_POST['pw'];



    // 서버의 데이타를 가져와서 일부분만 업데이트 함.. AJAX를 해야 프론트엔드라고 함...
    // 현존하는 방식은 좀더 간결하게 하는 작업인 XMLHttpRequest가 너무 안예뻐서 fetch()라는 내장함수() 즉 내려받아라는 명령으로 하면 더 간결함.
    // AI 는 무조건 fetch를 사용. 혹은 악시어스라고 하는것을 한다... 

    //XMLHttpRequest -> 내부함수 : AI는 이것으로 안하더라
    //fetch() -> 내부함수 -> AI가 거의 이것으로 함.
    //axios() -> 외부함수 -> fetch를 하면 이것도 사용가능 거의 fetch랑 거의 비슷한 문법.

    echo "$name 과 ${password}를 잘 받았습니다."; // 변수를 붙이면 안되고 이를 위해 {}을 사용

?>

