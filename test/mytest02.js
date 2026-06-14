// DOM : body
function onLoadCompletionOfBody(){
    var body = document.querySelector('body');
    body.style.backgroundColor='yellow';


    var pp = document.querySelector('#wrap p')
    // var pp = document.querySelector('#wrap>p')
    pp.style.color = 'red';

    var h4s = document.querySelectorAll('#wrap>h4')
    h4s[0].style.color = 'red';
    h4s[1].style.color = 'blue';
    h4s[2].style.color = 'green';
    
}

// DOM : body -> div -> button
function addTextNode(){
    // reference : 01_dom.html 
    var creation_node  = document.createTextNode('이 곳은 연습용 공간입니다.');
    var read_node = document.getElementById('p1');
    read_node.appendChild(creation_node); // 기존에 있던 글자에 이어짐. 

}
function addTextNode2(){
    var p = document.getElementById('p1');
    p.textContent = '<a href="">this is only text not anchor.'
}

function addNode(){
    // reference : 01_dom.html 
    var a = document.createElement('a');
    var attr = document.createAttribute('href');
    var text = document.createTextNode('네이버'); 
    
    attr.value = 'https://www.naver.com';
    a.setAttributeNode(attr);

    a.appendChild(text);

    var temp = document.getElementById('p2');
    temp.appendChild(a);
 

}

function addNode2(){
    var p = document.getElementById('p2');
    p.innerHTML += '<a href="https://www.naver.com">네이버</a>';

}


function removeChildNode(){
    var p = document.getElementById('p2');
    p.removeChild(p.firstChild);

}


function changeStyle(e){
    // 스타일 변경 연습
    var p = e.previousElementSibling;
    p.style.color = 'red';

}






