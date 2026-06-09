// 예외처리.

document.write('HTML에 연결됨. 화면을 모두 지우고 다시씀.<br>')
document.write('예외처리를 적용할 예정입니다.<br>')



    document.write('you are in Try area.<br>')
    // 전역변수 or 지역변수 
    // var day_schedule ; // undefined in Number 
    
    // Object 선언. Day11 , 01_object.html 팀프로젝트 2번, 개인 프로젝트 1번 다음주 개인 프로젝트. 게시판처럼 만드는것. 서버까지 . 백엔드까지 줌. 
    function Schedule(title,time){
        this.title = title;
        this.time = time;

        if(this.title == ''){
                throw " 제목 빈공간 에러." ; 
            }

        this.item_gen = function(){
            document.write('<br>&nbsp;' + this.time + '--' + '해야할 일: ' + this.title +'<br>');
        };


    }


try{

    var target_time = new Date(2026,6,13); 
    var item1 = new Schedule('아침운동',target_time); 
    item1.item_gen();
    

    target_time = new Date(2026,7,13);
    var item2 = new Schedule('',target_time); 
    item2.item_gen();
    // document.write(item1.item_gen());


}catch(e){ 
    // this is the area to see all of errors. 
    document.write('<br><br>you are in Error area.<br>')
    document.write('에러가 발생했습니다.<br>');
    document.write('에러는 :' + e +" 와 같습니다. <br>")
    document.write('<br><br> End of Error area.<br>')

}finally{
    // this is the area to apply all of code to be implemented. 

    document.write('<br><br>you are in Finally area.<br>')      
    document.write('<br><br> End of  Finally area.<br>');
}
