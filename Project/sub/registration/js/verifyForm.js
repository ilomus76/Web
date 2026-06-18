function verifyForm(){
    // alert("함수 실행!");
    // return false;
 

    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var birthday = document.getElementById("birthday").value;
    var tel = document.getElementById("tel").value;
    var sexuality = document.getElementById("sexuality").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var regExp ="";

    
    // 이름 검사
    if(name.trim() === "" || name ===""){ 
        // 앞뒤 공백을 제거한 새로운 문자열을 반환
        alert("이름을 입력하세요.");
        document.getElementById("name").focus();
        return false;
    }

    regExp = /^[a-zA-Z]/ ;
    // ID 검사
    if(id.trim() === "" || id === ""){
        alert("ID를 입력하세요.");
        document.getElementById("id").focus();
        return false;
    }else if(!regExp.test(id)){
        alert("영문 소문자 혹은 영문 대문자로 시작하세요!");
        document.getElementById("id").focus();
        return false;
    }

    
    regExp = /^[a-zA-Z]/ ; 
    // 비밀번호 길이 검사
    if(password===""){
        alert('비밀번호를 넣지 않았습니다. 비밀번호를 입력하세요!')
        document.getElementById('password').focus();
        return false;
    }else if(password.length < 8){
        alert("비밀번호는 8자 이상 입력하세요.");
        document.getElementById("password").focus();
        return false;
    }else if(!regExp.test(password)){
        alert('영문 소문자 및 대문자로 시작해 주세요!!');
        document.getElementById('password').focus();
        return false;
    }


    
    // 생년월일검사
    // regExp = /^[0-9]{0,4}.^[0-9]{,2}.^[0-9]{,2}$/;
    regExp = /^\d{4}\.\d{2}.\d{2}$/;
    if(birthday ===""){
        alert("생년월일을 입력하세요.");
        document.getElementById("birthday").focus();
        return false;
    }else if(!regExp.test(birthday)){
        alert("생년월일 형식이 맞지 않습니다.");
        document.getElementById("birthday").focus();
        return false;
    }



    // 전화번호 검사
    // regExp = /^[0-9]{0,4}.^[0-9]{,2}.^[0-9]{,2}$/;
    regExp = /^\d\d\d-\d\d\d\d-\d\d\d\d$/;
    if(tel ===""){
        alert("전화번호를 입력하세요.");
        document.getElementById("tel").focus();
        return false;
    }else if(!regExp.test(tel)){
        alert("전화번호 형식이 맞지 않습니다.");
        document.getElementById("birthday").focus();
        return false;
    }


    // 이메일 검사
    regExp = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/;
    if(email.trim() === "" || email ===""){
        alert("이메일을 입력하세요.");
        document.getElementById("email").focus();
        return false;
    }else if(!regExp.test(email)){
        alert("이메일 형식이 맞지 않습니다.");
        document.getElementById("birthday").focus();
        return false;
    }



    // 이메일 검사
    // regExp = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/;
    if(sexuality.trim() === "" || sexuality ===""){
        alert("성별을 입력하세요.");
        document.getElementById("sexuality").focus();
        return false;
    }


    // 시/도 검사
    // regExp = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/;
    if(city.trim() === "" || city ===""){
        alert("시도을 입력하세요.");
        document.getElementById("city").focus();
        return false;
    }

  // 동 검사
    // regExp = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/;
    if(province.trim() === "" || province ===""){
        alert("동을 입력하세요.");
        document.getElementById("province").focus();
        return false;
    }




// // 검증용 정규표현식 만들기(규칙정하기)
//                 var regExp = /^[a-zA-Z]+$/ ;   // 영문자 한개 이상 요구 // ^ 시작이 소문자 a 에서 z , 

//                 // 여러가지 정규펴현 규칙을 연습해 보기..
//                 regExp = /a/;  // a: 소문자 a가 포함된 모든......
//                 regExp = /A/;  // A: 대문자 A가 포함된 모든......
//                 regExp = /ab/;  // ab: 소문자 ab가 포함된 모든......   : ab처럼 붙어있는 것들만 됨. 어디에든 있으면 됨. 떨어져 있으면 안됨.
//                 regExp = /^a/;  // a: 소문자 a로 시작하는 모든......
//                 regExp = /^[a-z]/;  // a: 소문자 a에서 z로 끝나는 모든......  []는 범위 영역을 뜻함. a-z : a에서 z까지..    영어소문자로 시작하는 모든... 
//                 regExp = /a$/;  // a: 소문자 a로 끝나는 모든......
//                 regExp = /ab$/;  // ab: 소문자 ab로 끝나는 모든......
//                 regExp = /^a$/;  // 오직 a 한글자!......
//                 regExp = /^[a-z]$/;  // 오직 영어소문자 한글자!......
//                 regExp = /^[a-zA-Z]$/;  // 오직 영어 한글자!...... A-K 라고 하면 K 이상은 안됨. 
//                 regExp = /^[a-zA-Z0-9]$/;  // 오직 영어 or 숫자 한글자!......
//                 regExp = /^[a-z]{2}$/;  // 오직 영어소문자 2글자!......
//                 regExp = /^[a-z]{2,4}$/;  // 오직 영어소문자 2~4글자!......
//                 regExp = /^[a-z]{4,}$/;  // 오직 영어소문자 4글자 이상......
//                 regExp = /^[a-z]{,4}$/;  // 오직 영어소문자 4글자 까지......
//                  regExp = /^\w{4,}$/;  // 문자 or 숫자 4글자 이상...... 한글은 안됨. 한글은 들어가도 경우의 수를 다 써야함.  w: word
//                  regExp = /^[a-z]*$/;  // 영어 소문자 0개 이상 ... (값이 없어도 OK)
//                  regExp = /^[a-z]?$/;  // 영어 소문자 0개 또는 1개 ... (값이 없어도 OK)
//                  regExp = /^[a-z]+$/;  // 영어 소문자 1개 이상
//                  regExp = /^\d$/;     // 숫자1개
//                  regExp = /^\d\d\d$/;  // 숫자 3개
//                  regExp = /^\d{3,4}$/;  // 숫자 3~4개

//                 regExp = /^\d\d-\d\d-\d\d$/;  // 숫자 패턴 만들기... 12-34-56
//                 regExp = /^\d\d\d\d-\d\d-\d\d$/;  // 숫자 패턴 만들기... 1999-09-09  

//                 regExp = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/; // @가 나와야되  .뒤에   ,,, 이메일패턴 ###@##.##
//                 // 소문자대문자 0부터 9까지로 시작해서 하나 이상 골뱅이로 다음에 a-z 소문자 한개이상 으로 끝나야함. 

//                 regExp = /^http/ ;  // URL 주소를 올바로 입력하도록 요구 , http:// , https://도 있으니 http로 시작...           

//                 // 사용자가 input요소에 입력한 글씨가 위 규칙에 맞는지 검사
//                 var in4= document.getElementById('in4');
//                 if(regExp.test(in4.value)){
//                     alert('ok')
//                 }else{
//                     alert('요구하는 형식에 맞지 않아요~~')
//                 }


}

