<?php
    header('Content-Type:text/html; charset=utf-8');

    // POST[''] : '' 안에는 html에서 들어오는 폼요소의 id와 일치하는 값이 와야 함.
    $name = $_POST['name'];
    $id = $_POST['id'];
    $pw = $_POST['password'];
    $email = $_POST['email'];

    $birthday = $_POST['birthday'];
    $tel = $_POST['tel'];
    $sexuality = $_POST['sexuality'];
    $city = $_POST['city'];
    $province = $_POST['province'];

    // 잘 받았는지 확인 Day4 aaa.php
    // echo "$name, $id, $pw ,$email , $birthday ,  $tel , $sexuality,  $city , $province";
    
    //MySQL에 연결
    $db = mysqli_connect('localhost','ilomus76','a1s2d3f4!','ilomus76');
    
    //한글 깨짐 방지 요청
    mysqli_query($db,'set names utf8');

    // CRUD 작업 요청을 위한 명령
    $sql="INSERT INTO member_info(name,id,pw,email,birthday,tel,sexuality,city,province) VALUES('$name', '$id', '$pw' ,'$email' , '$birthday' ,  '$tel' , '$sexuality',  '$city' , '$province')";                                                 

    $result = mysqli_query($db,$sql); // 실행

    // if($result){
    //     echo "회원가입이 완료되었습니다.";
    // }else{
    //     echo "회원가입에 실패했습니다. 다시 시도해 주세요.";
    // }

    mysqli_close($db);   

?>



 <!-- // Start of Server Side Rendering  /// -->
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ARPES-registration</title>
    <link rel="stylesheet" href="../css/registration.css">
</head>
<body>
    <header>
        <nav id="menu_bar">
            <a href="../../../index.html">홈</a>
            <a href="../../study/study.html">과학</a>
            <a href="#">운동</a>
            <a href="#">건강</a>
            <a href="../../favoritefood/food.html">맛집</a>
            <a href="../../login/login.html">로그인</a>
            <a href="../registration.html">회원가입</a>
        </nav>
        <div id="header_image">

        </div>
    </header>
    <main>
        <aside id="left_page">

        </aside>
        <section id="main_page">
            <div id="reg_wrap">
            <?php
                // <form action="./backend/registration.php" method="post">
                //     <h3>회원가입</h3>
                    echo("<p>축하합니다. 회원가입에 성공했습니다. !!!</p> ");
                    // echo("<p class='success_msg'>축하합니다. 회원가입에 성공했습니다. !!!</p>");
                
                    // .success_msg{
                    //     text-align:center;
                    //     font-size:1.2rem;
                    // }
                    echo("<a href='../../login/login.html'><p>로그인 페이지로 이동합니다.</p></a>")
                
                
                
                    //     <div >
                //         <label for="" class="reg_info"><span>이름&nbsp;&nbsp;:</span><input type="text" placeholder="이름" id="name" name="name"></label>
                //         <label for="" class="reg_info"><span>ID:&nbsp;&nbsp;</span><input type="text" placeholder="ID" id="id" name="id"></label>
                //         <label for="" class="reg_info"><span>비밀번호&nbsp;&nbsp;:</span><input type="text" placeholder="비밀번호" id="password" name="password"></label>
                //         <label for="" class="reg_info"><span>생년월일&nbsp;&nbsp;:</span><input type="text" placeholder="생년월일(2000.01.01)" id="birthday" name="birthday"></label>
                //         <label for="" class="reg_info"><span>전화번호&nbsp;&nbsp;:</span><input type="text" placeholder="전화번호(010-0000-0000)" id="tel" name="tel"></label>
                //         <label for="" class="reg_info"><span>이메일&nbsp;&nbsp;:</span><input type="text" placeholder="이메일" id="email" name="email"></label>
                //         <label for="" class="reg_info"><span>성별&nbsp;&nbsp;:</span><input type="text" placeholder="성별" id="sexuality" name="sexuality"></label>
                //         <label for="" class="reg_info"><span>시/도&nbsp;&nbsp;:</span><input type="text" placeholder="시/도" id="city" name="city"></label>
                //         <label for="" class="reg_info"><span>동&nbsp;&nbsp;&nbsp;:</span><input type="text" placeholder="동" id="province" name="province"></label>
                //     </div>
                //     <div id="submit_wrap">
                //         <input type="submit" value="완료">
                //         <input type="cancel" value="취소">
                //     </div>
                // </form>
            ?>
            </div>
            

        </section>
        <aside id="right_page">

        </aside>

    </main>
    <footer>

    </footer>
    
</body>
</html>