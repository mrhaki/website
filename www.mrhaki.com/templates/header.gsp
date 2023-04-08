<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE; chrome=1" />

    <title>${content.title}</title>

    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <link rel="stylesheet" href="//cdn.jsdelivr.net/font-hack/2.010/css/hack-extended.min.css">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Merriweather:300,700,700italic,300italic|Open+Sans:700,400|Inconsolata">

    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/resets.css"/>
    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/default.css"/>
    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/13col.css"/>
    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/3col.css"/>
    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/5col.css"/>
    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/iphone4.css"/>
    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/rainbow.css"/>

    <link href='${content.rootpath ?: ''}css/syntax/shCore.css' rel='stylesheet' type='text/css'/>

    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/light.css" />
    <link rel="alternate stylesheet" media="all" href="${content.rootpath ?: ''}css/dark.css" title="dark-color"/>
    <link rel="alternate stylesheet" media="all" href="${content.rootpath ?: ''}css/light.css" title="light-color"/>

    <link rel="shortcut icon" href="${content.rootpath ?: ''}favicon.ico">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <!-- Add "maximum-scale=1" to fix the weird iOS auto-zoom bug on orientation changes. -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>
    <script src="${content.rootpath ?: ''}js/switchstylesheet.js"></script>
</head>

<body>
    <div id="header-rainbow">
        <div class="color" style="background-color: #000000;">&nbsp;</div>
        <div class="color" style="background-color: #784f16;">&nbsp;</div>
        <div class="color" style="background-color: #e40303;">&nbsp;</div>
        <div class="color" style="background-color: #ff8c00;">&nbsp;</div>
        <div class="color" style="background-color: #ffed00;">&nbsp;</div>
        <div class="color" style="background-color: #008026;">&nbsp;</div>
        <div class="color" style="background-color: #004dff;">&nbsp;</div>
        <div class="color" style="background-color: #750787;">&nbsp;</div>
        <div class="color" style="background-color: #5ccefa;">&nbsp;</div>
        <div class="color" style="background-color: #f6a8b7;">&nbsp;</div>
    </div>
    <header>
        <div id="header_logo">
            <a href="${content.rootpath ?: ''}index.html">
                <img src="${content.rootpath ?: ''}images/haki-logo-black-128.png" width="64" height="64"
                    alt="Logo haki" title="Logo haki"/>
            </a>
        </div>
        <nav id="headernav">
            <ul>
                <li><a href="//blog.mrhaki.com">Blog</a></li>
                <li><a href="${content.rootpath ?: ''}books.html">Books</a></li>
                <li><a href="${content.rootpath ?: ''}about/index.html">About</a></li>
            </ul>
        </nav>

        <div id="top-theme-selector" class="site">
            <a class='changecolor' href='#' title='dark-color'>Dark theme</a>
            |
            <a class='changecolor' href='#' title='light-color'>Light theme</a>
        </div>
    </header>
