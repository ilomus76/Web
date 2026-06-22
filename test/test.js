// html의 객체를 통해서 가져옴.. 
// document 객체...
function change_image(){
    var img = document.getElementById('image_a');
    img.src='./image/logo2.png';

}

function return_to_image(){
    var img=document.getElementById('image_a');
    img.src='./image/logo.png';
}