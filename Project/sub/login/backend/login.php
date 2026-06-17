
<?php


    header('Content-Type:text/html; charset=utf-8');
    // 이 부분이 잘못되면 파일을 다운로드 받게 됨...

    $id = $_POST['id'];
    $pw = $_POST['password'];

    echo "$id, $pw";

    // DB에 연결해서 데이타를 읽어와야 함..

    // 1]
    $db = mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76');

    // 2] 한글 깨짐 방지

    mysqli_query($db,'set names utf8');

    // 3] CRUD 작업 요청
    $sql = "SELECT pw FROM member_info WHERE id='$id'";

    $result = mysqli_query($db,$sql);

    $row = mysqli_fetch_assoc($result);

    // $row['pw'] -->

   

//실무에서는 비밀번호를 평문으로 저장하지 않고:
// password_hash()
// password_verify()
// 를 사용합니다.
// 예:
// 회원가입 시:
// $pw = password_hash($_POST['password'], PASSWORD_DEFAULT);
// 로그인 시:
// if(password_verify($_POST['password'], $row['pw'])){
//     echo "로그인 성공";
// }

    if($row && $pw == $row['pw']){    
        echo ("로그인 되었습니다.");
    }else{
        echo ("ID나 Password를 확인해 보세요.");
    }
    
    mysqli_close($db);




    // ai 제안 php 코드

    
// header('Content-Type:text/html; charset=utf-8');

// $id = $_POST['id'];
// $pw = $_POST['password'];

// // 테스트가 끝나면 제거하는 것이 좋습니다.
// // echo "$id, $pw";

// // DB 연결
// $db = mysqli_connect(
//     'localhost',
//     'ilomus76',
//     'a1s2d3f4!',
//     'ilomus76'
// );

// // 한글 처리
// mysqli_query($db, 'set names utf8');

// // 비밀번호 조회
// $sql = "SELECT pw FROM member_info WHERE id='$id'";

// $result = mysqli_query($db, $sql);

// // 한 행 읽기
// $row = mysqli_fetch_assoc($result);

// // 로그인 판별
// if ($row && $pw == $row['pw']) {
//     echo "로그인 되었습니다.";
// } else {
//     echo "ID나 Password를 확인해 보세요.";
// }

// mysqli_close($db);
?>







