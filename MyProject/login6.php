<?php
    // 브라우저가 이 페이지를 HTML로 해석하고 UTF-8 인코딩을 사용하도록 지시합니다
    header('Content-Type: text/html; charset=utf-8');

    // session_start();

    // PHP의 Flask 같은 기능의 모듈기능에 의해서 파라미터가 올 것이다.
    
    // session_start();

    // $user_id = $_POST['user_id'];
    // $user_password = $_POST['user_password'];
    // $redirect = $_POST['redirect'] ?? 'IT';
    // $redirect = $_POST['redirect'] ?? $_GET['redirect'] ?? 'IT';

    

    session_start();

    $user_id = $_POST['user_id'] ?? '';
    $user_password = $_POST['user_password'] ?? '';
    $redirect = $_POST['redirect'] ?? '/myhome/';

// $now = date('Y-m-d H:i:s');




    // echo " 사용자 이름     : $user_id " ;
    // echo " 사용자 비밀번호 : $user_password "   ; 

    $now= date('Y-m-d H:i:s');

    //1. MySQL DBMS 에 접속
    $db = mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76');

    //2. 한글 깨짐 방지
    mysqli_query($db,"set names utf8");

    //3. 쿼리문 및 실행
    $sql = "INSERT INTO login_table(id,pw,date) VALUES ('$user_id','$user_password','$now')";
    $result = mysqli_query($db,$sql);

    if($result){
        //  echo " 모든 값을 입력했습니다." ;
        // 성공 시 다른 페이지로 이동
        //header("Location: success.php");
        // 클라이언트를 지정한 페이지로 즉시 이동시킵니다. exit;를 붙여야 이후 코드가 실행되지 않습니다.
        //header("Location: login.php");를 쓰면, DB 입력 후 클라이언트가 자동으로 success.php 페이지로 이동하게 됩니다.
        //exit;


        // 테스트용 계정
        $correct_id = "ilomus76";
        $correct_password = "a1s2d3f4!";


        // 로그인 확인
        if (
            $user_id === $correct_id &&
            $user_password === $correct_password
        ) {

            $_SESSION['login'] = true;
            $_SESSION['user_id'] = $user_id;
            // 로그인 성공
            // header("Location: ./sub/HTML/HTML.html");
            // header("Location: ./sub/login/index.html");
            // header("Location: ./sub/login/index.php");
            // exit();



            // 원래 가려던 페이지로 이동
            if ($redirect === "IT") {
                // header("Location: /myhome/sub/IT/index.php");

                header("Location: /myhome/sub/IT/index.php");
                exit();
            } else {
                header("Location: /myhome/");
                exit();
            }


        } else {

            // 로그인 실패
            echo "
            <script>
                alert('아이디 또는 비밀번호가 틀렸습니다.');
                history.back();
            </script>
            ";
        }



    }else{
        // echo " 값중 일부를 입력하지 않았습니다." ;
    }




    //4. 연결 종료
    mysqli_close($db);


    

?>