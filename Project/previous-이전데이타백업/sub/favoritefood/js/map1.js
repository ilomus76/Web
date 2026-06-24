// ---------- option 3
window.onload = loaded;

var map;
var marker;

const menu = document.getElementById("menu1");
console.log(menu.dataset.type); 
// data-type에 대한 이해...

    const links = document.querySelectorAll("#nav_for_food a");
    // 배열 데이타를 가짐.. querySelectorAll
    const mapWrap = document.getElementById("map_wrap");
    const title = document.getElementById("title");
    const mapContainer = document.getElementsByClassName("map_container");
    const mapArea = document.getElementById("map1");

    links.forEach(link => {
        link.addEventListener("click", function(e) {   //  anchor에도 click 이벤트가 있음.
            // alert('dddd');


            // 차이 구별 
            // link.addEventListener("click", (e) => {
            //     console.log(this);
            // });
            // 여기서 this는 a 태그가 아니라 바깥 객체(window 등)를 가리킬 수 있습니다.



        e.preventDefault();           
        // a 태그의 기본 동작 방지
        // #는 현재 페이지의 맨 위(앵커 위치)로 이동합니다. 그래서 클릭하면: 페이지가 위로 살짝 이동하거나 주소가 food.html# 처럼 바뀔 수 있습니다.

        const type = this.dataset.type;
            // this → 이벤트가 등록된 요소
            // e.currentTarget → 이벤트가 등록된 요소
            // e.target → 실제 클릭된 요소


        title.textContent = type;
        // alert(type);

        if(type === "맛집 검색 지도"){
            // mapArea.innerHTML = "<div id='map1'></div>";
            // 맛집 지도 생성 함수 호출
            // alert('맛집');
            showFoodMap(type);
        }

        else if(type === "네트워크"){
            mapArea.innerHTML = "<div id='map2'></div>";
            // 네트워크 지도 생성 함수 호출
            showNetworkMap();
        }

        else if(type === "양자"){
            mapArea.innerHTML = "<div id='map3'></div>";
            showQuantumMap();
        }

        else if(type === "파워"){
            mapArea.innerHTML = "<div id='map4'></div>";
            showPowerMap();
        }

    });

});





function loaded() {

    default_map_gen();  
    // menu_search();    

}

function menu_search(){

    alert('');   
    
}


function showFoodMap(menu_type){
    // default_map_gen();
    mapHTMLgen(menu_type);
    favoritRestraunt();
    // menu_search_map();
}


function showNetworkMap(){
    default_map_gen();
}

function showQuantumMap(){
    default_map_gen();
}

function showPowerMap(){
    default_map_gen();
}


// function menu_search_map(){
//     mapHTMLgen();
// }

function mapHTMLgen(menu_type){

    //  alert('menu type');
    title.innerHTML = menu_type;
    // mapArea.innerHTML = "<div id='map1'></div>";
    mapArea.innerHTML = "<div class='map_wrap'>";
    mapArea.innerHTML = "<div id='map1' style='width:100%;height:100%;position:relative;overflow:hidden;'></div>";
    mapArea.innerHTML = "<div id='menu_wrap' class='bg_white'>";
    mapArea.innerHTML = "<div class='option'>";
    mapArea.innerHTML = "<div>";
    mapArea.innerHTML = "키워드 : <input type='text' value='' id='keyword' size='15'>";
    mapArea.innerHTML = "<button type='submit'>검색하기</button> ";
    mapArea.innerHTML = "</form> ";
    mapArea.innerHTML = "</div> ";
    mapArea.innerHTML = "</div> ";
    mapArea.innerHTML = "<hr> ";
    mapArea.innerHTML = "<ul id='placesList'></ul> ";
    mapArea.innerHTML = "<div id='pagination'></div></div></div>  ";   

    // mapArea.innerHTML = "키워드 : <input type='text' value='이태원 맛집' id='keyword' size='15'>";

}


function favoritRestraunt(){

        
    /// Step 1 ] 지도가 출력됨 

    // 마커를 담을 배열입니다
        var markers = [];

        var mapContainer = document.getElementById('map1'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };  

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 


    // Step2]
        // 장소 검색 객체를 생성합니다
        var ps = new kakao.maps.services.Places();  
       

        // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});

        

        // 키워드로 장소를 검색합니다
        searchPlaces();
    
}


// 키워드 검색을 요청하는 함수입니다
function searchPlaces() {

    alert('af');

    var keyword = document.getElementById('keyword').value;

    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch( keyword, placesSearchCB); 
}








function default_map_gen(){

    // 지도 생성
    var map_container = document.getElementById('map1');

    var options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780),
        level: 3
    };

    map = new kakao.maps.Map(map_container, options);

    // 마커 이미지
    var imageSrc = './resource/images/red_thin_tilt_pin.png';
    // var imageSize = new kakao.maps.Size(64, 69);
    var imageSize = new kakao.maps.Size(32, 34);
    var imageOption = {
        offset: new kakao.maps.Point(27, 69)
    };

    var markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
    );

    // 마커 생성
    marker = new kakao.maps.Marker({
        image: markerImage
    });

    marker.setMap(map);

    // 위치 추적
    navigator.geolocation.watchPosition(function(position){

        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        var loc = new kakao.maps.LatLng(lat, lng);

        // 지도 중심 이동
        map.setCenter(loc);

        // 마커 이동
        marker.setPosition(loc);

    }, function(error){

        alert(error.code + "\n" + error.message);

    });

}


