<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title>${content.title}</title>

    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <link rel="stylesheet" href="//cdn.jsdelivr.net/font-hack/2.010/css/hack-extended.min.css">

    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/resets.css"/>
    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/default.css"/>
    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/13col.css"/>
    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/3col.css"/>
    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/5col.css"/>
    <link rel="stylesheet" media="all" href="${content.rootpath ?: ''}css/iphone4.css"/>

    <link rel="shortcut icon" href="${content.rootpath ?: ''}favicon.ico">

    <meta name="viewport" content="width=device-width; initial-scale=1"/>
    <!-- Add "maximum-scale=1" to fix the weird iOS auto-zoom bug on orientation changes. -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>
    <script src="${content.rootpath ?: ''}js/google-analytics.js"></script>
</head>

<body>

    <header>
        <div id="header_logo">
            <a href="${content.rootpath ?: ''}index.html">
                <img src="${content.rootpath ?: ''}images/haki-logo-black-64.png" width="64" height="64"
                    alt="Logo haki" title="Logo haki"/>
            </a>
        </div>
        <nav id="headernav">
            <ul>
                <li><a href="http://mrhaki.blogspot.com">Blog</a></li>
                <li><a href="${content.rootpath ?: ''}books.html">Books</a></li>
                <li><a href="http://github.com/mrhaki">Github</a></li>
                <li><a href="${content.rootpath ?: ''}about/index.html">About</a></li>
            </ul>
        </nav>
    </header>
