<?php

$appJS = glob("dist/app*.js");
$appCSS = glob("dist/app*.css");

$html = file_get_contents('index.html');
$html = preg_replace('#dist/app\.css#', $appCSS[0], $html);
$html = preg_replace('#dist/app\.js#', $appJS[0], $html);

echo $html;
