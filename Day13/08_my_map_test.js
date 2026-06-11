// 지도를 보여줄 div 요소 찾기

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스




// 지도의 위치나 줌레벨 정도의 옵션으로 미리 지정.

//리터럴 객체
var options = { //지도를 생성할 때 필요한 기본 옵션

    // center : 정해진 용어. 
	// center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표. - 지도의 가운데가 표시한 위도 경도임. 
    center: new kakao.maps.LatLng(37.48659696555041,126.92925999999999), //지도의 중심좌표. - 지도의 가운데가 표시한 위도 경도임. 
    // 신림동 아카데미 위치를 중심으로
    // 
    
	level: 3 //지도의 레벨(확대, 축소 정도)  -> 줌 레벨임. 1~25까지이고 지역마다 다름.. 1이면 한국 전체 ... 25면 도로정도....
};



// 지도객체를 만들고 보여주기 
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
// 폴더들 안에 있는 Map, contaniner는 대상,,, 
// 





// var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'; // 마커이미지의 주소입니다   
var imageSrc = './image/ms_01.png'; // 마커이미지의 주소입니다   
var imageSize = new kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
var imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      



// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
// 마커가 표시될 위치입니다 
// var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 
var markerPosition  = new kakao.maps.LatLng(37.48659696555041,126.92925999999999)
// 네이버 제주 본사 위도 경도.

// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//     position: markerPosition
// });

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);    


// 이 코드들은 전부 서버에 있어야 서버에서 지도 서비스를 해줌. 
// 이 피씨에서 확인해 보려면 VS code의 왼쪽 사각 네모 옵션을 눌러 라이브서버라는 확장판을 설치하면 
// VS Code에서 오른쪽 클릭하면 눌러서 확인 가능.




// 

    




