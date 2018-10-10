    <footer>
        <nav id="footer_links">
            <h3>Links</h3>
            <ul>
                <li><a href="http://mrhaki.blogspot.com/ncr">Blog</a></li>
                <li><a href="${content.rootpath ?: ''}books.html">Books</a></li>
                <li><a href="http://github.com/mrhaki">Github</a></li>
                <li><a href="${content.rootpath ?: ''}about/">About</a></li>
            </ul>
        </nav>
        <nav id="friend_links">
            <h3>Link to friends</h3>
            <ul>
                <li><a href='http://www.facebook.com/droomkoekjes'>Droomkoekjes</a></li>
                <!--<li><a href='http://www.etsy.com/shop/BeadsByKC?ref=pr_shop'>Beads by KC</a></li> -->
                <!--<li><a href='http://www.kralencreatie.nl'>KralenCreatie</a></li> -->
                <li><a href='http://blog.jdriven.com/'>JDriven Blog</a></li>
                <!-- <li><a href='http://www.pixeldam.net'>Pixeldam</a></li>
                <li><a href='http://www.x-panded.com/'>Xpanded</a></li> -->
                <!-- <li><a href='http://www.drbob42.com/'>DrBob42</a></li> -->
                <li><a href='http://www.jdriven.com/'><img alt='JDriven Logo' id='jdriven-logo' src='/images/jdriven.png' title='JDriven Logo'/></a></li>
            </ul>
        </nav>
        <nav id="connect_links">
            <h3>Connect</h3>
            <ul>
                <li><a href="http://www.twitter.com/mrhaki">Twitter</a></li>
                <!--<li><a href="http://gplus.to/mrhaki">Google+</a></li>-->
                <li><a href="https://plus.google.com/116304108087638220732?rel=author">Google+</a></li>
                <li><a href="http://nl.linkedin.com/in/mrhaki">LinkedIn</a></li>
                <li><a href="http://www.facebook.com/mrhaki">Facebook</a></li>
                <li><a href="http://www.delicious.com/mrhaki">Delicious</a></li>
                <li><a href="/about/mrhaki.vcf">Contact</a></li>
            </ul>
        </nav>
        <div class="clearfix"></div>

        <div id="gradle-book">

        </div>

        <div class="clearfix"></div>
        <p id="copyright">
            &copy; 2008 - ${new Date().format('yyyy')}
            <a href="/">Hubert A. Klein Ikkink</a>
            |
            Baked with <a href="http://jbake.org">JBake ${version}</a>
            |
            <a href="#" class="changecolor" title="dark-color">Dark theme</a>
            |
            <a href="#" class="changecolor" title="light-color">Light theme</a>
        </p>
    </footer>

    <script language='javascript' src='${content.rootpath ?: ''}js/syntax/shCore.js'></script>
    <script language='javascript' src='${content.rootpath ?: ''}js/syntax/shLegacy.js'/></script>
    <script language='javascript' src='${content.rootpath ?: ''}js/syntax/shBrushGroovy.js'/></script>
    <script language='javascript'>
        SyntaxHighlighter.config.clipboardSwf = null;
        SyntaxHighlighter.defaults['first-line'] = 0;
        SyntaxHighlighter.defaults['auto-links'] = false;
        SyntaxHighlighter.all();
    </script>

    <script type="text/javascript">
    \$(document).ready(function(){
        \$(".changecolor").switchstylesheet( { seperator:"color"} );
    });
    </script>

</body>

</html>
