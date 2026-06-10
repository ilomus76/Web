// JS 에러 발생하면 .. 그 자리에서 코드 실행이 멈춤
    document.write('javascript의 공간입니다. ')
    document.write('예외처리에 대해 알아보자<br><br>');

    try{
        document.write('in try <br>')
        // alert('start');
        var temp_a;
        console.log(1);
        if(temp_a === undefined){
            throw "빈문자 에러"
        }
    }catch(error_case){
        document.write('in catch <br>');
        document.write(error_case + ' 에러 입니다.하지만 진행됩니다. <br>');

    }
    finally{
        document.write('in finally <br>');
        
    }

/////////////////////////  

var pi = 3.14;
document.write(Math.floor(pi) + '<br>');
document.write(Math.round(pi)+'<br>');
document.write(Math.ceil(pi) + '<br>');

var tter = Math.random();
document.write(tter + '<br>')





var array_temp = new Array(10,20,30);
var array_b = new Array(1,3,5)
// 내장 객체를 new로 생성해서 배열로 만듦.
for(var i=0; i<array_temp.length; i++){
    document.write('type : ' + typeof(array_temp[i]) + ' : ' + array_temp[i] + '<br>');
}

document.write('<br> : ' + array_temp.toString());
document.write('<br> : ' + typeof(array_temp));
document.write('<br> : ' + array_temp);

var result = array_temp.concat(array_b);
document.write('<br> : concat : ' + result);
document.write('<br> : origin of array_temp: ' + array_temp)


document.write('<br> : ' + typeof(array_temp));
document.write('<br> : ' + typeof(array_b));
var ddd = array_temp + array_b;  // "10,20,301,3,5" 문자열임. 
document.write('<br> result : ' + ddd + ' : type of ddd : ' + typeof(ddd) + '<br>');

document.write(array_temp.indexOf(20) + '<br>');
document.write(array_temp.indexOf(30) + '<br>');
document.write(array_temp.indexOf(1) + '<br>');
document.write(ddd.indexOf(1) + '<br>');
document.write(ddd.indexOf(3) + '<br>');
document.write(ddd.indexOf(5) + '<br>');
document.write(ddd.indexOf(10) + '<br>');
document.write(ddd.indexOf(20) + '<br>');
document.write(ddd.indexOf(30) + '<br>');
// document.write(ddd.indexof(5,2) + '<br>');


var stack = [1,2,3,4,5,6];
stack.push(10);
document.write(stack + ':' + typeof(stack) );
var t = stack.pop();
document.write('<br> pop number : ' + t + '<br>');
t = stack.pop();
document.write('<br> pop number : ' + t + '<br>');
document.write('<br> ' + stack + '<br>');

stack.push(10);
document.write('<br>xxx :  ' + stack + '<br>');
t=stack.shift();
document.write('<br>xxx :  ' + t + '<br>');


var zzz = stack.slice(3);
document.write('<br>oooo :  ' + zzz + '<br>');
document.write('<br>tttt :' + stack + '<br>'); 
stack.reverse();
document.write('<br>tttt :' + stack + '<br>'); 

zzz = stack.join("&");
document.write('<br>aaaa :' + zzz + '<br>'); 

zzz = stack.sort();
document.write('<br>uuuu :' + zzz +  ' : ' + stack + '<br>'); 

zzz.sort(function(a,b){
    return a-b;
});
document.write('<br>tatata :' + zzz +  ' : ' + stack + '<br>'); 

var sam = zzz.filter(function(e,idx,array){
    return e >=5 && idx>1
});
document.write('<br>mumg :' + sam +  ' : ' + stack + '<br>'); 


sam = zzz.forEach(function(e,idx,array){
    document.write(e + ' : ' + idx + '::::' + array.length + '<br>');
});


// sam = zzz.map(function(e,idx,array){
sam = zzz.map(function(idx){
    return idx*2;
})
document.write('<br>zang :' + sam +  ' : ' + stack + '<br>'); 








