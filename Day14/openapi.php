<?php
header('Content-Type:application/json; charset=utf-8');
// header('Content-Type:application/csv');
// header('Content-Type:application/xml');

// 영화진흥위원회 OPEN API를 대신 요청하여 오늘의 박스오피스 정보를 사용자에게 응답
// 이 php는 오직 중계역할만 할거다.

// php언어에서 다른 서버에 데이터를 요청하는 문법: curl [ client url] - CLI환경의 서버요청 명령어
// 서버인데 내가 꼭 클라이언트처럼 하겠다는 것임. 
// 원래 터미널 CLI 환경의 서버요청 명령어....


// curl 라이브러리 시작!
// database 에서는 mysqli로 했다.
$ch = curl_init(); // 시작 ... 

// 이제 다른 서버에 보낼 준비 됨.

// curl 로 수행할 작업을 옵션으로 설정.

$url ="https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=494179480f84ebba867a5d0a4246c609&targetDt=20260611";

curl_setopt($ch,CURLOPT_URL, $url); // 옵션을 설정해라. 채널을 통해서.. ch. CURL옵션중 URL과 값...  // 별도 설정 없으면 GET 방식임. 
// 이제 php는 어디로 갈지 url을 알게 됬다.. 

// 중계서버이기 때문에 요청은 하지만 받을 생각은 하지 않는다... 근데 난 받고 싶은것이다.
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // curl 옵션중에 돌려받을 것인데 전송을 ,, 진짜? 응 // 요청 결과를 받겠다고 설정
// POST 방식은 더 해야 할게 많다 .... 복잡함...  


// 이제 설정되었으니.. curl 작업을 실행!!!

// 준비해 ,, url하고 결과받을것이야 ..실행해..누구를 통해서 $ch를 통해서 
$result = curl_exec($ch);  // 응답받은 결과를 리턴해 줌. 자바스크립트처럼 비동기식으로 받지 않아 그냥 받으면됩

// 결과가 있는지 확인 한 후 사용자(자바스크립트 ajax)에게 응답
if($result){
    echo $result;  // 아래의 text로 전송


    //   function bbb(){
    //         fetch('./openapi.php')
    //         .then(function(res){return res.text()})
    //         .then(function(text){
    //             document.getElementById('pp').innerHTML=text;
    //         })
}else{
    echo "실패 !!" . curl_error($ch) ;
    // php 에서는 .이 결합연산자이다. 
}
?>