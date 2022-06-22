@extends('website.layouts.websiteNew')

@section("content")
<br>
<br>
<br>
<br>
<style>
.zero-content a:not(a[rel=external]):not(.fancybox-thumb){
    display: block !important;
}
.zero-content a { color: #BABABA;}
.zero-content a:hover { color: #BDA583;}
.zero-content a, a img {border: none; outline: none;}


.zeroc-ontent abbr[title] { border-bottom: 1px dotted; }
.zeroc-ontent b, strong { font-weight: bold; }
.zeroc-ontent blockquote { margin: 1em 40px; }
.zeroc-ontent dfn { font-style: italic; }
.zeroc-ontent hr {
  height: 1px; border: none;
}
ins { background: #ff9; color: #000; text-decoration: none; }
mark { background: #ff0; color: #000; font-style: italic; font-weight: bold; }
pre, code, kbd, samp { font-family: monospace, serif; _font-family: 'courier new', monospace; font-size: 1em; }
pre { white-space: pre; white-space: pre-wrap; word-wrap: break-word; }

q { quotes: none; }
q:before, q:after { content: ""; content: none; }
small { font-size: 85%; }
sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }
sup { top: -0.5em; }
sub { bottom: -0.25em; }

ul, ol { margin:0; padding: 0; }
dd { margin: 0 0 0 40px; }
nav ul, nav ol { list-style: none; list-style-image: none; margin: 0; padding: 0; }
ul{list-style: none;margin:0;padding:0;}


img { border: 0; -ms-interpolation-mode: bicubic; vertical-align: middle; }
svg:not(:root) { overflow: hidden; }
figure { margin: 0; }

form { margin: 0; }
fieldset { border: 0; margin: 0; padding: 0; }

label { cursor: pointer; }
legend { border: 0; *margin-left: -7px; padding: 0; white-space: normal; }
button, input, select, textarea { font-size: 100%; margin: 0; vertical-align: baseline; *vertical-align: middle; }
button, input { line-height: normal; }
button, input[type="button"], input[type="reset"], input[type="submit"] { cursor: pointer; -webkit-appearance: button; *overflow: visible; }
button[disabled], input[disabled] { cursor: default; }
input[type="checkbox"], input[type="radio"] { box-sizing: border-box; padding: 0; *width: 13px; *height: 13px; }
input[type="search"] { -webkit-appearance: textfield; -moz-box-sizing: content-box; -webkit-box-sizing: content-box; box-sizing: content-box; }
input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button { -webkit-appearance: none; }
button::-moz-focus-inner, input::-moz-focus-inner { border: 0; padding: 0; }
textarea { overflow: auto; vertical-align: top; resize: vertical; }
input:valid, textarea:valid {  }
input:invalid, textarea:invalid { background-color: #f0dddd; }

table { border-collapse: collapse; border-spacing: 0; }
td { vertical-align: top; }

.chromeframe { margin: 0.2em 0; background: #ccc; color: black; padding: 0.2em 0; }


.ir { display: block; border: 0; text-indent: -999em; overflow: hidden; background-color: transparent; background-repeat: no-repeat; text-align: left; direction: ltr; *line-height: 0; }
.ir br { display: none; }
.hidden { display: none !important; visibility: hidden; }
.visuallyhidden { border: 0; clip: rect(0 0 0 0); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px; }
.visuallyhidden.focusable:active, .visuallyhidden.focusable:focus { clip: auto; height: auto; margin: 0; overflow: visible; position: static; width: auto; }
.invisible { visibility: hidden; }
.clearfix:before, .clearfix:after { content: ""; display: table; }
.clearfix:after { clear: both; }
.clearfix { *zoom: 1; }
.fl {float:left !important;}
.fr {float:right !important;}
.clr {clear:both;}
.centered {text-align: center;}

@media print {
  * { background: transparent !important; color: black !important; box-shadow:none !important; text-shadow: none !important; filter:none !important; -ms-filter: none !important; }
  a, a:visited { text-decoration: underline; }
  a[href]:after { content: " (" attr(href) ")"; }
  abbr[title]:after { content: " (" attr(title) ")"; }
  .ir a:after, a[href^="javascript:"]:after, a[href^="#"]:after { content: ""; }
  pre, blockquote { border: 1px solid #999; page-break-inside: avoid; }
  thead { display: table-header-group; }
  tr, img { page-break-inside: avoid; }
  img { max-width: 100% !important; }
  @page { margin: 0.5cm; }
  p, h2, h3 { orphans: 3; widows: 3; }
  h2, h3 { page-break-after: avoid; }
}

/* clearfix */
.zero-content .clearfix:after,.zero-content  .row:after {content:"."; display:block; height:0; clear:both; visibility:hidden;}
.zero-content .clearfix,.zero-content  .row {display:inline-block;} /*Those two .clearfix have to be separate!)*/
.zero-content .clearfix,.zero-content  .row {display:block;}

.outline {outline:1px solid red;}

.wrapper {
  position: relative;
  margin:0 auto;
}
/*
	Variable Grid System.
	Learn more ~ http://www.spry-soft.com/grids/
	Based on 960 Grid System - http://960.gs/

	Licensed under GPL and MIT.
*/

/*
  Forces backgrounds to span full width,
  even if there is horizontal scrolling.
  Increase this if your layout is wider.

  Note: IE6 works fine without this fix.
*/

body {
  min-width: 1280px;
}

/* Containers
----------------------------------------------------------------------------------------------------*/
.container_16 {
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
}

/* Grid >> Global
----------------------------------------------------------------------------------------------------*/
footer{
    float:left;
}

.grid_1,
.grid_2,
.grid_3,
.grid_4,
.grid_4_n,
.grid_5,
.grid_6,
.grid_7,
.grid_8,
.grid_9,
.grid_10,
.grid_11,
.grid_12,
.grid_13,
.grid_14,
.grid_15,
.grid_16 {
  display:inline;
  float: left;
  position: relative;
  margin-left: 10px;
  margin-right: 10px;
}



.push_1, .pull_1,
.push_2, .pull_2,
.push_3, .pull_3,
.push_4, .pull_4,
.push_5, .pull_5,
.push_6, .pull_6,
.push_7, .pull_7,
.push_8, .pull_8,
.push_9, .pull_9,
.push_10, .pull_10,
.push_11, .pull_11,
.push_12, .pull_12,
.push_13, .pull_13,
.push_14, .pull_14,
.push_15, .pull_15,
.push_16, .pull_16 {
  position:relative;
}


/* Grid >> Children (Alpha ~ First, Omega ~ Last)
----------------------------------------------------------------------------------------------------*/

.alpha {
  margin-left: 0;
}

.omega {
  margin-right: 0;
}

/* Grid >> 16 Columns
----------------------------------------------------------------------------------------------------*/


.container_16 .grid_1 {
  width:60px;
}

.container_16 .grid_2 {
  width:140px;
}

.container_16 .grid_3 {
  width:220px;
}

.container_16 .grid_4 {
  width:300px;
}

.container_16 .grid_5 {
  width:380px;
}

.container_16 .grid_6 {
  width:460px;
}

.container_16 .grid_7 {
  width:540px;
}

.container_16 .grid_8 {
  width:620px;
}

.container_16 .grid_9 {
  width:700px;
}

.container_16 .grid_10 {
  width:780px;
}

.container_16 .grid_11 {
  width:860px;
}

.container_16 .grid_12 {
  width:940px;
}

.container_16 .grid_13 {
  width:1020px;
}

.container_16 .grid_14 {
  width:1100px;
}

.container_16 .grid_15 {
  width:1180px;
}

.container_16 .grid_16 {
  width:1260px;
}

.container_16 {
  position: relative;
}


/* Prefix Extra Space >> 16 Columns
----------------------------------------------------------------------------------------------------*/


.container_16 .prefix_1 {
  padding-left:80px;
}

.container_16 .prefix_2 {
  padding-left:160px;
}

.container_16 .prefix_3 {
  padding-left:240px;
}

.container_16 .prefix_4 {
  padding-left:320px;
}

.container_16 .prefix_5 {
  padding-left:400px;
}

.container_16 .prefix_6 {
  padding-left:480px;
}

.container_16 .prefix_7 {
  padding-left:560px;
}

.container_16 .prefix_8 {
  padding-left:640px;
}

.container_16 .prefix_9 {
  padding-left:720px;
}

.container_16 .prefix_10 {
  padding-left:800px;
}

.container_16 .prefix_11 {
  padding-left:880px;
}

.container_16 .prefix_12 {
  padding-left:960px;
}

.container_16 .prefix_13 {
  padding-left:1040px;
}

.container_16 .prefix_14 {
  padding-left:1120px;
}

.container_16 .prefix_15 {
  padding-left:1200px;
}



/* Suffix Extra Space >> 16 Columns
----------------------------------------------------------------------------------------------------*/


.container_16 .suffix_1 {
  padding-right:80px;
}

.container_16 .suffix_2 {
  padding-right:160px;
}

.container_16 .suffix_3 {
  padding-right:240px;
}

.container_16 .suffix_4 {
  padding-right:320px;
}

.container_16 .suffix_5 {
  padding-right:400px;
}

.container_16 .suffix_6 {
  padding-right:480px;
}

.container_16 .suffix_7 {
  padding-right:560px;
}

.container_16 .suffix_8 {
  padding-right:640px;
}

.container_16 .suffix_9 {
  padding-right:720px;
}

.container_16 .suffix_10 {
  padding-right:800px;
}

.container_16 .suffix_11 {
  padding-right:880px;
}

.container_16 .suffix_12 {
  padding-right:960px;
}

.container_16 .suffix_13 {
  padding-right:1040px;
}

.container_16 .suffix_14 {
  padding-right:1120px;
}

.container_16 .suffix_15 {
  padding-right:1200px;
}



/* Push Space >> 16 Columns
----------------------------------------------------------------------------------------------------*/


.container_16 .push_1 {
  left:80px;
}

.container_16 .push_2 {
  left:160px;
}

.container_16 .push_3 {
  left:240px;
}

.container_16 .push_4 {
  left:320px;
}

.container_16 .push_5 {
  left:400px;
}

.container_16 .push_6 {
  left:480px;
}

.container_16 .push_7 {
  left:560px;
}

.container_16 .push_8 {
  left:640px;
}

.container_16 .push_9 {
  left:720px;
}

.container_16 .push_10 {
  left:800px;
}

.container_16 .push_11 {
  left:880px;
}

.container_16 .push_12 {
  left:960px;
}

.container_16 .push_13 {
  left:1040px;
}

.container_16 .push_14 {
  left:1120px;
}

.container_16 .push_15 {
  left:1200px;
}



/* Pull Space >> 16 Columns
----------------------------------------------------------------------------------------------------*/


.container_16 .pull_1 {
  left:-80px;
}

.container_16 .pull_2 {
  left:-160px;
}

.container_16 .pull_3 {
  left:-240px;
}

.container_16 .pull_4 {
  left:-320px;
}

.container_16 .pull_5 {
  left:-400px;
}

.container_16 .pull_6 {
  left:-480px;
}

.container_16 .pull_7 {
  left:-560px;
}

.container_16 .pull_8 {
  left:-640px;
}

.container_16 .pull_9 {
  left:-720px;
}

.container_16 .pull_10 {
  left:-800px;
}

.container_16 .pull_11 {
  left:-880px;
}

.container_16 .pull_12 {
  left:-960px;
}

.container_16 .pull_13 {
  left:-1040px;
}

.container_16 .pull_14 {
  left:-1120px;
}

.container_16 .pull_15 {
  left:-1200px;
}



.banner_popup {
  width:1260px;
  height: 192px;
  margin:15px auto;
  margin-bottom:-20px;
  background:#ddd;
}
.banner_popup > img {
  object-fit: cover;
}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 99999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  z-index: 999999;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 65%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}



/* `Clear Floated Elements
----------------------------------------------------------------------------------------------------*/

/* http://sonspring.com/journal/clearing-floats */

.clear {
  clear: both;
  display: block;
  overflow: hidden;
  visibility: hidden;
  width: 0;
  height: 0;
}

/* http://www.yuiblog.com/blog/2010/09/27/clearfix-reloaded-overflowhidden-demystified */

.clearfix:before,
.clearfix:after {
  content: '\0020';
  display: block;
  overflow: hidden;
  visibility: hidden;
  width: 0;
  height: 0;
}

.clearfix:after {
  clear: both;
}

/*
  The following zoom:1 rule is specifically for IE6 + IE7.
  Move to separate stylesheet if invalid CSS is a problem.
*/

.clearfix {
  zoom: 1;
}

.d-flex {
	display: flex;
}
.d-flex-row {
	flex-direction: row;
}
.d-flex-column {
	flex-direction: column;
}
.d-flex__col--b40 {
	flex-basis: 40%;
}
.d-flex__col--b60 {
	flex-basis: 60%
}
.img-fluid {
	width: 100%;
	height: 100%;
}
.bacground-gray {
	background-color: #f2f2f2
}
.h_nav {
  float: right;
  text-align: right;
  font-size: 0;
  padding-right: 52px;
  padding-top: 15px;
}

.h_nav li {
  display: inline-block;
  margin-left: 22px;
}

.h_nav li a {
  display: block;
  font:11px/15px 'gotham_promedium';
  color:#AAA;
  text-decoration: none;
}

#header {
  position: relative;
  height: 130px;
  background: #00304A;
}
.rektor a {
  color: #BDA583 !important;
}

h1.logo {
  background: url(img/logo.png) no-repeat 0 0;
  float: left;
  height: 90px;
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
}

h1.logo a{
  font:15px/17px 'Georgia';
  text-transform: uppercase;
  letter-spacing: 1px;
  color:#FFF;
  display: block;
  padding-left: 98px;
  height: 62px;
  letter-spacing: 0;
  padding-top: 28px;
  text-decoration: none;
}

.search_block {
  background: #fff;
  position: absolute;
  left: 0;
  top: -50px;
  height: 44px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.search_block input {
  padding:0 2.5% 0 0;
  width: 97.5%;
  border:none;
  border-bottom: 1px solid #DDD;
  font:11px/42px 'gotham_promedium';
  color:#AAA;
  height: 42px;
}

.header_panel {
  background: #fff;
}

.search_button {
  position: absolute;
  z-index: 10;
  width: 18px;
  height: 18px;
  background: url(img/search_btn.png) no-repeat 0 0;
  right:0;
  top: 16px;
  border: none;
  padding: 0;
}


#carousel,
.c_prev.prev-slide,
.c_next.next-slide{
  display: none;
}

.m_banner {
  width: 100%;
  height: 460px;
  overflow: hidden;
  position: relative;
}
#carousel li {
  float: left;
  display: block;
  margin: 0 3px 0 0;
}

#carousel li img {
  display: block;
}
.c_prev, .c_next {
  background-color: rgba(0, 0, 0, 0.7);
  display: block;
  height: 460px;
  width: 50%;
  top: 0;
  position: absolute;
}
.c_prev:hover, .c_next:hover {
  background-color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
}
.c_prev {
  left: -634px;
}
.c_next {
  right: -632px;
}

.c_title {
  position: absolute;
  bottom: 0;
  width: 1260px;
  height: 250px;
  left: 50%;
  margin-left: -631px;
  background: url(img/c_title_bg.png) repeat-x 0 0;
}

.c_content {
  position: relative;
  float: left;
  width: 557px;
}

.c_navigation_prev ,.c_navigation_next{
  display: block;
  width:60px;
  height:60px;
  text-indent: -9999px;
}

.carousel_content {
  position: relative;
}

.c_prev.prev-slide span, .c_next.next-slide span {
  position: absolute;
  top: 50%;
  margin-top: -25px;
  width: 49px;
  height: 49px;
}

.c_prev.prev-slide span {
  right: -26px;
  z-index: 2000;
  background: url(img/m_banner_arrows.png) no-repeat 0 0;
}

.c_next.next-slide span {
  left: -26px;
  z-index: 200;
  background: url(img/m_banner_arrows.png) no-repeat -49px 0;
}


.c_content h3 {
  display: block;
  margin: 39px 0 7px;
  font: 24px/34px "gotham_promedium";
  color:#fff;
  letter-spacing: -1px;
  background: url(img/m_banner_title_bg.png) no-repeat bottom left;
  padding-bottom: 11px;
}
.c_content {
  margin-left: 62px;
}
.c_content span {
  display: block;
  font:20px/42px 'heuristicaregular';
  color:#fff;
  margin-bottom: 10px;
}
.m_banner_btn {
  height: 42px;
  background: #DFB000;
  font: 13px/42px "gotham_promedium";
  color:#fff;
  padding: 15px 19px;
  text-decoration: none;
  color:#fff;
  position:relative;
  border: none;
}
.banner_popup button {
	display: none;
}
.banner_popup:hover #myBtn {
	display: block;
	top: -42px;
    padding: 0 19px;
    z-index: 999;
}
.why_aseu {
  position: relative;
  height: 360px;
  background: #fff;
  top: 40px;
  text-align: center;
}

.why_aseu h3 {
  margin: 30px 0 57px;
  font:22px/31px 'heuristicaregular';
  color:#00517F;
}

.why_aseu p {
  margin: 0 0 21px;
  font:16px/23px 'heuristicaregular';
  color:#777;
}

.why_aseu > div {
  position: relative;
  width: 560px;
  margin:0 auto;
}

.why_aseu > div:before {
   content:"";
   position: absolute;
   left: 50%;
   top: -31px;
   width: 18px;
   height: 14px;
   margin-left: -9px;
   background: url(img/why_quote.png) no-repeat 0 0;
}

.why_aseu > div:after {
  content:"";
  position: absolute;
  left: 50%;
  bottom: -31px;
  width: 18px;
  height: 14px;
  margin-left: -9px;
  background: url(img/why_quote.png) no-repeat 0 -14px;
}

.home_catname {
  margin-top: 40px;
}


.home_catname article{
  position: relative;
  width: 300px;
  height: 120px;
  overflow: hidden;
}

.home_catname article:nth-child(odd) .cname {
  position: relative;
  width: 150px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  background: #fff;
  float: left;
}
.home_catname article:nth-child(odd) .cname:after {
  content:"";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 0 8px 13px;
  border-color: transparent transparent transparent #fff;
  position: absolute;
  right:-13px;
  top: 50%;
  margin-top: -8px;
  z-index: 100;
}
.home_catname article:nth-child(odd) .cname span {
  display: inline-block;
  vertical-align: middle;
  font:14px/20px 'gotham_promedium';
  color: #000;
  padding:0 15px;
}
.home_catname article:nth-child(odd) .cimg {
  width: 150px;
  height: 120px;
  float: right;
}

.cimg{
  position: relative;
}



.cimg:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.9);
  left: 0;
  top: 0;
}





.home_catname article:nth-child(even) .cname {
  position: relative;
  width: 150px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  background: #fff;
  float: right;
}
.home_catname article:nth-child(even) .cname:after {
  content:"";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 13px 8px 0;
  border-color: transparent #ffffff transparent transparent;
  position: absolute;
  left:-13px;
  top: 50%;
  margin-top: -8px;
  z-index: 100;
}
.home_catname article:nth-child(even) .cname span {
  display: inline-block;
  vertical-align: middle;
  font:14px/20px 'gotham_promedium';
  color: #000;
  padding:0 15px;
}
.home_catname article:nth-child(even) .cimg {
  width: 150px;
  height: 120px;
  float: left;
}

/*Cat color*/
.brown {} /*BACHELOR DEGREE*/
.blue {} /*MASTER DEGREE*/
.red {} /*DOCTORATE*/
.yellow {} /*FOR FOREIGNERS*/
.lightblue {}
.orange {}
.gray {}


/*Cat color*/


.home_catname article:nth-child(even) .cname span a{text-decoration: none;}
.home_catname article:nth-child(odd) .cname span a{text-decoration: none;}


.brown .cimg:before {background: rgba(68,68,68,0.9);}
.brown .cname span a {color: rgba(68,68,68,1);}


.blue .cimg:before {background: rgba(38,92,255,0.9);}
.blue .cname span a {color: rgba(38,92,255,1);}

.red .cimg:before {background: rgba(128,21,27,0.9);}
.red .cname span a {color: rgba(128,21,27,1);}

.yellow .cimg:before {background: rgba(224,177,0,0.9);}
.yellow .cname span a {color: rgba(224,177,0,1);}

.lightblue .cimg:before {background: rgba(39,155,208,0.9);}
.lightblue .cname span a {color: rgba(39,155,208,1);}

.orange .cimg:before {background: rgba(216,105,27,0.9);}
.orange .cname span a {color: rgba(216,105,27,1);}


.cat_types {
  border-bottom: 2px solid #fff;
  margin-top: 44px;
  position: relative;
  margin-bottom: 40px;
}

.cat_types > a {
  font:14px/20px 'gotham_promedium';
  color:#aaa;
  display: block;
  float: left;
  margin-bottom: -2px;
  padding-bottom: 22px;
  text-decoration: none;
  margin-right: 54px;
}

.cat_types > a.active {
  color: #DF452C;
  background: url(img/cat_types_bg.png) no-repeat bottom center;
}

.cat_types .fr {
  margin-right: 0;
}

.n_block {
  height: 356px;
  position: relative;
  display: block;
  background: #fff;
}
.n_image {
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
}

.n_block:hover .n_image > a {
  position: relative;
  width:100%;
  height:100%;
  display: block;
}

.n_block:hover .n_image > a > span {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,48,75,0.3);
  z-index: 100;
  display: block;
  opacity: 1;
}


.n_block:hover .n_image > a > span i {
  display: block;
  border: 1px solid #fff;
  margin:10px;
  width: 280px;
  height: 180px;
  opacity: 1;
}

.n_image > span , .n_image > a > span i {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  zoom: 1;
}


.n_date_over {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 50px;
  z-index: 200;
  background:#BBB;
  color:#fff;
  text-align: center;
  font: 21px/21px "heuristicaregular";
  padding-top: 10px;
}

.n_date_over {
  font: 21px/21px "heuristicaregular";
  color:#fff;
  height: 50px;
  padding-top: 10px;
}

.n_date_over span {
  display: block;
  font:12px/18px 'gotham_promedium';
  color:#fff;
}


.brown {} /*#00304B;*/
.blue {} /*#265CFF;*/
.red {} /*#8E2A2F;*/
.yellow {} /*#E1B100;*/
.lightblue {} /*#279BD0;*/
.orange {} /*#D8691B;*/
.gray {} /*#BBBBBB;*/


.brown .n_date_over {background: #444 !important;}
.blue .n_date_over {background: #265CFF !important;}
.red .n_date_over {background: #8E2A2F !important;}
.yellow .n_date_over {background: #E1B100 !important;}
.lightblue .n_date_over {background: #279BD0 !important;}
.orange .n_date_over {background: #D8691B !important;}
.gray .n_date_over {background: #BBBBBB !important;}

.n_block > a{
  display: block;
  font:16px/23px 'heuristicaregular';
  color: #444;
  text-decoration: none;
  width: 260px;
  margin: 23px auto 0 auto;
}

.n_date {
  font:13px/16px 'gotham_promedium';
  color:#bababa;
  margin-left: 23px;
  margin-top: 22px;
}


.brown.n_block {border-bottom:4px solid #444;}
.blue.n_block {border-bottom:4px solid #265CFF;}
.red.n_block {border-bottom:4px solid #8E2A2F;}
.yellow.n_block {border-bottom:4px solid #E1B100;}
.lightblue.n_block {border-bottom:4px solid #279BD0;}
.orange.n_block {border-bottom:4px solid #D8691B;}
.gray.n_block {border-bottom:4px solid #BBBBBB;}

.n_block {
  margin-bottom: 20px;
}

.news_block {
  margin-bottom: 20px;
}

.newspaper {
  position: relative;
/*   height: 360px; */
/*   background: url(img/newspaper.png) no-repeat 0 0; */
}
.newspaper-bg {
	background-repeat: no-repeat;
	background-size: cover;
}
.newspaper-wrap {
	box-shadow: 0px 0px 0px 5px #fff;
	height: 356px;
	align-items: flex-end;
	margin-top: 4px;
}
.newspaper h3 {
  display: block;
  margin: 25px 0 0 0;
  text-align: center;
  font:22px/31px 'heuristicaregular';
  color:#fff;
}
.d-flex__col {
	display: flex;
	flex-direction: column;
	width: 100%;
}
.newspaper__number {
	color: #fff;
/* 	float: right; */
	text-align: right;
	margin-right: 20px;
	margin-bottom: 10px;
}
.newspaper__number a {
	color: #fff;
	text-decoration: none;
}
.newspaper h3 > a {
  display: block;
  margin: 25px 0 0 0;
  text-align: center;
  font:22px/31px 'heuristicaregular';
  color:#fff;
  text-decoration: none;
}
.newspaper h3 > a:hover {
  text-decoration: none;
}

.newspaper > a {
  position: relative;
  width: 100px;
  height: 68px;
  background: url(img/newspaper_release_bg.png) no-repeat 0 0;
  font:bold italic 16px/20px 'heuristicaregular';
  color: #878787;
  display: block;
  margin: 33px auto 0 auto;
  text-align: center;
  text-decoration: none;
  padding-top: 27px;
}

.question_panel {
  position: relative;
  height: 170px;
  background: #333;
  margin-bottom: 20px;
  z-index: 3000;
}

.question_panel h3 {
  float: left;
  display: block;
  margin: 25px 0 0 0;
  text-align: center;
  font:22px/31px 'heuristicaregular';
  color:#fff;
  width: 100%;
}

.question_input {
  position: relative;
  width: 540px;
  height: 40px;
  margin: 25px auto 0;
  background: url(img/question_search_input.png) no-repeat 0 0;
}
.question_input {
  position: relative;
}

.question_input input {
  height: 40px;
  font:14px/40px Arial;
  color:#999;
  padding: 0 40px 0 18px;
  border: none;
  width: 482px;
  background: transparent;
}

.question_input button {
  position: absolute;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  padding: 0;
  right: 0;
  top: 0;
}

.twitter_feed {
  position: relative;
  height: 170px;
  background: url(img/twitter_bg.png) no-repeat 0 0;
}

.twit_username {
  font:13px/16px 'gotham_promedium';
  color:#0072A3;
  margin-left: 23px;
  margin-top: 21px;
}
.twit_username a {
  color:#0072A3;
  text-decoration: none;
}

.twitter_feed p {
  display: block;
  margin: 15px 0 0 20px;
  width: 220px;
  font:14px/20px 'Arial',sans-serif;
  color:#535353;
}

.twitter_feed p a {
  color:#0072A3;
  text-decoration: none;
}
.student_rector {
  position: relative;
  height: 170px;
  background: url(img/support_rector.png) no-repeat 0 0;
}

.student_rector a {
  display: block;
  font:20px/30px 'gotham_promedium';
  color:#BDA583;
  text-decoration: none;
  margin-left: 23px;
  margin-top: 50px;
}
.news-radio {
  position: relative;
  height: 162px;
  background: #fff no-repeat 0 0;
  margin-bottom: 20px;
  padding: 6px;
}
.news-radio img {
	width: 100%;
	height: 100%;
}
.grid_4_n {
	width: 288px;
}
.graduates {
  position: relative;
  height: 360px;
  background: #fff;
  overflow: hidden;
}

.graduates ul li {
  display: block;
  position: relative;
  float: left;
  width: 300px;
  height: 360px;
  overflow: hidden;
  background: url(img/graduates_bg.jpg) no-repeat 0 0;
}

.graduates ul li h3 {
  display: block;
  margin: 25px 0 0 0;
  text-align: center;
  font:22px/31px 'heuristicaregular';
  color:#00517F;
  width: 100%;
}

.graduates ul li h4 {
  display: block;
  margin: 18px auto 0;
  text-align: center;
  font:15px/22px 'gotham_promedium';
  color:#878787;
  width: 240px;
}

.graduates ul li h4 a{
  font:15px/22px 'gotham_promedium';
  color:#878787;
  text-decoration: none;
}

.graduates_image  {
  position: relative;
  width: 90px;
  height: 90px;
  border:5px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  margin: 23px auto 0;
}

.graduates ul li p {
  display: block;
  padding-top: 20px;
  margin: 18px auto 0;
  text-align: center;
  font:italic 14px/20px 'heuristicaregular';
  color:#878787;
  width: 200px;
  background: url(img/graduates_line.png) no-repeat center top;
}

.electronic_library {
  display: none;
  position: relative;
  height: 440px;
  background: #fff;
  margin-top: 20px;
}

.electronic_library h3 {
  display: block;
  margin: 30px auto 0;
  text-align: center;
  font:22px/31px 'heuristicaregular';
  color:#009575;
  width: 100%;
}

.library_alphabet {
  position: relative;
  width: 100%;
  font-size: 0;
  text-align: center;
  margin-top: 27px;
}

.library_alphabet a{
  display: inline-block;
  font:14px/17px 'gotham_promedium';
  color:#B9B9B9;
  text-decoration: none;
  margin: 0 10px;
}

.library_alphabet a:hover , .library_alphabet a.active {
  color:#009673;
}

.library_block {
  margin-top: 46px;
}

.library_wrap {
  padding:0 20px;
}

.library_block article {
  position: relative;
  width: 320px;
  height: 110px;
  float: left;
  margin-bottom: 30px;
  margin-right: 130px;
}

.library_block article:nth-child(3n){
  margin-right: 0;
}

.library_block article img {
  float: left;
}
.library_block article > div {
  padding-left: 100px;
}

.library_block article p {
  margin: 2px 0 0 0;
  font:14px/18px 'Arial',sans-serif;
  color:#545454;
}

.library_block article div > span {
  display: block;
  font:13px/16px 'gotham_promedium';
  color:#BABABA;
  margin-top: 22px;
}

.library_block article div > span > span {
  padding: 0 7px;
}

.library_block article span a{
  text-decoration: none;
  color:#BABABA;
}

.library_block article span a:hover {
  color:#009474;
}
.links {
  font-size: 0;
  text-align: center;
  position: relative;
  padding-top: 28px;
}
.links a {
  display: inline-block;
  font:13px/26px 'gotham_promedium';
  color:#B9B9B9;
  text-decoration: none;
  margin: 0 20px;
}

.links a:hover {
  text-decoration: underline;
  color:#777;
}

#footer {
  position: relative;
  width: 100%;
  background: #00304A;
  margin-top: 26px;
}

.footer_links {
  width: 100%;
  background: #00304A;
}

.footer_links ul {
  position: relative;
  float: left;
  margin-top: 30px;
  margin-right: 80px;
  margin-bottom: 50px;
}

.footer_links ul:first-child {margin-left: 0;}
.footer_links ul:last-child {padding-right: 0;background: none;}

.footer_links ul li a {
  display: block;
  font:13px/30px Arial,sans-serif;
  color:#fff;
  text-decoration: none;
}

.footer_links ul li a:hover {
  color: #fff;
  text-decoration: underline;
}

.footer_copy {
  position: relative;
  padding-bottom: 30px;
}

.copy {
  position: relative;
  float: left;
  font:11px/20px 'Arial',sans-serif;
  color:#FFFFFF;
}

.copy_safaroff {
  position: relative;
  float: right;
  font:11px/20px 'Arial',sans-serif;
  color:#FFFFFF;
}

.copy_safaroff a{
  color:#FFFFFF;
  text-decoration: none;
}

.copy_safaroff a:hover{
  color:#FFFFFF;
  text-decoration: underline;
}
.googlemaps {
  position: relative;
  float: right;
  font:11px/16px 'gotham_promedium';
  color:#B9B9B9;
  margin-top: 17px;
}
.googlemaps a{
  font:11px/16px 'gotham_promedium';
  display: block;
  height: 16px;
  color:#B9B9B9;
  text-decoration: underline;
  background: url(img/googlemaps.png) no-repeat left center;
  padding-left: 19px;
}

.googlemaps a:hover {
  text-decoration: none;
}

.safaroff {
  position: absolute;
  left: 50%;
  top: 17px;
  height: 20px;
  width: 122px;
  text-indent: -9999px;
  background: url(img/safaroff.png) no-repeat 0 0;
  margin-left: -60px;
}

.safaroff a {
  display: block;
}

.q_overlay {
  position: fixed;
  left: 0;
  top:0;
  width:100%;
  height:100%;
  background: url(img/question_overlay.png) repeat 0 0;
  z-index: 2000;
  display: none;
}

.question_panel_close {
  position: absolute;
  right:0;
  top: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  zoom: 1;
  background: url(img/question_panel_close.png) no-repeat 0 0;
  width: 36px;height: 36px;
  text-indent: -9999px;
}

.question_answer {
  position: absolute;
  left: 0;
  top: 0;
  width: 620px;
  height: 360px;
  background: url(img/question_answer_bg.jpg) no-repeat 0 0;
  padding-top: 150px;
  display: none;
}

.question_answer > div {
  background: url(img/queestion_line.png) no-repeat bottom center;
  padding-bottom: 1px;
  position: relative;
}
.question_answer p {
  font:16px/24px 'heuristicaregular';
  color:#fff;
  margin:0 auto 24px auto;
  width: 560px;
  text-align: center;
}

.question_answer .question_panel_close2 {
  position: absolute;
  right:-36px;
  top: -36px;
  background: url(img/question_panel_close2.png) no-repeat 0 0;
  width: 36px;height: 36px;
  text-indent: -9999px;
}

.breadcrumb {
  position: relative;
  width:100%;
  background: #fff;
  box-shadow:0 1px 1px rgba(102,102,102,0.2);
}

.breadcrumb a {
  font:13px/18px 'gotham_promedium';
  color:#AAA;
  text-decoration: none;
  float: left;
  margin-right: 30px;
  margin-top: 21px;
  margin-bottom: 21px;
  text-transform: uppercase;
}

.breadcrumb a.active {
  color:#DF452C;
}

.contact_page {
  margin-top: 40px;
}

.map_head {
  position: relative;
  height: 60px;
  text-align: center;
  background: #CAB28D;
  font:22px/60px 'heuristicaregular';
  color:#fff;
}

.contact_page .map {
  position: relative;
  width:100%;
  height:370px;
}

.map_info p {
  display: block;
  margin: 0 0 17px 0;
  font:14px/21px 'gotham_promedium';
  color:#858585;
}

.map_info p span {
  color:#525252;
}

.map_info {
  height: 78px;
  padding-left: 32px;
  padding-top: 22px;
  background: url(img/map_info_bg.png) no-repeat 0 0 #fff;
}
.contact_page .grid_8 {
  margin-bottom: 20px;
}

.aseu_slider {
  position: relative;
  height: 470px;
  overflow: hidden;
}

.aseu_text .why_aseu {
  height: 470px;
}

.aseu_text .grid_8 {
  width: 630px;
}

.aseu_slider ul li {
  display: block;
  float: left;
}

.aseu_slider {
  position: relative;
  margin-top: 40px;
}

.aseu_slider .prev-slide , .aseu_slider .next-slide {
  position: absolute;
  width:60px;
  height:60px;
  top:50%;
  margin-top:-30px;
  display: block;
}

.aseu_slider .prev-slide {left:0;background: url(img/aseu_slider_arrow.png) no-repeat 0 0;}
.aseu_slider .next-slide {right:0;background: url(img/aseu_slider_arrow.png) no-repeat -60px 0;}

.aseu_awwards .grid_8 {width: 630px;}

.aseu_text {
  margin-bottom: 20px;
}
.aseu_awwards_list {
  position: relative;
  height: 470px;
  overflow: hidden;
  background: #fff;
}

.aseu_awwards_list h3 {
  display: block;
  margin: 30px 0 0;
  text-align: center;
  font:24px/33px 'heuristicaregular';
  color:#00517F;
}

.aseu_awwards_list_wrap {
  position: relative;
  width:500px;
  padding-right: 70px;
  height: 350px;
  overflow: hidden;
  margin: 28px auto 0 auto;
}


.aseu_awwards_list article span {
  display: block;
  float: left;
  width:60px;
  height:42px;
  text-align: center;
  background: #C8B291;
  font:21px/42px 'heuristicaregular';
  color:#fff;
}

.aseu_awwards_list article p {
  margin:0;
  font:14px/21px 'gotham_promedium';
  color:#878787;
  padding-left: 83px;
}


.aseu_awwards_list article {
  clear: both;
  margin-bottom: 33px;
}


.history_page {
  position: relative;
  margin-top: 20px;
  background: #fff;
  padding-bottom: 40px;
}

.history_wrap {
  position: relative;
  width: 1200px;
  margin: 0 auto 0 auto;
}

.history_page h3 {
  display: block;
  margin: 30px 0 36px;
  text-align: center;
  font:24px/33px 'heuristicaregular';
  color:#00517F;
}

.history_cont {
  position: relative;
  width: 520px;
  padding: 14px 20px 1px;
  background: #FAFAFA;
}


.history_cont p {
  font:13px/20px Arial,sans-serif;
  color:#666;
  margin: 0 0 10px;
}

.history_art {
  position: relative;
  width: 600px;
  float: left;
  background: url(img/history-art-bg.png) repeat-y right top;
  padding-bottom: 80px;
  clear: both;
}

.date {
  position: absolute;
  left: 589px;
  z-index: 100;
  height: 21px;
  font: 18px/22px "heuristicaregular";
  color:#B8B8B8;
  background: url(img/history_data_bg.png) no-repeat 0 0;
  padding-left: 40px;
  top:50%;
  margin-top: -10px;
  -webkit-transition: color 0.3s ease-in-out;
  -moz-transition: color 0.3s ease-in-out;
  -o-transition: color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out;
  width: 360px;
}


.history_art:hover .date {
  background: url(img/history_data_bg.png) no-repeat 0 -21px;
  color:#CBB28B;
}


.history_art:nth-child(2n) {
  float:right;
  background: url(img/history-art-bg.png) repeat-y left top;
  padding-left: 41px;
  width: 560px;
}

.history_art:nth-child(2n) .date {
  left: -431px;
  right: auto;
  background: url(img/history_data_bg.png) no-repeat right 0;
  padding:0 40px 0 0;
  text-align: right;
}

.history_art:nth-child(2n):hover .date {
  background: url(img/history_data_bg.png) no-repeat right -21px;
}


.load_more_media {
  font:13px/18px 'gotham_promedium';
  color:#aaa;
  text-decoration: none;
  display: inline-block;
  background: url(img/loading_status_more.gif) no-repeat center top;
  margin-top: 54px;
  padding-top: 54px;
}

.load_more_media:hover {color:#aaa;}

.history_art:last-child {
  padding-bottom: 0;
}
.content_top_margin {
  margin-top: 40px;
}

.content_wrap {
  position: relative;
  background: #fff;
  padding:30px;
}

.news_inner .content_wrap {
  min-height: 659px;
}

.heading {
  position: relative;
  font-size: 0;
  text-align: center;
  border-bottom: 1px solid #EEE;
  padding-bottom: 28px;
  margin-bottom: 30px;
}

.heading h2 {
  margin:0;
  display: inline-block;
  font:24px/34px 'heuristicaregular';
  color:#333;
}

.heading h2.blue {color:#00517F;}

.barchelor_faculties {
  margin-bottom: -30px;
}

.barchelor_faculties a{
  display: block;
  width: 490px;
  padding-left: 60px;
  height: 13px;
  color: #002036;
  font:13px/13px Arial,sans-serif;
  float: left;
  margin:0 70px 27px 0;
  text-align: left;
  position: relative;
}

.barchelor_faculties a:before {
  content:"";
  position: absolute;
  left:0;
  top:5px;
  width: 20px;
  height:3px;
  background: #00304A;
}

.barchelor_faculties a:nth-child(2n){margin-right: 0;}

.barchelor_faculties a:hover {
  color:#002036;
  text-decoration: none;
}

.barchelor_faculties.pdf a {
  background:url(img/newspaper_pdf.png) #E8E9EB no-repeat 0 0;
  -webkit-transition: none;
  -moz-transition: none;
  -o-transition: none;
  transition: none;
}


.barchelor_faculties.pdf a:hover {
  background:url(img/newspaper_pdf.png) #333 no-repeat 0 -42px;
}




.barchelor_faculties2 {
  margin-bottom: -30px;
}

.barchelor_faculties2 a{
  display: block;
  width: 378px;
  height: 40px;
  border:1px solid #279BD0;
  background: #279BD0;
  font:11px/40px 'gotham_promedium';
  color:#fff;
  float: left;
  margin:0 30px 30px 0;
  text-align: center;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  text-decoration: none;
}

.barchelor_faculties2 a:nth-child(3n){margin-right: 0;}

.barchelor_faculties2 a:hover {
  color:#279BD0;
  border: 1px solid #279BD0;
  background: #fff;
}

.barchelor_faculties2.pdf a {
  background:url(img/newspaper_pdf.png) #279BD0 no-repeat 0 0;
  border:1px solid #279BD0;
  -webkit-transition: none;
  -moz-transition: none;
  -o-transition: none;
  transition: none;
}


.barchelor_faculties2.pdf a:hover {
  background:url(img/newspaper_pdf.png) #fff no-repeat 0 -42px;
  color:#279BD0;
  border: 1px solid #279BD0;
}


.inner_news_block .news_block {
  margin-bottom: -25px;
}

.inner_news_block_slider_arrows {
  float: right;
  font-size: 0;
  text-align: right;
}

.inner_news_block_slider_arrows a {
  display: inline-block;
  width: 8px;
  height: 13px;
  text-indent: -9999px;
}

.inner_news_block_slider_arrows a.prev-slide {background: url(img/inner_news_block_slider_arrows.png) no-repeat 0 0;}
.inner_news_block_slider_arrows a.next-slide {background: url(img/inner_news_block_slider_arrows.png) no-repeat -8px 0;
  margin-left: 31px;
}

.inner_news_block_slider_arrows a.prev-slide:hover {background: url(img/inner_news_block_slider_arrows.png) no-repeat 0 -13px;}
.inner_news_block_slider_arrows a.next:hover {background: url(img/inner_news_block_slider_arrows.png) no-repeat -8px -13px;}

.local_students h4 {
  margin: 0 0 17px 0;
  display: block;
  font:14px/20px 'gotham_promedium';
  color:#DF452C;
}

.circle_list ul li{
  position: relative;
  display: block;
  font:14px/21px 'gotham_promedium';
  padding-left: 25px;
  color:#777;
  height: 21px;
  margin-bottom: 10px;
}

.circle_list ul li:before {
  content:"";
  position: absolute;
  left: 2px;
  top: 6px;
  width: 11px;
  height:11px;
  background: url(img/circle_list_bg.png) no-repeat 0 0;
}

.news_inner .content_wrap {
  background: #fff;
  min-height: 659px;
}

.news_inner {
  margin-top: 60px;
}

.news_inner h2 {
  display: block;
  font: 24px/30px "heuristicaregular";
  color:#00517F;
  margin:0;
  width:670px;
}

.news_date {
  position: relative;
  font:13px/16px 'gotham_promedium';
  color:#B8B8B8;
  border-bottom:1px solid #F5F5F5;
  margin-bottom: 20px;
  margin-top: 24px;
  padding-bottom: 7px;
}

.inner_news_content .n_image {
  position: relative;
  width: 270px;
  height: 180px;
  overflow: hidden;
  float: left;
  margin-bottom: 0px;
  margin-right: 22px;
}

.inner_news_content .n_image img {
  width: 270px;
  height: 180px;
}

.inner_news_content .n_image > span {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: block;
  opacity: 1;
}


.inner_news_content .n_image > span i {
  display: block;
  border: 1px solid #fff;
  margin:10px;
  width: 250px;
  height: 160px;
  opacity: 1;
}


.inner_news_content  .n_image > span i {
  opacity: 1;
}

.inner_news_content .n_image > span ,.inner_news_content .n_image > span i {
  opacity: 1;
}

.inner_news_content p {
  margin:0 0 21px 0;
  font:13px/21px 'Arial',sans-serif;
  color:#545454;
}

.rector_contact {
  margin-top: 60px;
}

.rector_contact_text {
  position: relative;
  width:510px;
  padding-top: 5px;
}

.rector_contact_text p{
  display: block;
  font:14px/21px 'gotham_promedium';
  color:#858585;
  border-bottom: 1px solid #EEE;
  margin: 0;
  padding: 10px 0 10px 0;
}

.rector_contact_text p:last-child {
  border-bottom: none;
}

.rector_contact_text p a {
  text-decoration: none;
  color:#858585;
}

.rector_contact_text p a:hover {
  text-decoration: underline;
  color:#858585;
}

.rector_contact_text p span {
  color:#525252;
}

.rector_contact_text p span.gold {color:#BDA583;}
.rector_contact_text p span.block_style.gold {
  display: block;
  margin-bottom: 10px;
  color:#BDA583;
}

.inner_news_content p a {
  text-decoration: underline;
  color:#545454;
}

.inner_news_content p a:hover {
  text-decoration: none;
  color:#545454;
}

.news_inner_right h4 {
  margin: 12px 0 20px;
  text-align: right;
  font:14px/21px 'gotham_promedium';
  color:#BDA583;
  background: url("img/home_ico.png") no-repeat scroll right 0;
  padding-right: 30px;
  border-bottom: 1px solid #DDD;
  padding-bottom: 17px;
}


.news_inner_right .n_date_over {
  position: relative;
  bottom: auto;
  left: auto;
  width: 60px;
  height: 50px;
  z-index: 200;
  background:#BBB;
  color:#fff;
  text-align: center;
  font: 21px/21px "heuristicaregular";
  padding-top: 10px;
}

.news_inner_right .n_date_over {
  font: 21px/21px "heuristicaregular";
  color:#fff;
  height: 50px;
  padding-top: 10px;
}

.news_inner_right .n_date_over span {
  display: block;
  font:12px/18px 'gotham_promedium';
  color:#fff;
}

.news_inner_right a {
  font:14px/20px 'heuristicaregular';
  color:#666;
  text-decoration: none;
  display: block;
}

.news_inner_right a:hover {
  text-decoration: underline;
  color:#444;
}

.news_inner_right  article {
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.inner_right_allnews a {
  text-align: right;
  margin: 0;
  font:14px/21px 'gotham_promedium';
  color:#aaa;
  background: url("img/allnews_ico.png") no-repeat scroll right 0;
  padding-right: 30px;
  border-bottom: 1px solid #DDD;
  padding-bottom: 17px;
}

.inner_right_allnews a:hover {
  text-decoration: none;
  color:#aaa;
}

.rector_form {
  position: relative;
  width:590px;
  margin-top: 18px;
}

.inpt label {
  position: relative;
  display: block;
  font:13px/18px 'gotham_promedium';
  color:#AAA;
  margin-bottom: 10px;
  margin-left: 3px;
}

.inpt label.lrequired{
  padding-left: 10px;
  margin-left: 0;
}

.inpt label.lrequired:before{
  content:'';
  position: absolute;
  left: 0;
  top: -2px;
  width: 7px;
  height: 8px;
  background: url(img/required.png) no-repeat 0 0;
}

.inpt input {
  border:none;
  padding: 0 16px;
  width: 558px;
  height:42px;
  background: #F7F7F7;
  font:13px/42px 'gotham_promedium';
  color:#666;
}

.inpt textarea {
  border:none;
  padding: 16px;
  width: 558px;
  height:168px;
  background: #F7F7F7;
  font:13px/23px 'gotham_promedium';
  color:#666;
  resize: none;
}

.inpt:last-child {
  margin-bottom: 0;
}

.marked {
  position: relative;
  height:42px;
  font:14px/42px 'gotham_promedium';
  color:#777;
  float: left;
  margin-top: 20px;
}

.sended {
  position: relative;
  display: none;
  height:42px;
  font:14px/42px 'gotham_promedium';
  color:#777;
  float: left;
  margin-top: 18px;
  padding-left: 30px;
  background: url(img/sended.png) no-repeat left center;
}

.sbmt {
  float: right;
  margin-top: 20px;
}

.sbmt button {
  border:none;
  background: #DE4634;
  font:13px/42px 'gotham_promedium';
  color:#fff;
  width:200px;
  height:42px;
  text-align: center;
  padding:0
}

.marked span {
  display: inline-block;
  width: 7px;
  height: 8px;
  background: url(img/required.png) no-repeat 0 0;
  text-indent: -9999px;
  margin-top: 9px;
  vertical-align: top;
}

.inpt {
  margin-bottom: 40px;
}

.send_note_form .left {
  margin-right: 20px;
}

.send_note_form .right .inpt {
  margin-bottom: 0;
}


select.styled {
  font:13px/42px 'gotham_promedium';
  color:#777;
}

select.styled option {
  height: 20px;
}


.StyledSelect {
  background: #009675 url(img/styled_select_bg.png) no-repeat right center;
  color: #fff;
  display: block;
  font:13px/42px 'gotham_promedium';
  height: 42px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out 0s;
  width: 200px;
}

.StyledSelect .StyledSelectInner {
  width: 74% !important;
  padding-right: 20px;
  text-align: left !important;
  float: left;
  padding-left: 23px;
}

.StyledSelect .StyledSelectInner:after {
  content : "."
position:relative;
  width: 10px;
  height:6px;
  display: inline-block;
  margin-left: 5px;
  padding-right: 0;
}

.e_l_filter_buttons a {
  position: relative;
  display:block;
  float:left;
  width: 200px;
  height:42px;
  background: #E8E9EB;
  font:13px/42px 'gotham_promedium';
  color:#777;
  text-decoration: none;
  text-align: center;
}

.e_l_filter_buttons a.active {
  background: #009571;
  color:#fff;
}

.e_l_filter_buttons a.active:after {
  content:".";
  text-indent: -9999px;
  position: absolute;
  bottom:-6px;
  left:50%;
  margin-left: -5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 4px 0 4px;
  border-color: #009571 transparent transparent transparent;
}

.electron_library {
  border-bottom: 1px solid #E8E9EB;
}

.e_l_category {
  height: 42px;
}

.e_l_filter {
  position: relative;
  margin-bottom: -1px;
}

.e_l_by_alphabet {
  margin-top: 27px;
  margin-left: 4px;
}

.e_l_by_alphabet a {
  margin: 0 15px 0 0;
}
.e_l_by_alphabet a{
  display: inline-block;
  font:14px/44px 'gotham_promedium';
  color:#B9B9B9;
  text-decoration: none;
  margin: 0 15px 0 0;
  height: 44px;
}

.e_l_by_alphabet a:hover , .e_l_by_alphabet a.active {
  color:#009673;
}

.e_l_by_alphabet a.fr {
  margin-right: 0;
}

.e_l_by_search {
  position: relative;
  height: 44px;
  margin-top: 27px;
}

.e_l_by_search .search_block {
  top: 0;
  left: auto;
  position:relative;
}

.margincenter {
  margin-left: auto !important;
  margin-right:  auto !important;
}
.e_l_by_search {
  display: none;
}

.e_l_by_search .grid_15 {
  width: 1200px !important;
}

.e_l_by_panel {
  border-bottom: 1px solid #eee;
  margin-bottom: 40px;
  padding-bottom: 17px;
}

.e_l_list a {
  display: block;
  font:14px/26px Arial,sans-serif;
  color:#666;
  text-decoration: none;
}

.e_l_list a:hover {
  color:#333;
  text-decoration: underline;
}

.e_l_content_wrapper h4 {
  display: block;
  margin: 20px 0 20px 0;
  font:18px/30px 'heuristicaregular';
  color:#333;
  height: 30px;
  background: url(img/e_l_pdf.png) no-repeat 0 0;
  padding-left: 40px;
}

.e_l_content_wrapper h4:first-child {
  margin-top: 0;
}

.e_l_list {
  height: 500px;
}

.honorary_page {
  position: relative;
  margin-top: 40px;
  border-bottom: 1px solid #dadada;
}

.honorary_page article {
  position: relative;
  width:236px;
  height:386px;
  background: #fff;
  border-bottom: 4px solid #C9B28F;
  float: left;
  margin-right: 20px;
  margin-bottom: 40px;
  padding-bottom: 20px;
  text-align: center;
  overflow: hidden;
}

.honorary_page article:nth-child(5n){
  margin-right: 0;
}

.honorary_image {
  position: relative;
  width:236px;
  height:260px;
  overflow: hidden;
}

.honorary_image > span {
  background: none;
}


/*.honorary_page article:hover .honorary_image > span {
  position: absolute;
  width: 100%;
  height: 100%;
  left:0;
  top:0;
  display: block;
  background: url(img/honory_bg.png) repeat 0 0;
}*/

.honorary_image > span span {
  display: none;
  position: absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  margin: auto;
  border:1px solid #fff;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
  filter: alpha(opacity=30);
  opacity: 0.3;
  zoom: 1;
  width: 216px;
  height: 240px;
}

/*.honorary_page article:hover .honorary_image > span span {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  filter: alpha(opacity=50);
  opacity: 0.5;
}*/

.honorary_page article h3 {
  display: block;
  font:18px/23px 'heuristicaregular';
  color:#444;
  margin: 19px 0 11px 0;
  padding:0 5px;
}

.honorary_page article p {
  display: block;
  font:13px/18px 'gotham_promedium';
  color:#B8B8B8;
  margin:0 auto;
  width: 216px;
}


.location_title {
  position:relative;
  width: 100%;
  height: 90px;
  background: #fff;
  box-shadow:0 1px 1px rgba(102,102,102,0.2);
}

.location_title h3 {
  display: block;
  margin: 0;
  text-align: center;
  font:24px/32px 'heuristicaregular';
  color:#00517F;
  padding-top: 30px;
}

.location_wrapper {
  position: relative;
  margin-top: 40px;
}

.location_map_wrapper {
  position: relative;
  width: 100%;
  height: 600px;
}

#location_map {
  position: relative;
  width: 100%;
  height: 600px;
}


.map_directions {
  position: absolute;
  width: 100%;
  height: 86px;
  left: 0;
  bottom:0;
  text-align: center;
  font-size: 0;
  z-index: 9;
}

.map_directions a {
  background: #fff;
  border-right: 1px solid #ddd;
  color: #444;
  display: inline-block;
  font: 16px/23px "heuristicaregular";
  height: 66px;
  padding: 20px 46px 0;
  text-decoration: none;
  width: 217px;
}

.map_directions a:last-child {
  border: none;
}

.map_directions a.active {
  background:#CAB28D;
  color:#fff;
}

.map_line {
  position: absolute;
  left:0;
  bottom:0;
  background: url(img/map_line.png) repeat-x 0 0;
  height: 2px;
  width:100%;
  z-index: 10;
}

.year_filter {
  border-bottom: 1px solid #EEE;
  padding-bottom: 25px;
}

.year_filter a , .year_filter span {
  display: block;
  float: left;
  font: 17px/24px "gotham_promedium";
  color:#AAA;
  margin-right: 35px;
  text-decoration: none;
}

.year_filter a:hover , .year_filter span {
  color:#00517F;
}

.rectors_list {
  padding-top: 10px;
  padding-left: 0;
  padding-right: 0;
}

.rectors_list article {
  position:relative;
  border-bottom: 1px solid #F8F8F8;
  width:350px;
  float: left;
  height: 88px;
  margin:0 35px;
}

.rectors_list article span {
  display: block;
  font:18px/26px 'heuristicaregular';
  color:#444;
  margin-top: 20px;
}

.rectors_list article p {
  display: block;
  margin: 4px 0 0 0;
  font:13px/20px 'gotham_promedium';
  color:#BDA583;
}


.isotope-item {
  z-index: 2;
}

.isotope-hidden.isotope-item {
  pointer-events: none;
  z-index: 1;
}

.isotope, .isotope .isotope-item {
  -webkit-transition-duration: 0.8s;
  -moz-transition-duration: 0.8s;
  transition-duration: 0.8s;
}

.isotope {
  -webkit-transition-property: height, width;
  -moz-transition-property: height, width;
  transition-property: height, width;
}

.isotope .isotope-item {
  -webkit-transition-property: -webkit-transform, opacity;
  -moz-transition-property:-moz-transform, opacity;
  transition-property:transform, opacity;
}



.media_tab_links {
  position: relative;
  height: 50px;
  margin-bottom: 40px;
}

.media_tab_links a {
  position: relative;
  display: block;
  width: 419px;
  height: 50px;
  text-align: center;
  font:20px/50px 'heuristicaregular';
  text-decoration: none;
  color:#777;
  float: left;
  border-right: 1px solid #ccc;
  background: #E8E9EB;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.media_tab_links a:last-child {
  border-right: 1px solid #E8E9EB;
}

.media_tab_links a.active:after {
  content:"";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #fff transparent transparent transparent;
  position: absolute;
  left:50%;
  bottom: -10px;
  margin-left: -10px;
  z-index: 100;
}

.media_tab_links a.active {
  background: #fff;
  border-right: 1px solid #fff !important;
  color:#DF452C;
}

.media_photo_content article {
  position: relative;
  width: 236px;
  height: 180px;
  overflow: hidden;
  float: left;
  margin:0 20px 20px 0;
}

.media_tabs {
  display: none;
}


.cat_types .media_tabs {
  display: none !important;
}
.cat_types .media_tabs.activeNO {
  display: block !important;
}

.media_tabs.datatabID1 {
  display: block;
}

.media_photo_content article:nth-child(5n) {
  margin-right: 0;
}

.media_photo_content article a {
  display: block;
}


.media_photo_image a > span {
  background: none;
}

.media_photo_content {
  margin-top: 20px;
}


.media_photo_content article:hover .media_photo_image a > span {
  position: absolute;
  width: 100%;
  height: 100%;
  left:0;
  top:0;
  display: block;
  background: url(img/honory_bg.png) repeat 0 0;
}

.media_photo_image a > span span {
  display: block;
  position: absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  margin: auto;
  border:1px solid #fff;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
  filter: alpha(opacity=30);
  opacity: 0.3;
  zoom: 1;
  width: 216px;
  height: 160px;
}

.media_photo_content article:hover .media_photo_image > span span {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  filter: alpha(opacity=50);
  opacity: 0.5;
}

.media_photo_image p {
  position: absolute;
  left: 0;
  right: 0;
  top: -100%;
  margin:0 auto;
  display: block;
  font:13px/19px 'gotham_promedium';
  color:#fff;
  z-index: 10;
  width: 200px;
  text-align: center;
  vertical-align: middle;
}

.media_single_title {
  position: relative;
  border-bottom: 1px solid #EEE;
  padding-bottom: 25px;
  font-size: 0;
  text-align: center;
}

.media_single_title h2 {
  margin: 0;
  display: inline-block;
  font:24px/32px 'heuristicaregular';
  color:#00517F;
  width: 434px;
}

.media_single {
  margin-bottom: 40px;
}

.backALbom {
  position: absolute;
  left: 0;
  top: 8px;
  font:11px/26px 'gotham_promedium';
  color:#AAA;
  padding-left: 19px;
  text-decoration: none;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.backALbom:before {
  content:"";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 7px 5px 0;
  border-color: transparent #aaa transparent transparent;
  position: absolute;
  left:0;
  top: 8px;
  z-index: 100;
}

.backALbom:hover:before {
  content:"";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 7px 5px 0;
  border-color: transparent #BDA583 transparent transparent;
  position: absolute;
  left:0;
  top: 8px;
  z-index: 100;
}

.media_single {
  margin-top: 20px;
}

.media_single article {
  position: relative;
  margin:0 20px 20px 0;
  width: 620px;
  height:400px;
  overflow: hidden;
  float: left;
}

.media_single article:nth-child(even){
  margin-right: 0;
}

.media_single article img {
  max-width: 100%;
  height: auto !important;
}


.media_single article span {
  display: block;
  position: absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  margin: auto;
  border:1px solid #fff;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
  filter: alpha(opacity=30);
  opacity: 0.3;
  zoom: 1;
  width: 600px;
  height: 380px;
}

.media_single_page {
  border-bottom: 1px solid #DDDDDD;
  padding-bottom: 50px;
}

.structure_page .media_tab_links a {
  width: 209px !important;
}

.rkname {
  position: relative;
  background: #FBFBFB;
  height: 68px;
  text-align: center;
  font:18px/26px 'heuristicaregular';
  color:#444;
  padding-top: 18px;
  border-bottom: 4px solid #C9B28F;
}

.rektor_image {
  position: relative;
  width:240px;
  height:390px;
  float: left;
}


.rektor_text {
  border-left: 1px solid #EEE;
  margin-left: 30px;
  float: left;
  text-align: center;
  width: 929px;
  min-height: 390px;
}


.rektor_text h3 {
  margin: 0 0 57px;
  font:22px/31px 'heuristicaregular';
  color:#00517F;
}

.rektor_text p {
  margin: 0 0 21px;
  font:16px/23px 'heuristicaregular';
  color:#777;
}

.rektor_text > div {
  position: relative;
  width: 880px;
  margin:0 auto;
}

.rektor_text > div:before {
  content:"";
  position: absolute;
  left: 50%;
  top: -31px;
  width: 18px;
  height: 14px;
  margin-left: -9px;
  background: url(img/why_quote.png) no-repeat 0 0;
}

.rektor_text > div:after {
  content:"";
  position: absolute;
  left: 50%;
  bottom: -31px;
  width: 18px;
  height: 14px;
  margin-left: -9px;
  background: url(img/why_quote.png) no-repeat 0 -14px;
}

.rektor_content {
  margin-top: 20px;
}
.rektor_content .fl {
  width: 575px;
  margin-right: 50px;
}

.rektor_content .fl:last-child {
  margin-right: 0;
}

.rektor_content .fl p {
  font:14px/23px Arial;
  color:#666;
  margin:0 0 23px 0;
}

.structure_page .honorary_page {
  margin-top:0;
}

.vice_rector .fl {
  width: 236px;
  height: 350px;
  background: #E8E9EB;
  overflow: hidden;
}

.vrector_name {
  font:italic 18px/24px 'Georgia';
  color:#777;
  text-align: center;
  margin-top: 20px;
  padding:0 5px;
}

.vrector_content_wrap {
  position: relative;
  float: left;
  width: 354px;
  height: 310px;
  padding:20px;
  background: #fff;
}

.vrector_content_wrap h4 {
  margin: 0 0 24px 0;
  display: block;
  font:22px/31px 'heuristicaregular';
  color:#00517F;
}

.vr_mail {
  display: block;
  font:13px/20px 'gotham_promedium';
  color:#BDA583;
  text-decoration: none;
  margin-bottom: 11px;
}
.vr_mail:hover {
  text-decoration: underline;
  color:#BDA583;
}

.vr_phone {
  font:14px/21px 'gotham_promedium';
  color:#858585;
  border-top:1px solid #eee;
  border-bottom:1px solid #eee;
  display: block;
  padding: 9px 0;
  margin-bottom: 12px;
}

.vr_phone strong {
  color:#525252
}

.vr_title {
  font:13px/20px 'gotham_promedium';
  color:#BDA583;
  display: block;
  margin-bottom: 14px;
}


.vrector_content_wrap table {
  border:1px solid #eee;
  width: 100%;
}

.vrector_content_wrap table thead {
  background: #eee;
}


.vrector_content_wrap table thead tr td {
  height: 40px;
  text-align: center;
  font:14px/40px 'gotham_promedium';
  color:#535353;
}
.vrector_content_wrap table thead tr td:first-child {
  border-right: 1px solid #CCCCCC;
}


.vrector_content_wrap table tbody tr td {
  border-right: 1px solid #eee;
  text-align: center;
  padding: 0;
  border-bottom: 1px solid #eee;
}

.vrector_content_wrap table tbody tr td {
  font: 13px/20px 'gotham_promedium';
  color: #B9B9B9;
  margin: 0 0 5px 0;
  padding:3px 0;
}
.vrector_content_wrap table tbody tr td strong {
  font: 14px/21px 'gotham_promedium';
  display: block;
  color:#BDA583;
}

.vice_rector article{
  position: relative;
  width:630px;
  float: left;
  margin-bottom: 40px;
}

.hline {
  height: 1px;
  background: #EEE;
  margin:30px 0;
}

.scientific_council h3 {
  margin: 0 0 21px;
  font:24px/34px 'heuristicaregular';
  color:#00517F;
  text-align: center;
  display: block;
}
.sc_title {
  text-align: center;
}

.sc_title p {
  margin:0;
  font:14px/22px 'gotham_promedium';
  color:#525252;
}

.sc_title span {
  margin:0;
  font:14px/22px 'gotham_promedium';
  color:#CAB28C;
}

.sc_list_wrap {
  margin-top: 38px;
}


.sc_list_wrap  table {
  width:590px;
  border-left: 2px solid #fff;
  border-top: 2px solid #fff;
  float: left;
  margin-right: 20px;
}

.sc_list_wrap  table:nth-child(2n){
  margin-right: 0;
}

.sc_list_wrap table tr {

}

.sc_list_wrap table tr td {
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  padding: 0;
}

.sc_list_wrap table tr td strong {
  font:bold 14px/22px Arial;
  color:#CBB28B;
  display: block;
}

.sc_list_wrap table tr td:first-child {
  width: 50px;
  height: 20px;
  font:13px/20px Arial;
  color:#444444;
  vertical-align: middle;
  text-align: center;
  padding:10px 0;
}

.sc_list_wrap table tr td:last-child{
  width: 523px;
  height: 20px;
  font:13px/20px Arial;
  color:#444444;
  vertical-align: middle;
  text-align: left;
  padding:10px 0 10px 15px;
}

.sc_list_wrap table thead tr td {
   color:#fff !important;
   background: #CAB28D !important;
 }
.sc_list_wrap table tbody tr td {
   background: #eeebe6 !important;
   color:#444 !important;
 }

/*.sc_list_wrap table tr:hover td {
  background: #CBB28B !important;
  color: #fff !important;
}

.sc_list_wrap table tr:hover td strong {
  color: #fff !important;
}*/


.relations_page .media_tab_links a {
  width: 419px !important;
}


.relations_tab p {
  margin: 0 0 28px;
  font:14px/20px 'gotham_promedium';
  color:#535353;
  display: block;
  width: 900px;
}

.relations_tab ul li {
  font:14px/21px 'gotham_promedium';
  color:#878787;
  display: block;
  position: relative;
  margin-bottom: 10px;
  padding-left: 27px;
}


.relations_tab ul li:before {
  content: ".";
  position: absolute;
  text-indent: -9999px;
  left: 5px;
  top: 6px;
  width:11px;
  height:11px;
  background: url(img/gold_cyrcle.png) no-repeat 0 0;
}


.column_list2 li {
  float: left;
  width: 570px;
}

.mevlana_title h3 {
  margin: 0 0 21px;
  font:24px/34px 'heuristicaregular';
  color:#00517F;
  text-align: center;
  display: block;
}

.mevlana_title p {
  margin:0 auto;
  font:14px/22px 'gotham_promedium';
  color:#545454;
  width:800px;
  text-align: center;
}

.mevlana_content .fl {
  margin-right: 50px;
  width:575px;
}

.mevlana_content .fl:last-child {
  margin-right: 0;
}

.mevlana_content .fl p{
  margin:0 0 21px 0;
  font:14px/21px Arial;
  color:#666;
}

.mevlana_content .hline {
}

.coordiantors_block h4 {
  display: block;
  margin:0;
  font:14px/20px 'gotham_promedium';
  color:#C9B28E;
}

.coordinators p {
  font:14px/21px 'gotham_promedium';
  color:#868686
}
.coordinators p a{
  font:14px/21px 'gotham_promedium';
  color:#868686;
  text-decoration: none;
}

.coordinators p a:hover {
  color:#868686;
  text-decoration: underline;
}


.coordinators p strong{
  font:14px/21px 'gotham_promedium';
  color:#535353;
}


.coordinators  {
  float: left;
  margin-right: 130px;
}
.mevlana_pdf {
  float: right;
  margin-right: 18px;
  margin-top: 15px;
}
.mevlana_pdf a {
  display: inline-block;
  vertical-align: top;
  font:18px/25px 'heuristicaregular';
  color:#009673;
  background: url(img/mevlana_pdf.png) no-repeat 0 0;
  padding-left:  37px;
  width: 215px;
}


.mevlana_list ul li {
  font:14px/21px 'gotham_promedium';
  color:#878787;
  display: block;
  position: relative;
  margin-bottom: 10px;
  padding-left: 27px;
}


.mevlana_list ul li:before {
  content: ".";
  position: absolute;
  text-indent: -9999px;
  left: 5px;
  top: 6px;
  width:11px;
  height:11px;
  background: url(img/gold_cyrcle.png) no-repeat 0 0;
}

.mevlana_list p {
  margin: 0 0 28px;
  font:14px/20px 'gotham_promedium';
  color:#535353;
  display: block;
  width: 900px;
}

.mevlana_tab .content_wrap {
  margin-bottom: 20px;
}


.marTop40 {
  margin-top: 40px;
}


.media_gallery .media_tab_links a {
  width: 629px;
}



.tempus_project {
  position: relative;
  height: 360px;
  background: #fff;
  text-align: center;
}

.tempus_project h3 {
  margin: 0 0 57px;
  font:22px/31px 'heuristicaregular';
  color:#00517F;
}

.tempus_project p {
  margin: 0 0 21px;
  font:16px/23px 'heuristicaregular';
  color:#777;
}

.tempus_project > div {
  position: relative;
  width: 1020px;
  margin:0 auto;
}

.tempus_project > div:before {
  content:"";
  position: absolute;
  left: 50%;
  top: -31px;
  width: 18px;
  height: 14px;
  margin-left: -9px;
  background: url(img/why_quote.png) no-repeat 0 0;
}

.tempus_project > div:after {
  content:"";
  position: absolute;
  left: 50%;
  bottom: -31px;
  width: 18px;
  height: 14px;
  margin-left: -9px;
  background: url(img/why_quote.png) no-repeat 0 -14px;
}

.martop20 {
  margin-top:20px;
}

.gold_list ul li {
  font:14px/21px 'gotham_promedium';
  color:#878787;
  display: block;
  position: relative;
  margin-bottom: 10px;
  padding-left: 27px;
}


.gold_list ul li:before {
  content: ".";
  position: absolute;
  text-indent: -9999px;
  left: 5px;
  top: 6px;
  width:11px;
  height:11px;
  background: url(img/gold_cyrcle.png) no-repeat 0 0;
}

.gold_list ul li ol {
  margin-top: 5px;
}



.gold_list2 ul li {
  font:14px/21px 'gotham_promedium';
  color:#878787;
  display: block;
  position: relative;
  margin-bottom: 10px;
  padding-left: 27px;
}


.gold_list2 ul li:before {
  content: ".";
  position: absolute;
  text-indent: -9999px;
  left: 5px;
  top: 6px;
  width:11px;
  height:11px;
  background: url(img/gold_cyrcle2.png) no-repeat 0 0;
}

.gold_list2 ul li ol {
  margin-top: 5px;
}

.blue_title {
  position:relative;
}

.blue_title.with_back_link h3{
  text-align:left !important;
}

.blue_title.with_back_link a {
  display: block;
  position: absolute;
  right:0;
  top: 2px;
  font:11px/26px 'gotham_promedium';
  color:#AAA;
  padding-left: 20px;
  text-decoration: none;
}

.blue_title.with_back_link a:before {
  content:'.';
  text-indent: -9999px;
  position:absolute;
  left:0;
  top: 9px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 6px 4px 0;
  border-color: transparent #aaa transparent transparent;

}


.blue_title h3{
  color: #00517f;
  font: 22px/31px "heuristicaregular";
  margin: 0 0 30px;
  text-align: center;
  display: block;
}

.blue_title.orange h3 {
  color:#E1B100 !important;
}


.partner_projects p{
  color: #535353;
  display: block;
  font: 14px/20px "gotham_promedium";
  margin: 0 0 28px;
}

.partner_projects p em {
  color: #DF452C;
  display: block;
  font: italic 15px/20px "heuristicaregular" !important;
  margin: -18px 0 -20px;
}

.partner_projects .fl {
  width: 570px;
}

.relations_page .inner_news_block {
  margin-left: -10px;
}

.honorary_image img {
  min-width: 100%;
  height: auto !important;
}

.single_page p {
  color: #666;
  font: 14px/21px Arial;
  margin: 0 0 15px;
}

.single_page p a {
  color:#C9B28E;
  text-decoration: underline;
}

.single_page p a:hover {
  text-decoration: none;
}

.single_page li {
  color: #666;
  font: 14px/21px Arial;
  list-style: disc;
  list-style-position: inside;
}

.single_page h3 {
  color: #00517f;
  font: 22px/31px "heuristicaregular";
  margin: 0 0 30px;
  text-align: center;
  display: block;
}


.single_page h4 {
  color: #C9B28E;
  font: 16px/21px Arial;
  margin: 0 0 16px 0;
  display: block;
}

.single_page hr {
  height: 1px;
  background: #EEE;
  margin:30px 0;
}
.sc_list_wrap.single_page {
  margin-top: 0;
}

.sc_list_wrap.single_page  table {
  width:590px;
  border-left: 2px solid #fff;
  border-top: 2px solid #fff;
  float: none;
  margin-bottom: 20px;
  margin-right: 20px;
}

.bachelor_inner p{
  margin: 0;
  font:13px/22px 'Arial',sans-serif;
  color:#666;
  width:700px;
}

.bachelor_inner h4 {
  margin: 20px 0 0 0;
  font:14px/21px 'gotham_promedium';
  color:#666;
  width:700px;
  display: block;
}

.bachelor_inner h4:first-child {
  margin-top:0;
}

.bachelor_inner p strong {
  padding-bottom: 0;
  display: block;
}


.search_form input {
  width: 970px;
  height:42px;
  background: #F7F7F7;
  color:#666666;
  font:13px/42px 'gotham_promedium';
  padding:0 15px;
  border:none;
  float: left;
}

.search_form button {
  width: 200px;
  height: 42px;
  border:none;
  padding:0;
  background: #CAB28D;
  color:#fff;
  font:13px/42px 'gotham_promedium';
}

.search_count {
  display: block;
  position: relative;
  font:13px/20px 'gotham_promedium';
  color:#BDA583;
}

.search_page h3 {
  margin:0;
  display: block;
}

.search_page h3 a {
  display: block;
  font:18px/25px 'heuristicaregular';
  color:#00517F;
  text-decoration: underline;
}

.search_page p {
  margin:10px 0;
  font:13px/20px Arial,sans-serif;
  color:#666;
}

.search_slug {
  display: block;
  font:bold 13px/20px 'Arial',sans-serif;
  color:#888;
}


.pagination {
  font-size: 0;
}
.pagination a {
  display: inline-block;
  width:38px;
  height:38px;
  border:1px solid #E8E9EB;
  color:#777;
  font:14px/38px 'gotham_promedium';
  text-align: center;
  margin-right: 10px;
  text-decoration: none;
}

.pagination a:hover {
  border:1px solid #CBB28B;
}

.pagination a.selected {
  border:1px solid #CBB28B;
  background: #CBB28B;
  color:#fff;
}

.academic_calendar .left_tab ,
.academic_calendar .right_tab {
  background: #fff;
  padding:30px;
}

.academic_calendar h2 {
  margin: 0 0 11px 0;
  display: block;
  font: 20px/20px "heuristicaregular";
  color:#333;
}

.academic_calendar .right_tab h2 {
  color:#265BFF !important;
}

.academic_calendar h3 {
  font:14px/22px 'gotham_promedium';
  color:#888;
  margin: 0 0 5px;
  display: block;
}

.a_c_title {
  background: url(img/calendar_bacelor_bg.png) no-repeat 0 0;
  width: 545px;
  height: 40px;
  font: bold 13px/40px Arial, sans-serif;
  color:#FFF;
  padding-left: 15px;
  margin-top: 25px;
}
.a_c_items {
  position: relative;
  margin-top: 24px;
  margin-bottom:60px;
}

.a_c_items article {
  position: relative;
  padding:10px 15px;
  background: #F7F7F7;
  margin-bottom: 2px;
}

.a_c_items article span {
  display: block;
  font:bold 13px/20px Arial,sans-serif;
  color:#BDA583;
}

.a_c_items article p {
  display: block;
  font:13px/20px Arial,sans-serif;
  color:#444;
  margin: 6px 0 0;
}


.a_c_with_title .a_c_items {
  margin-top: 0 !important;
}

.academic_calendar .right_tab .a_c_title {
  background: url(img/calendar_master_bg.png) no-repeat 0 0;
}


.no-margin-top {margin-top:0 !important;}
.no-margin-left {margin-left:0 !important;}
.no-margin-right {margin-right:0 !important;}
.no-margin-bottom {margin-bottom:0 !important;}

.event_days_line {
  width: 100%;
  height: 50px;
  background: #fff;
  position: relative;
  margin: 0 0 20px 0;
}

.event_day_left {
  position: absolute;
  left: 20px;
  top:20px;
  display: block;
  width: 35px;
  height: 9px;
  background: url(img/event_dat_arrows.jpg) no-repeat 0 0;
  text-indent: -9999px;
}

.event_day_right {
  position: absolute;
  right: 20px;
  top: 20px;
  display: block;
  width: 35px;
  height: 9px;
  background: url(img/event_dat_arrows.jpg) no-repeat -35px 0;
  text-indent: -9999px;
}

.event_days_line h3 {
  display: block;
  font:14px/50px 'gotham_promedium';
  color:#BDA583;
  text-align: center;
  width:100%;
  margin: 0;
}



.events_page h3 {
  margin:0;
  display: block;
}

.events_page h3 a {
  display: block;
  font:18px/25px 'heuristicaregular';
  color:#00517F;
  text-decoration: none;
}

.events_page h3 a:hover{
  text-decoration: underline;
}

.events_page p {
  margin:10px 0;
  font:13px/20px Arial,sans-serif;
  color:#666;
}

.calendar_table {
  border-collapse:separate;
  border:5px solid #EEEEEE;
}

.calendar_table thead tr td {
  background: none;
  width: 38px;
  height: 32px;
  vertical-align: middle;
  text-align: center;
  font: 14px/38px 'gotham_promedium', sans-serif;
  color:#444444;
  border:3px solid #EEEEEE;
}

.calendar_table tbody tr td {
  width: 38px;
  height: 38px;
  vertical-align: middle;
  text-align: center;
  font: 14px/38px 'gotham_promedium', sans-serif;
  color:#444;
  background: #E4E4E4;
  border:3px solid #EEEEEE;
}

.last_month {
  color:#999 !important;
}

.calendar_table tbody tr td a {
  display: block;
  background: #BDA581;
  color: #fff;
  width: 100%;
  height:100%;
  font: 14px/38px 'gotham_promedium', sans-serif;
  text-decoration: none;
}
.calendar_table tbody tr td a:hover {
  text-decoration: none;
  color: #fff;
}
.event_calendar {
  position: relative;
  width: 300px;
  height: 370px;
  background: #EEE;
}

.event_mont_year {
  position: relative;
  border-bottom: 1px solid #DDDDDD;
  height: 59px;
}

.prev_calendar ,
.next_calendar {
  position: absolute;
  top:17px;
  width:25px;
  height:25px;
  display: block;
  text-indent: -9999px;
  z-index: 100;
}

.prev_calendar {
  left:15px;
  background: url(img/calendar_arrows.png) no-repeat 0 0;
}
.next_calendar {
  right:15px;
  background: url(img/calendar_arrows.png) no-repeat -25px 0;
}

.calendar_titles {
  text-align: center;
  font:14px/22px 'gotham_promedium';
  color:#BDA581;
  float: left;
  margin-top: 19px;
  position: relative;
  width: 100%;
}



.is_content h3 {
  margin: 0 0 57px;
  font:22px/31px 'heuristicaregular';
  color:#E0B100;
  text-align: center;
}

.is_content p {
  margin: 0 0 21px;
  font:16px/23px 'heuristicaregular';
  color:#777;
}

.is_content > div {
  position: relative;
  width: 1020px;
  margin:0 auto;
  text-align: center;
}

.is_content > div:before {
  content:"";
  position: absolute;
  left: 50%;
  top: -31px;
  width: 18px;
  height: 14px;
  margin-left: -9px;
  background: url(img/why_quote.png) no-repeat 0 0;
}

.is_content > div:after {
  content:"";
  position: absolute;
  left: 50%;
  bottom: -31px;
  width: 18px;
  height: 14px;
  margin-left: -9px;
  background: url(img/why_quote.png) no-repeat 0 -14px;
}

.periods .fl{
  margin-right: 80px;
}

.periods .fl:last-child {
  margin-right: 0;
}

.periods .fl h4 {
  position: relative;
  margin:0;
  display: block;
  font:14px/21px 'gotham_promedium';
  color:#777;
  padding-left: 27px;
}
.periods .fl h4:before {
  content: ".";
  position: absolute;
  text-indent: -9999px;
  left: 5px;
  top: 6px;
  width:11px;
  height:11px;
  background: url(img/gold_cyrcle.png) no-repeat 0 0;
}

.periods p {
  margin: 5px 0 0 0;
}

.periods p em {
  font:italic 15px/21px 'heuristicaregular';
  color:#00517F;
}


.aseu_offices {
  display: block;
  font:13px/23px 'gotham_promedium';
  color:#00517F;
  padding-left: 27px;
  background: url(img/aseu_offices.jpg) no-repeat center left;
  text-decoration: none;
  margin:20px 0;
}

.aseu_offices:hover {
  text-decoration: underline;
  color:#00517F;
}

p.gold_text {
  position: relative;
  margin: 18px 0;
  font:14px/21px 'gotham_promedium';
  color:#E0B100;
  padding-left: 27px;
}

p.gold_text:before {
  content: ".";
  position: absolute;
  text-indent: -9999px;
  left: 5px;
  top: 6px;
  width:11px;
  height:11px;
  background: url(img/gold_cyrcle2.png) no-repeat 0 0;
}


.international_students .rector_contact_text {
  width: 100%;
}



.page-list li {
  font:14px/21px 'gotham_promedium';
  color:#878787;
  display: block;
  position: relative;
  margin-bottom: 10px;
  padding-left: 27px;
}


.page-list li:before {
  content: ".";
  position: absolute;
  text-indent: -9999px;
  left: 5px;
  top: 6px;
  width:11px;
  height:11px;
  background: url(img/gold_cyrcle.png) no-repeat 0 0;
}

.page-list li ul {
  margin-top: 5px;
}


.error {
  color:#f00 !important;
  outline:1px solid #f00 !important;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.column590 {
  position: relative;
  width:590px;
  margin-right: 20px;
}

.column1200{
  position: relative;
  width:1200px;
}

.column590:nth-child(2n){
  margin-right: 0;
}

.master_center h4 {
  display:block;
  margin: 0 0 48px 0;
  font:14px/20px 'gotham_promedium';
  color:#444;
  text-align: center;
}
.master_center h5 {
  display:block;
  margin: 0 0 8px 0;
  font:14px/21px 'gotham_promedium';
  color:#265AFF;
}

.master_center p {
  margin:0 0 21px 0;
  font:13px/21px Arial,sans-serif;
  color:#666;
}

.master_center a.download_pdf {
  display: block;
  margin: 20px 0 20px 0;
  font:18px/30px 'heuristicaregular';
  color:#333;
  height: 30px;
  background: url(img/e_l_pdf.png) no-repeat 0 0;
  padding-left: 40px;
}

.column590 .download_pdf {
  margin-top: 0 !important;
}


.single_page table {
  border-collapse: collapse;
  border-left: 2px solid #fff;
  border-top: 2px solid #fff;
  margin-right: 20px;
}

.single_page table:nth-child(2n){
  margin-right: 0;
}

.single_page table tr td , .single_page table tr th {
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  padding: 10px;
  font:13px/20px Arial;
}

.single_page table tr th {
  font:13px/20px Arial;
}


.single_page table tr td strong {
  font:bold 14px/22px Arial;
  color:#CBB28B;
  display: block;
}

.single_page table tr td:first-child {
 /*  width: 50px; */
  height: 20px;
  font:13px/20px Arial;
  color:#444444;
  padding:10px;
}

.single_page table tr td:last-child{
  /*width: 523px;*/
  height: 20px;
  font:13px/20px Arial;
  color:#444444;
  vertical-align: middle;
  text-align: left;
  padding:10px 10px 10px 15px;
}

.single_page table tbody tr th {
  color:#fff !important;
  background: #CAB28D !important;
}
.single_page table tbody tr td {
  background: #eeebe6 !important;
  color:#444 !important;
}


.inner_news_content .aseu_slider {
  width: 430px !important;
  height:320px !important;
  margin:0 20px 20px 0 !important;
}

.allnews .news_block {
  margin:0 -10px;
}



.allnews .n_block:nth-child(3n){
  margin-right: 0;
}


.allnews_load {
  display: none;
}

img.left {
  margin: 0 20px 20px 0 !important;
  float: left !important;
}

img.right {
  margin: 0 0 20px 20px !important;
  float: right !important;
}

.fancybox-margin {
  margin:20px !important;
}

.equalheightEvents {
  padding-bottom: 10px;
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto
}

.headerRight {
  position: absolute;
  right: 155px;
  top:20px;
  z-index: 200;
}

.headerRight ul {
  text-align: right;
  font-size: 0;
}

.headerRight ul li {
  display:inline-block;
  margin-left: 20px;
}

.headerRight ul li a {
  font:11px/12px Arial,sans-serif;
  color:#fff;
  text-decoration: none;
}

.headerRight ul li a:hover {
  text-decoration: underline;
  color:#fff;
}

.langs a {
  display: inline-block;
  font:11px/15px Arial,sans-serif;
  color:#fff;
  text-align: right;
  text-decoration: none;
  padding-right: 14px;
}

.langs a:last-child {
  background: url(img/lang_bg.png) no-repeat right center;
  padding-right: 30px;
}

.langs {
  position: absolute;
  right:10px;
  top:14px;
  z-index: 210;
}

/*.langs_list {
  position: absolute;
  right: 0;
  top:15px;
  padding-right: 20px;
  text-align: right;
  display: none;
}

.langs_list a {
  display: block;
  font:11px/15px Arial,sans-serif;
  color:#fff;
  text-decoration: none;
  text-align: right;
}*/

.search_icon {
 position: absolute;
  right: 10px;
  bottom: 3px;
  background: #00304A;
  height: 32px;
  z-index: 200;
}

.search_open {
  position: relative;
  display: block;
  text-indent: -9999px;
  width: 19px;
  height:19px;
  background: url(img/search_bg.png) no-repeat 0 0;
}

.search_open.opened {
  background: url(img/search_bg.png) no-repeat -19px 0;
  display: none;
}

.search_panel {
  position: absolute;
  right:10px;
  bottom:0;
  border-bottom: 3px solid #fff;
  z-index:150;
  /*width: 547px;*/
  width: 0;
  height: 32px;
  overflow:hidden;
}

.search_panel input{
  width: 522px;
  padding:0 25px 0 0;
  font:italic 15px/15px 'Georgia',sans-serif;
  color:#fff;
  border:none;
  background: none;
  padding-bottom: 13px;
}
.search_submit {
  display: none;
}

.subMenu{
  position: relative;
  width: 100%;
  /*height:110px;*/
  background: #002036;
  display: block;
}

.subMenu.fixed {
  position: absolute;
  display: none;
  min-width: 1280px;
  top:130px;
  left:0;
  z-index: 5000;
}

.submenu_wrapper {
  margin-top: 25px;
}
.submenu_wrapper > div {
  position: relative;
  float: left;
  margin-right: 80px;
}

.submenu_wrapper > div a {
  display: block;
  font:13px/30px Arial,sans-serif;
  color:#fff;
  text-decoration: none;
}

.submenu_wrapper > div a:hover {
  text-decoration: underline;
}

img.alignright {float:right; margin:0 0 1em 1em}
img.alignleft {float:left; margin:0 1em 1em 0}
img.aligncenter {display: block; margin-left: auto; margin-right: auto}
.alignright {float:right; }
.alignleft {float:left; }
.aligncenter {display: block; margin-left: auto; margin-right: auto}


.halfWidth {
width:585px;margin-right:15px;float:left;
}

.H_Aliyev {
  background: url(img/h.aliyev.png) no-repeat 0 0;
  position: relative;
  height: 170px;
}
.news-journal {
  background-color: #fff;
  position: relative;
  padding: 6px;
}
.news-journal_h {
	height: 163px;
}
.news-journal__title {
	color: #00517F;
}
.news-journal__number {
	color: #00517F;
}
.ml-10 {
	margin-left: 10px;
}
.H_Aliyev a{
  display: block;
  width: 300px;
  height:170px;
  text-decoration: none;
}

.H_Aliyev a span{
  font:14px/24px 'gotham_promedium',sans-serif;
  color:#BDA583;
  position: absolute;
  top: 49px;
  left:145px;
}

#kento-pvc-loop {
  display:inline-block;
}

#kento-pvc-single .kento-pvc-total, #kento-pvc-loop .kento-pvc-total {
  background: none !important;
  padding:0 !important;
}


#kento-pvc {
  display: none;
}

.fancybox-thumb {
	display: inline-block;
	margin:20px;
}

.fancybox-margin {
	margin:0 !important;
}
.newspaper__title {
	display: block;
	margin: 25px 0 0 0;
	text-align: center;
	font: 22px/31px 'heuristicaregular';
	color: #fff;
}
.newspappers-flex {
	display: flex;
	flex-direction: row;
}

.newspappers-flex div {
	flex-basis: 50%
}
.newspappers-flex div > a {
  position: relative;
  width: 100px;
  height: 68px;
  background: url(img/newspaper_release_bg.png) no-repeat 0 0;
  font:bold italic 16px/20px 'heuristicaregular';
  color: #878787;
  display: block;
  margin: 33px auto 0 auto;
  text-align: center;
  text-decoration: none;
  padding-top: 27px;
}
.newspaper h3 > a {
	margin-left: 14px;
	font: 19px/31px 'heuristicaregular';
	text-align: left;
	margin-bottom: 20px;
	text-decoration: none;
}
.newspaper__number a:before {
	position: absolute;
	width: 100%;
	height: 100%;
	content: '';
	top: 0;
	left: 0;
}

.faq {

}

.faq__step-title {
	margin-bottom: .5em;
	margin-top: 2em;
}
.faq__question > p {
	font-size: 1.5em;
	color: #000;
}
.faq__question {
	margin-top: 1.5rem
}
.faq__answer p {
	margin: .8em 0 0;
	color: #000;
}

i.fas {
	font-size: 30px;
}
i.fas:hover {
	color: #D7BB57;
}
.owl-theme .owl-nav [class*=owl-]:hover {
	background: transparent !important;
}


.zero-content .container {
	padding: 50px;
	display: flex;
}

.vstup input, .vstup textarea, .vstup select, .vstup button {
	float: left;
	clear: both;
	margin-bottom: 15px;
	border: 1px solid #8a8686;
    padding: 5px;
}/*
.vstup input {
	border: 1px solid #8a8686;
    padding: 5px;
} */
.form-info {
  margin-bottom: 20px;
}
.vstup label, .form-info, .zajava {
  float: left;
  clear: both;
}
.vstup {
	background: #fff;
	padding: 25px;
	width: 100%;
}
.vstup p {
  float: left;
  margin-right: 10px;
}
.small {
	width: 40px;
  clear: left !important;
}
.both-false, .checked span {
  float: left !important;
  clear: right !important;
  margin-left: 5px;
}
.parent > fieldset {
  border: 1px solid #ccc;
  padding: 0 30px 0 20px;
  margin-bottom: 25px;
}
.parent > fieldset > legend {
	padding: 2px;
}
.parent > fieldset > input {
	width: 100%;
	border: none;
    border-bottom: 1px solid #929292;
}
.container-full {
	width: 100%;
}
.zero-content .col-6 {
	float: left;
	width: 50%;
}
.container-message {
	width: 100%;
	display: flex;
}
.mess-success, .mess-error {
	color: #fff;
	padding: 15px;
	width: 100%;
	margin-left: 50px;
    margin-right: 50px;
}
.mess-success {
	background: green;
}
.mess-error {
	background: red;
}

.vstup input:required {
	/* background: #f0dddd; */
}
#error-document {
	border: 2px solid red;
}
.upload_files {
  padding: 30px;
  background: #eee;
  clear: both;
  display: grid;
  margin-bottom: 50px;
}
.upload_files input {
  border: none;
}
.text-uppercase {
text-transform:uppercase;
}
.tablink {
	text-transform: uppercase;
}

</style>
<div class="container">
    <?php echo $page->content; ?>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
@endsection