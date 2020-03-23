<?php

require_once "vendor/autoload.php";
use Sinergi\BrowserDetector\Browser;

$browser = new Browser();

if ($browser->getName() === Browser::IE && $browser->getVersion() < 11) {
    echo 'IE, Please upgrade your browser.';
}

if ($browser->getName() === Browser::IE) {
    echo 'IE -> OWO////';
}

if ($browser->getName() === Browser::CHROME) {
    echo 'CHROME -> OWO////';
}

if ($browser->getName() === Browser::OPERA) {
    echo 'OPERA -> OWO////';
}

if ($browser->getName() === Browser::SAFARI) {
    echo 'SAFARI -> OWO////';
}

if ($browser->getName() === Browser::FIREFOX) {
    echo 'FIREFOX -> OWO////';
}
?>