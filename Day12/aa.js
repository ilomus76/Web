document.getElementById('bb').style.color = 'red';

// 버튼 요소 찾아서 클릭 이벤트 등록.
var btn = document.querySelector('#btn') ; // css 선택자로 요소 찾기 , 선택자를 요구하는 함수
btn.onclick=function(){
    // btn아 내가 onclick 이벤트를 달게 함수로..
    alert('click event !');   
}
// html에다 함수 이름을 등록하는것은 실제로는 권장하지 않음. 복잡한 상황에서 고치기 힘듦.
// 권장하는 방법은 addEventListener 를 권장..

// 또 다른 동작으로.. 이벤트를 등록하면.... 이전 이벤트 함수는 없어지고 .. 이 함수만 실행됨... 변수의 값이 대체되었기 때문.
btn.onclick=function(){
    alert('other event!');
}



// 버튼 클릭 이벤트 처리 함수를 등록하는 또 다른 방법
var btn2= document.querySelector('.kk');// 클래스 선택자
btn2.addEventListener('click',function(){
    alert('버튼 클릭!');
}); // 이벤트를 듣는 녀석... 어떤 이벤트 on + 이벤트 : on 은 ~할때 라는 것임.

btn2.addEventListener('click',function(){
    alert('두번째 이벤트 처리 함수.');
});
// 여러 개를 등록하면 차례대로 실행됨. 

