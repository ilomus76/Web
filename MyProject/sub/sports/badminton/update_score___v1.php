<?php
header("Content-Type: application/json");

// 서버에서 php 직접실행 결과
// {"error":"no data received"}
// 는 서버(PHP)가 “요청은 받았는데 실제 데이터(body)가 비어 있다”는 뜻입니다.
// 즉, PHP 문제가 아니라 프론트에서 데이터가 제대로 안 넘어오는 경우가 대부분이에요.



/////////////////////////////////////////
// header("Content-Type: application/json");

// $raw = file_get_contents("php://input");

// if (!$raw) {
//     echo json_encode([
//         "error" => "no data received"
//     ]);
//     exit;
// }

// $data = json_decode($raw, true);

// $team = $data["team"] ?? null;

// // 테스트 응답
// echo json_encode([
//     "teamA" => 0,
//     "teamB" => 1,
//     "gameOver" => false,
//     "receivedTeam" => $team
// ]);

//////////////////////////////

$raw = file_get_contents("php://input");

if (!$raw) {
    echo json_encode(["error" => "no data received"]);
    exit;
}

$data = json_decode($raw, true);
$team = $data["team"] ?? "";

// 파일 경로
$file = __DIR__ . "/score.json";

// 초기값
if (!file_exists($file)) {
    file_put_contents($file, json_encode([
        "teamA" => 0,
        "teamB" => 0
    ]));
}

// 읽기
$current = json_decode(file_get_contents($file), true);

// 증가
if ($team === "A") {
    $current["teamA"]++;
} else if ($team === "B") {
    $current["teamB"]++;
}

// 저장
file_put_contents($file, json_encode($current, JSON_PRETTY_PRINT));

// 응답
echo json_encode([
    "teamA" => $current["teamA"],
    "teamB" => $current["teamB"],
    "gameOver" => false
]);

//////////////////////////////////////////////




// // JSON 받기
// $data = json_decode(file_get_contents("php://input"), true);

// if (!$data) {
//     echo json_encode(["error" => "no data received"]);
//     exit;
// }

// //// 데이타가 들어오는지 디버깅하기 /////////////////////
// // $data = json_decode($raw, true);
// // file_put_contents("debug.txt", $raw); // ⭐ 들어오는지 확인
// // echo json_encode([
// //     "raw" => $raw,
// //     "parsed" => $data
// // ]);
// ////////////////////////////////////




// $team = $data["team"] ?? "";

// // 현재 저장된 점수 파일
// // $file = "score.json"; // 동작안됨
// $file = __DIR__ . "/score.json";

// // 없으면 기본값 생성
// // if (!file_exists($file)) {
// //     $init = [
// //         // => 는 PHP에서 사용하는 “화살표(arrow)” 연산자, teaA 값에 0을 넣는다..
// //         "teamA" => 0,  
// //         "teamB" => 0
// //     ];
// //     file_put_contents($file, json_encode($init));
// // }


// if (!file_exists($file)) {
//     file_put_contents($file, json_encode([
//         "teamA" => 0,
//         "teamB" => 0
//     ]));
// }



// // 기존 점수 읽기
// $current = json_decode(file_get_contents($file), true);



// if (($data["team"] ?? "") === "A") {
//     $current["teamA"]++;
// } else if (($data["team"] ?? "") === "B") {
//     $current["teamB"]++;
//  }

// // // 점수 증가 처리
// // if ($team === "A") {
// //     $current["teamA"] += 1;
// // } else if ($team === "B") {
// //     $current["teamB"] += 1;
// // }



// // 저장
// // file_put_contents($file, json_encode($current));
// file_put_contents($file, json_encode($current, JSON_PRETTY_PRINT));

// // 결과 반환
// echo json_encode($current);
?>









