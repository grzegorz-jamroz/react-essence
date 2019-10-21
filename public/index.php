<?php

$appJS = glob("build/app*.js");
$appCSS = glob("build/app*.css");

$html = file_get_contents('build/index.html');
$html = preg_replace('#build/app\.css#', $appCSS[0], $html);
$html = preg_replace('#build/app\.js#', $appJS[0], $html);

echo $html;
