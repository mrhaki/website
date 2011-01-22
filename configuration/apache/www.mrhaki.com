<VirtualHost *:80>
    ServerAdmin webmaster@mrhaki.com
    ServerName mrhaki.com
    ServerAlias www.mrhaki.com
    
    DirectoryIndex index.html
    DocumentRoot /home/mrhaki/public_html/www.mrhaki.com/public

    FileETag All
   
    Redirect /blog http://mrhaki.blogspot.com/
    Redirect /feesttijden http://www.mrhaki.com/wishlist-web/feesttijden
    Redirect /kadotip http://www.mrhaki.com/wishlist-web/kadotip

    ErrorDocument 404 /errors/404.html
    ErrorDocument 500 /errors/500.html

    ProxyTimeout 300
    
    #ProxyPass /repo http://localhost:8080/artifactory
    #ProxyPassReverse /repo http://localhost:8080/artifactory
    
    #ProxyPass /wat-britt-leuk-vindt/images !
    #ProxyPass /wat-britt-leuk-vindt/css !
    #ProxyPass /wat-britt-leuk-vindt/javascript !
    #ProxyPass /wat-britt-leuk-vindt/js !
    #ProxyPass /wat-britt-leuk-vindt http://localhost:8888/wat-britt-leuk-vindt
    #ProxyPassReverse /wat-britt-leuk-vindt http://localhost:8888/wat-britt-leuk-vindt
    
    #ProxyPass /wishlist-web/images !
    #ProxyPass /wishlist-web/css !
    #ProxyPass /wishlist-web/javascript !
    #ProxyPass /wishlist-web/js !
    #ProxyPass /wishlist-web http://localhost:8888/wishlist-web
    #ProxyPassReverse /wishlist-web http://localhost:8888/wishlist-web
    
    #<Location /repo>
    #    Order allow,deny
    #	Allow from all
    #</Location>
    
    #<Location /feesttijden>
    #    Order allow,deny
    #	Allow from all
    #</Location>
    
    #<Location /kadotip>
    #    Order allow,deny
    #	Allow from all
    #</Location>
    
    #<Location /wishlist-web>
    #    Order allow,deny
    #	Allow from all
    #</Location>
    
    #<Location /wat-britt-leuk-vindt>
    #	Order allow,deny
    #	Allow from all
    #</Location>
    
    LogLevel warn
    ErrorLog /home/mrhaki/public_html/www.mrhaki.com/log/error.log
    CustomLog /home/mrhaki/public_html/www.mrhaki.com/log/access.log combined

    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css \
        text/javascript application/x-javascript
</VirtualHost>
