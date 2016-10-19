<?php

$recepient = "igor93osetia@yandex.ru";
$sitename = "Название сайта";

$name = trim($_GET["name"]);
$email = trim($_GET["email"]);
$mesage = trim($_GET["mesage"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $email \nТекст: $mesage";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");