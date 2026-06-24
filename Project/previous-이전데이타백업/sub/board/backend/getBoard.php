<?php




    session_start();

    header('Content-Type:application/json; charset=utf-8');

    // /// 로그인 확인///////////////////////////////////
        if (!isset($_SESSION['id'])) {
            echo json_encode([
                "status" => "fail",
                "msg" => "login_required"
            ]);
            exit;
        }
    // ////////////////////////////////////////////////






    //사용자가 GET 방식으로 요청한 게시글 번호
    $no = $_GET['no'];

    // web_board 테이블에서 $no 번에 해당하는 한줄 데이타를 뽑아서.. json형식으로 응답.

    $db = mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76');
    mysqli_query($db, 'set names utf8');

    // 특정 번호의 게시글 요청 쿼리문 작성
    $sql= "SELECT * FROM web_board WHERE no=$no"; // no 값이 $no 인 곳...
    $result = mysqli_query($db,$sql);

    //결과표에는 해당되는 게시글 1개만 가져오면 되니.. 반복문 없이..
    $row = mysqli_fetch_array($result,MYSQLI_ASSOC); // 연관배열로 한줄 뽑기
    $row['id'] = $_SESSION['id'];
    echo json_encode($row);// json 형식으로 응답.. 이제 getBoard.php를 완료... 끝... 자 그러면 데이타 가져왔으니..
    // 그러면 한줄의 데이타 의 타이틀 칸을 출력해 보기 ..view.js




?>