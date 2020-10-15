#!/bin/zsh
jbake -b
rsync -rvuz --progress output/ mrhaki@162.209.73.215:/home/mrhaki/public_html/www.mrhaki.com/public