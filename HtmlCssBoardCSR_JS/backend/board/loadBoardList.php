<?php
    // 응답을 json형식으로 하겠다.
    header('Content-Type:application/json;charset=utf-8');
    // header('Content-Type:application/json');
    // header('Content-Type:application/json');

    //MYSQL DBMS(database management system) 와 연결하여 데이터들 가져오기
    $db = mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76'); // localhostDB 주소 : DB 주소, 접속아이디, 접속비번, DB명

    // 한글 안깨지기
    mysqli_query($db, 'set names utf8');


    //web_board 테이블의 모든 데이터들을 번호 기준 내림차순으로 불러오는 sQL 퀴리문 작성
    $sql = "SELECT * FROM web_board ORDER by no DESC" ;/// primary 키는 절대 중복되지 않는 키
    $result = mysqli_query($db,$sql);

    // 요청한 결과표($result)로 부터 게시글 데이터들을 한줄씩 가져와서 $board_list라는 이름의 배열에 추가 
    $board_list = []; // 빈 배열 만들기
    // 게시글 수 만큰 반복하여 한줄씩 데이터를 가져오기
    
    $row_num = mysqli_num_rows($result); // $result로 부터 가져온 값의 행 갯수 
    for($i=0; $i<$row_num ; $i++){
        $row = mysqli_fetch_array($result,MYSQLI_ASSOC); // 연관 배열로 한줄 뽑기... .a[key] 같은 것.
        $board_list[$i] = $row;  // 각줄마다 7개 데이타가 있을 것이다.

    }

    // MySQL과 연결 종료
    mysqli_close($db);


    // $board_list의 요소 개수
    $board_size = count($board_list);
    // 사용자에게 응답할 데이타들을 연관 배열로 준비.... 
    $response = [];
    // $response['name']='sam';
    // $response['age']='20';
    // $response['address']='seoul';

    // 위의 것은 json이 아니고 배열이기 때문에 이것을 json으로 변경하는  함수가 아래와 같다.  그러면 { 'name', 20} 식으로 됨.

    $response['status'] =200; // 응답 성공 코드
    $response['total'] = $board_size ;// 총 게시글 수
    $response['data'] = $board_list; // 실제 데이터들 배열

    // 위 연관배열을 json 형식으로 변환하여 사용자에게 응답
    echo json_encode($response);  

    // php는 서버에 있어야 동작됨. 그래서 서버에 올려야 함..


?>