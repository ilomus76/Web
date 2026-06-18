let map; // 지도 변수
let ps; // 카카오맵 장소검색 객체 저장변수
let markers = []; //마커저장변수

let selectedIndex = 0; //구장선택인덱스
let overlay;

// 검색결과 저장
let searchResults = [];

// 마지막 위치 저장
let lastPos = null;

//10개구단 야구장위치
const stadiums = [
    { team:"LG 트윈스", stadium:"잠실야구장", lat:37.5121, lng:127.0719 },
    { team:"두산 베어스", stadium:"잠실야구장", lat:37.5121, lng:127.0719 },
    { team:"SSG 랜더스", stadium:"SSG랜더스필드", lat:37.4369, lng:126.6934 },
    { team:"키움 히어로즈", stadium:"고척스카이돔", lat:37.4982, lng:126.8671 },
    { team:"KIA 타이거즈", stadium:"광주기아챔피언스필드", lat:35.1681, lng:126.8890 },
    { team:"삼성 라이온즈", stadium:"삼성라이온즈파크", lat:35.8419, lng:128.6811 },
    { team:"롯데 자이언츠", stadium:"사직야구장", lat:35.1940, lng:129.0615 },
    { team:"NC 다이노스", stadium:"창원NC파크", lat:35.2226, lng:128.5827 },
    { team:"KT 위즈", stadium:"수원KT위즈파크", lat:37.2997, lng:127.0097 },
    { team:"한화 이글스", stadium:"한화생명볼파크", lat:36.3171, lng:127.4293 }
];

//페이징 로딩후 초기화
window.onload = () => {

    initMap();

    const selected = document.getElementById("selected");
    const options = document.getElementById("options");

    if (selected && options) {
        createSelect();

        selected.addEventListener("click", toggleOptions);

        document.addEventListener("click", function (e) {
            const selectBox = document.querySelector(".stadium-select");

            if (selectBox && !selectBox.contains(e.target)) {
                options.classList.remove("show");
            }
        });
    }
};

// 구단 선택 리스트 생성
function createSelect() {
    const options = document.getElementById("options");
    if (!options) return;

    let html = "";

    stadiums.forEach((s, index) => {
        html += `<div class="option" onclick="selectTeam(${index})">${s.team}</div>`;
    });

    options.innerHTML = html;
}

// 드롭다운 토글
function toggleOptions() {
    const options = document.getElementById("options");
    if (!options) return;

    options.classList.toggle("show");
}

// 팀 선택
function selectTeam(index) {

    selectedIndex = index;

    const selected = document.getElementById("selected");
    const options = document.getElementById("options");

    if (selected) selected.innerHTML = stadiums[index].team;
    if (options) options.classList.remove("show");

    changeStadium();
}


// =========================
// 지도 초기화
// =========================
function initMap() {

    map = new kakao.maps.Map(document.getElementById("map"), {
        center: new kakao.maps.LatLng(stadiums[0].lat, stadiums[0].lng),
        level: 4
    });

    ps = new kakao.maps.services.Places();

    drawStadium();
}


// =========================
// 마커 초기화
// =========================
function clearMarkers() {
    markers.forEach(m => m.setMap(null));
    markers = [];
}


// =========================
// 야구장 마커 표시
// =========================
function drawStadium() {

    const s = stadiums[selectedIndex];

    const pos = new kakao.maps.LatLng(s.lat, s.lng);

    const marker = new kakao.maps.Marker({
        map,
        position: pos,
        title: s.stadium
    });

    markers.push(marker);

    map.setCenter(pos);
}


// =========================
// 야구장 변경
// =========================
function changeStadium() {

    clearMarkers();
    drawStadium();

    const list = document.getElementById("list");
    if (list) list.innerHTML = "";

    const routeInfo = document.getElementById("routeInfo");
    if (routeInfo) {
        routeInfo.innerHTML = `
            <div>거리 : -</div>
            <div>예상시간 : -</div>
        `;
    }
}


// =========================
// 장소 검색
// =========================
function searchPlace(type) {

    clearMarkers();
    drawStadium();

    ps.keywordSearch(
        `${stadiums[selectedIndex].stadium} ${type}`,
        placeCallback
    );
}


// =========================
// 검색 결과 콜백
// =========================
function placeCallback(data, status) {

    if (status !== kakao.maps.services.Status.OK) {
        alert("검색 결과가 없습니다.");
        return;
    }

    searchResults = data;

    let html = "";

    data.forEach((place, index) => {

        const lat = Number(place.y);
        const lng = Number(place.x);

        const pos = new kakao.maps.LatLng(lat, lng);

        const marker = new kakao.maps.Marker({
            map,
            position: pos
        });

        markers.push(marker);

        const stadiumPos = new kakao.maps.LatLng(
            stadiums[selectedIndex].lat,
            stadiums[selectedIndex].lng
        );

        const straight = getDistance(stadiumPos, pos);

        html += `
        <div class="card" onclick="moveMap(${index})">
            <h3>${place.place_name}</h3>
            <p>${place.address_name}</p>
            <p>${place.phone || "-"}</p>

            <p>직선거리 : ${straight} km</p>
        </div>`;
    });

    document.getElementById("list").innerHTML = html;
}


// =========================
// 카드 클릭 이동 + 거리 계산
// =========================
function moveMap(index) {

    const place = searchResults[index];

    const newPos = new kakao.maps.LatLng(
        Number(place.y),
        Number(place.x)
    );

    const stadiumPos = new kakao.maps.LatLng(
        stadiums[selectedIndex].lat,
        stadiums[selectedIndex].lng
    );

    const straight = getDistance(stadiumPos, newPos);

    const prevPos = lastPos || newPos;
    lastPos = newPos;

    clearMarkers();

    const marker = new kakao.maps.Marker({
        position: prevPos
    });

    marker.setMap(map);

    markers = [marker];

    if (overlay) overlay.setMap(null);

    overlay = new kakao.maps.CustomOverlay({
        position: prevPos,
        content: `<div class="place-label">${place.place_name}</div>`,
        xAnchor: 0.5,
        yAnchor: 2.0
    });

    overlay.setMap(map);

    animateMove(marker, prevPos, newPos);
    animateOverlay(overlay, prevPos, newPos);

    moveCamera(newPos);

    // =========================
    // 🚀 도보 + 거리 + 시간 계산 (핵심)
    // =========================
    getWalkRoute(stadiumPos, newPos, straight);
}


// =========================
// 직선 거리 계산 (km)
// =========================
function getDistance(p1, p2) {

    const R = 6371;

    const dLat = (p2.getLat() - p1.getLat()) * Math.PI / 180;
    const dLng = (p2.getLng() - p1.getLng()) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(p1.getLat() * Math.PI / 180) *
        Math.cos(p2.getLat() * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return (R * c).toFixed(2);
}


// =========================
// 🚀 도보 거리 + 시간 API (카카오)
// =========================
function getWalkRoute(from, to, straight) {

  const url = `https://apis-navi.kakaomobility.com/v1/directions?origin=${from.getLng()},${from.getLat()}&destination=${to.getLng()},${to.getLat()}&priority=TIME&alternatives=true`;

    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": "KakaoAK 4b8d696e486276640272e4aee9ece249"
        }
    })
    .then(res => res.json())
    .then(data => {

        let distance = straight;
        let time;
        let minTime;
        let maxTime;

        // =========================
        // ✔ 1. API 결과
        // =========================
        if (data.routes && data.routes.length > 0) {

            const route = data.routes[0];

            distance = (route.summary.distance / 1000).toFixed(2);
            time = Math.ceil(route.summary.duration / 60);
            minTime = Math.floor(time * 0.85);
            maxTime = Math.ceil(time * 1.15);

        } 
        // =========================
        // ✔ 2. fallback (보정)
        // =========================
        else {
            distance = straight;
            time = Math.ceil(straight * 12); // 평균 도보 속도
            minTime = Math.floor(time * 0.85);
            maxTime = Math.ceil(time * 1.15);
        }

        const routeInfo = document.getElementById("routeInfo");

        if (routeInfo) {
            routeInfo.innerHTML = `
                <div>거리 : ${distance} km</div>
                <div>예상시간 : ${time} 분</div>
                <div>오차범위 : ${minTime} ~ ${maxTime} 분</div>
            `;
        }
    })
    .catch(() => {

        const routeInfo = document.getElementById("routeInfo");

        if (routeInfo) {
            routeInfo.innerHTML = `
                <div>거리 : ${straight} km</div>
                <div>예상시간 : ${Math.ceil(straight * 12)} 분</div>
            `;
        }
    });
}


// =========================
// 마커 애니메이션
// =========================
function animateMove(marker, from, to) {

    let start = null;

    function step(timestamp) {

        if (!start) start = timestamp;

        const progress = Math.min((timestamp - start) / 300, 1);

        const lat = from.getLat() + (to.getLat() - from.getLat()) * progress;
        const lng = from.getLng() + (to.getLng() - from.getLng()) * progress;

        marker.setPosition(new kakao.maps.LatLng(lat, lng));

        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}


// =========================
// 오버레이 애니메이션
// =========================
function animateOverlay(overlay, from, to) {

    let start = null;

    function step(timestamp) {

        if (!start) start = timestamp;

        const progress = Math.min((timestamp - start) / 300, 1);

        const lat = from.getLat() + (to.getLat() - from.getLat()) * progress;
        const lng = from.getLng() + (to.getLng() - from.getLng()) * progress;

        overlay.setPosition(new kakao.maps.LatLng(lat, lng));

        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}


// =========================
// 카메라 이동
// =========================
function moveCamera(pos) {

    map.panTo(pos);

    setTimeout(() => {
        map.setLevel(5);
    }, 250);
}