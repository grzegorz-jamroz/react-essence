<?php

$appJS = glob("build/app*.js");
$runtimeJS = glob("build/runtime*.js");
$appCSS = glob("build/app*.css");

$html = file_get_contents('../index.html');
$html = preg_replace('#build/app\.css#', $appCSS[0], $html);
$html = preg_replace('#build/runtime\.js#', $runtimeJS[0], $html);
$html = preg_replace('#build/app\.js#', $appJS[0], $html);

echo $html;
