README
======

http://uglifyit.herokuapp.com

Uglify It! is an in-browser GUI application written in Javascript, Ruby on Rails and CSS, that allows users to enter any URL, then edit the returned webpage to add ugly GIFs, animations such as blinking and bouncing text, fonts like Comic Sans and Papyrus, and hideous tiled backgrounds to any page.  Each page is hosted at its own custom URL; changes are saved in real time using Redis, and committed to Postgres before the page is reopened.  No Javascript or CSS libraries were used other than JQuery - I like having my job made easier by and learning a nice library as much as the next guy, but this is my work!  It's not perfect; there are some bugs and kinks, and some websites have Javascript and CSS that partially or entirely interfere with mine.  But, as a week and a half's work, and as someone who knew virtually no programming 10 weeks ago, I have to admit I'm pretty proud of it.

Works on mobile, too!
