
// let heading = document.querySelector('#heading')


let name = prompt('ID 인증이 필요합니다.', 'ID');
// var name = prompt('ID 인증이 필요합니다.', 'ID');
console.log(name);   // ctrl + shift + J or F12
  
let response = confirm('글자색을 바꾸시겠습니까?')  // 확인창

console.log(response); // Visual code 의 콘솔창에 출력을 해줌.

if (response ){
    let heading = document.getElementById("heading")
    heading.onclick = function(){
    heading.style.color = "red";
    // document.getElementById("text").innerHTML =  name + "님의 요청에 따라 색을 바꾸었습니다.";
    document.getElementById("text").textContent = name + "님의 요청에 따라 색을 바꾸었습니다.";
    // document.write('<p>' + name + "님의 요청에 따라 색을 바꾸었습니다.</p>");  // 모든 창의 내용을 다 지워 버림. 
    
    }
    alert(name + '님의 글자색을 바꿉니다..');  // 알림창 . 문자열결합    
    
}else{
    alert('글자색을 바꾸지 않습니다.');  // 알림창 .
}



let date = new Date();
// var temp =document.getElementById('text').textContent;  // 단순 텍스트로 출력
var temp =document.getElementById('text').innerHTML;    // HTML에 맞게 출력
temp =  temp + '<br>' + date;
document.getElementById('time').innerHTML = temp ;


// document.write("<p>1111</p>");
    // document.write("<p>1111</p>");
    // 
{}


