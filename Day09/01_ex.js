//주석
// 브라우저의 흰색 화면에 글씨를 표시하기 
// 흰색 영역(body 요소)을 담당하는 JS(자바스크립트)의 내장 객체 document를 사용 -> 별도로 내가 안만들어도 제공해주는 함수

// 화면에 문자열 출력
document.write("Hello world");
// 줄이가는것은 HTML과 연결 안됬다는 것이니 무시하라.. 

//출력을 또 하면 줄바꿈이 될까?
document.write("줄바꿈 되나? <br> 태그 이용");  // 줄바꿈이 되지 않음. 하려면 줄바꿈 문자 <br> 를 표시.
// document -> 바디라고 생각하면 됨.  HTML 제어 ... 


// 태그문을 문자열안에 쓰니.. 브라우저에 적용되었으니...
document.write(`<hr>`);
document.write('<a href="https://www.naver.com">네이버</a>')
// document.write("<a href=`https://www.naver.com`>네이버</a>"")
document.write(`<hr>`)
// 숫자 데이타 출력
// document.write(10<br>);  안됨  숫자 문자는 같이 안됨. 
document.write(10); 
document.write(`<br>`);   // 이게 없으면 위와 아래 숫자가 같이 나옴.. 
document.write(3+5);
document.write(`<br>`); 

// 문자열 데이터의 덧셈은 산술연산이 아니라.. 결합연산.

document.write(`aa` + `bb`);
document.write(`<br>`); 
// 숫자 + 문자열 ? 
document.write(10 + `aa`); // 파이썬에서는 에러! JS는 결합연산.
document.write(`<br>`); 

// JS는 프로그래밍 언어이기에 변수 및 객체, 제어문 , 연산자 등이 존재함...
// 파이썬 a=10
var a=10;
document.write(a);   //변수 
document.write(`a`); // 글씨 
document.write(`<br>`); 


// 객체
var b= new Date(); // 날짜와 시간 정보를 관리하는 객체를 생성. 참조변수..
document.write(b);
document.write(`<br>`); 
//반복문..
for(var i=0; i<10 ; i++){
    document.write(i+",");     // 결합 , 문자 결합.
}


// 버튼 클릭같은 사용자의 이벤트에 반응하는 기능함수 만들기
// def 파이썬
function aaa(){
    alert('clicked button'); // 경고창을 보여주는 JS 의 내장함수 
}

//함수는 호출해야만 그 안에 있는 코드가 실행됨. 
///aaa();   // 함수 호출.  -> 이것은 무조건 실행이 됨. 그래서 버튼 눌렀을 때 호출되게 하자...HTML에서 만들어라.
//document.write('<br>');