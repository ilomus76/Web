<?php
    //이해하기 힘든 내용
    header('Content-Type:text/html; charset=utf-8');

    // 사용자에게 받는 것이 없음.
    // board 테이블에 저장되어 있는 모든 게시글 데이터들 읽어와서 응답response 해주기.

    //1. 접속
    $db = mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76'); // php와 서버가 같은 컴퓨터라 localhost

    //2.한글깨짐 방지
    mysqli_query($db,"set names utf8");


    //3.board 테이블의 모든 게시글 데이타들을 가져오는 쿼리문 작성 및 요청.
    // 쿼리는 구조화된 명령문 , 문자열
    $sql="SELECT * FROM board";// 모든 칸을 board 테이블로 부터 가져와 
    $result_table =mysqli_query($db,$sql); // select 의 조건에 따른 결과표를 리턴해줌<div class=""></div>  
    // 결과표를 result set이라고 하는데 그것을 result table이라고 하겠다...  즉 원본과 다른 결과표를 만드는데 all을 가져오니 원본과 같은 내용을 가져오는것과 같다.
    // 혹시 쿼리문이 잘못 되었다면... 결과표($result_table)가 얻어지지 않음. 
    if($result_table){
        //게시글이 있다.. True 
        // 결과표에서 데이타를 읽어오는 작업은 무조건 한줄씩 읽어짐. 셀별로 읽어오는 것이 아니라 한줄(row, record)씩 읽어짐.

        // 결과표에 있는 총 레코드(row: 한줄)의 개수 확인
        $row_num=mysqli_num_rows($result_table); // 마이에스쿠엘에서 넘버를 가져와. 몇라인인지..


        //반복문을 통해.. 총 레코드의 수 만큼 한줄씩 데이터를 읽어와서 사용자에게 보여주기 ( 응답. echo)
        for($i=0;$i<$row_num;$i+=1){
            //$row = mysqli_fetch_array($result_table); // 결과표에서 한줄 데이터를 (연관)배열로 받기. => 파이썬에서는 딕션너리 php에서는 연관배열이라고 함. 
            //echo $row; // 배열이라는 array로 출력됨. 
            //echo $row[0]; //no
            //echo $row[1]; //name
            //echo $row[2]; //title
            //echo $row[0]; //no
             //$row = mysqli_fetch_array($result_table,MYSQLI_NUM); // MYSQLI_NUM -> 숫자로 주는 방법. default
             $row = mysqli_fetch_array($result_table,MYSQLI_ASSOC); // MYSQLI_ASSOC -> 이름으로 주는 방법. default

             // 한줄에서 각 칸들의 값들을 뽑아오기
             $no=$row['no'];
             $name = $row['name'];
             $title = $row['title'];
             $message = $row['message'];
             
             $file_path = $row['file_path'];
             $date = $row['date'];

            //줄바꿈 문자.. 해결
             $message= nl2br($message); // new line을 br로 바꿔주는 함수.. new line to br 

             echo "<h4>$no $name </h4>";
             echo "<h5>$title</h5>";
             echo "<p>$message</p>";
             echo "<p>$date</p>";

             if($file_path){
                //파일 첨부 안할수도 있어서... 
                //파일 이미지 파일이 있다면.. 
                echo "<img src='$file_path' alt='첨부이미지' width='200'>";
                // tag를 알고 있어 우리가 알고 있는 문자열을 만들어서 보냄. 

             }
             echo "<hr>";

        }
        //$row= mysqli_fetch_array() // 내려받아라.. 한줄을 배열(리스트 or 딕션너리 같은..)로 주세요... 
        //$row= mysqli_fetch_array() // 내려받아라.. 한줄을 배열(리스트 or 딕션너리 같은..)로 주세요...
        //$row= mysqli_fetch_array() // 내려받아라.. 한줄을 배열(리스트 or 딕션너리 같은..)로 주세요...  
        //$row= mysqli_fetch_array() // 내려받아라.. 한줄을 배열(리스트 or 딕션너리 같은..)로 주세요... 
        //$row= mysqli_fetch_array() // 내려받아라.. 한줄을 배열(리스트 or 딕션너리 같은..)로 주세요... 


    }else{
        echo "게시글 리스트를 불러오는 중 오류가 발생했습니다.  <br>";
    }

    //4. 연결 종료
    mysqli_close($db);





?>