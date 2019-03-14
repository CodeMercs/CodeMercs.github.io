<?php
use App\Http\Controllers\BotManController;

$botman = resolve('botman');

$botman->hears('Hi', function ($bot) {
    $bot->reply('Hello!');
});
$botman->hears('你好', function ($bot) {
    $bot->reply('我不好!');
});
$botman->hears('你叫做', function ($bot) {
    $bot->reply('我叫 XXX!');
});
$botman->hears('你叫', function ($bot) {
    $bot->reply('我叫 XXX!');
});

$botman->hears('Start conversation', BotManController::class.'@startConversation');
