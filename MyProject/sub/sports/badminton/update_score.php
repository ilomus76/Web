<?php
//update_score.php
header("Content-Type: application/json");



// 먼저 JSON 읽기
$input = json_decode(file_get_contents("php://input"), true);
if (!is_array($input)) {
    $input = [];
}




// $gameId = $input["gameId"] ?? 1;
$gameId = isset($input["gameId"]) ? (int)$input["gameId"] : 1;

$configFile = __DIR__ . "/games/config_" . $gameId . ".json";
// $config = json_decode(file_get_contents($configFile), true);

$maxScore = 21;
// $data["maxScore"] = $config["maxScore"] ?? 21;

// if (file_exists($configFile)) {
//     $config = json_decode(file_get_contents($configFile), true);

//     if (is_array($config)) {
//         $maxScore = $config["maxScore"] ?? 21;
//     }
// }

if (file_exists($configFile)) {
    $configRaw = file_get_contents($configFile);
    $config = json_decode($configRaw, true);

    if (json_last_error() === JSON_ERROR_NONE && is_array($config)) {
        $maxScore = $config["maxScore"] ?? 21;
    }
}





$file = __DIR__ . "/games/game_" . $gameId . ".json";
// 서버에 여러 사람이 접속해서 파일을 저장하는 방법

// $file = __DIR__ . "/current_game.json";
// 현재 파일이 있는 폴더 기준으로 JSON 파일 경로를 만든다”
//PHP의 매직 상수(magic constant) 입니다. 현재 실행 중인 PHP 파일이 위치한 폴더 경로를 반환
// /var/www/html/game/save.php
// 여기서 __DIR__ 값은:  /var/www/html/game
// " /current_game.json" 의미  // 그 폴더 안에 있는 파일 이름



if (!file_exists($file)) {
    $data = [
        "teamA" => 0,
        "teamB" => 0,
        "gameOver" => false,
        "maxScore" => 21
    ];
    file_put_contents($file,json_encode($data, JSON_PRETTY_PRINT),LOCK_EX);
} else {
    $data = json_decode(file_get_contents($file), true);

    if (!is_array($data)) {
        $data = [
            "teamA" => 0,
            "teamB" => 0,
            "gameOver" => false,
            "maxScore" => 21
        ];
    }
}



// $data = json_decode(file_get_contents($file), true);  
// PHP에서 **파일 내용을 “읽어서 문자열로 가져오는 함수


// 🔥 안전 초기화 (핵심)
$data["teamA"] = $data["teamA"] ?? 0;
$data["teamB"] = $data["teamB"] ?? 0;
$data["gameOver"] = $data["gameOver"] ?? false;
// $data["maxScore"] = $data["maxScore"] ?? 21;




//  JSON 읽기

// $input = json_decode(file_get_contents("php://input"), true);
// PHP에서 클라이언트가 서버로 보낸 “원본 데이터(body)”를 그대로 읽는 방법
// 브라우저나 JS가 보낸 요청의 본문(body)을 통째로 읽는다
// 아래의 경우 사용
// fetch() / AJAX로 JSON 보낼 때
// POST 요청인데 form-data가 아닌 경우
// API 서버 만들 때



// $team = $input["team"];
$team = $input["team"] ?? null;   //team이 없으면 null로 처리
//$team = $input["team"] ?? null;   //team이 없으면 null로 처리
// input 안에서 team이라는 이름의 칸을 직접 꺼내라. 순서대로 꺼내는건 아님.

$action = $input["action"] ?? "plus";   
// PHP에서 “값이 있으면 그걸 쓰고, 없으면 기본값을 쓰는” 문장


if ($data["gameOver"]) {

    $data["result"] = "already finished";

    echo json_encode($data);
    exit;// 종료되면 이 php가 종료됨
}

if ($team === "A") {
    if ($action === "plus") $data["teamA"]++;

    if ($action === "minus") 
        {
            $data["teamA"]--;
            $data["teamA"] = max(0, $data["teamA"]);
        }
}

if ($team === "B") {
    if ($action === "plus") $data["teamB"]++;
    if ($action === "minus") {
        $data["teamB"]--;
        $data["teamB"] = max(0, $data["teamB"]);
    }
}



/* 승리 조건 */
// if (($data["teamA"] >= $data["maxScore"] || $data["teamB"] >= $data["maxScore"])
//     && abs($data["teamA"] - $data["teamB"]) >= 2) {

//     $data["gameOver"] = true;
// }

if (($data["teamA"] >= $maxScore || $data["teamB"] >= $maxScore)
    && abs($data["teamA"] - $data["teamB"]) >= 2) {

    $data["gameOver"] = true;
}





// file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
$result=file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT),LOCK_EX);
// LOCK_EX 안 넣으면 동시 클릭에서 깨짐 발생 가능
// var_dump($result);
// file_put_contents("debug.log", print_r($result, true));
file_put_contents( "debug.log",date("Y-m-d H:i:s") . " result = " . $result . PHP_EOL, FILE_APPEND);
file_put_contents( "debug.log",date("Y-m-d H:i:s") . " input=" . print_r($input, true) . " gameId=" . $gameId . PHP_EOL,    FILE_APPEND);
$data["result"] = $result;
echo json_encode($data);
?>



