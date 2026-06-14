<?php
    header('Content-Type:text/html; charset=utf-8');

    // 사용자가 GET 방식으로 전달한 값을 변수에 저장
    $nickname = $_GET['nickname'];    //
    $email = $_GET['email'];

    // 실제로는 Database에 저장하는 작업 수행하고 결과를 응답(reponse-echo)로 처리

    // DB 작업까지 하면 시간이 오래걸리니...지금은 그냥 .. 했다고 치고... 받은 데이터를 그대로 응답해주기. 
    // 원래는 insert, delete , update등을 반드시 해야 한다.

    // echo "$nickname - $email 값으로 회원가입을 했습니다.";

    // 사용자 요청으로 받아서 됬습니다.. 외침...응답함..

    // AJAX 기술이 없을 때.. 페이지가 변경되었다는 것을 사용자가 인식하지 못하도록...
    // 응답할때.. 원래 웹 페이지를 그대로 다시 출력. 
    // php가 html을 만들어 주는 것임. html 파일을 주는 것이 아니라..

    // echo "<!DOCTYPE html>"; 
    // 이렇게 하면 모든 html을 써야 해서 짜증.


    // "을 전부 ' 로 바꿔라
    // 통채로 html 코드를 다 써서 보내준 것임. 

    // 서버에 있는 데이타를 사용자의 page의 HTML에 코드로 직접 써서 페이지가 없어지는 것을 방어함..
    // 이 경우 HTML 코드가 많다면 사용자의 페이지에서 업데이트 되는 깜빡임이 심해질 것이다.
    // 이런 경우를 대비해 네이버의 경우 특정 영역만 업데이트를 하거나 페이지를 변경해서 돌아오는 우회 방법을 사용하기도 함..
    // AJAX의 경우 비동기식으로 자바스크립트 를 이용해서 XML or JASON 과 같은 구분된 데이타로 받아와서 업데이트를 함. 

    echo ("

        <!DOCTYPE html>
            <html lang='ko'>
            <head>
                <meta charset='UTF-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <title>no ajax</title>
                <!-- AJAX 안썼을때 문제점 알아보기 -->
            </head>
            <body>
                <!-- 1. 서버에 있는 텍스트 문서를 읽어오는 요청 HTTP request -->
                <form action='./aaa.txt' method='get'>
                    <!-- 서버에 있는 문서를 접근 -->
                    <input type='submit' value='서버의 텍스트 데이터 불러오기'>
                </form>
                <hr>

                <h3>회원가입 페이지</h3>
                <form action='./aaa.php' method='get'>
                <input type='text' placeholder='닉네임 입력하세요' name='nickname' value='$nickname'>
                <!-- get : url? 식별자 =값 & 식별자=값 , post-->
                <input type='text' placeholder='이메일 입력하세요' name='email' value='$email'>

                <input type='submit' value='가입하기'>
                <!-- 누르면 서버의 데이타 베이스에 저장해서 그에 대한 결과를 보여주겠다. -->
                </form>
                <hr>
                <textarea cols='50' rows='5'>$nickname - $email 데이터로 회원가입했습니다. </textarea>
            </body>
            </html>

        ");

?>


