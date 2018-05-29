<?php
// requested URL
$addr = strtolower($_SERVER['REQUEST_URI']);
$url = '';

// redirects
$redir = array(

	'index' => '',
	'welcome' => '',
	'home' => '',
	'tag' => 'news/',
	'blog' => 'news/',
	'train' => 'roof-training-courses/',
	'course' => 'roof-training-courses/',
	'pitch' => 'roof-training-courses/pitched-roofing/',
	'lead' => 'roof-training-courses/lead-welding-bossing/',
	'estimat' => 'roof-training-courses/roof-estimating/',
	'solar' => 'roof-training-courses/solar-panel-installation/',
	'aware' => 'roof-training-courses/solar-installation-roof-awareness/',
	'slat' => 'roof-training-courses/slating-tiling/',
	'til' => 'roof-training-courses/slating-tiling/',
	'about' => 'about-us/',
	'cent' => 'about-us/roof-training-centre/',
	'client' => 'about-us/our-clients/',
	'custom' => 'about-us/our-clients/',
	'testimonial' => 'about-us/our-clients/',
	'link' => 'about-us/links/',
	'train' => 'service/knowledge/',
	'contact' => 'contact-us/',
	'mail' => 'contact-us/',
	'tel' => 'contact-us/'

);
foreach ($redir as $pold => $pnew) if (strpos($addr, $pold) !== false) $url = '/* @echo rootURL */' . $pnew;

if ($url !== '') {

	// redirect found
	header('HTTP/1.1 301 Moved Permanently');
	header('Location: ' . $url);

}
else {

	// show error page
	header('HTTP/1.0 404 Not Found');
	include('error/index.html');

}
