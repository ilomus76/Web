// ---------- option 3
window.onload = loaded;

var map;
var marker;

function loaded() {

    // 지도 생성
    var map_container = document.getElementById('map1');

    var options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780),
        level: 3
    };

    map = new kakao.maps.Map(map_container, options);

    // 마커 이미지
    var imageSrc = '../resouce/images/red_thin_tilt_pin.png';
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