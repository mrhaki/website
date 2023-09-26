var leanpub_books = function() {
    var books = function() {
        var leanpubBooksDivs = $('.leanpub-books');
        $.each(leanpubBooksDivs, function(index, value) {
            var holder = $(this);
            var blogitemTitle = holder.attr("rel");
            if (blogitemTitle) {

                var frameSrc;
                if (/^Groovy Goodness:.*$/.test(blogitemTitle)) {
                    frameSrc = "groovy-goodness-notebook";
                } else if (/^Grassroots Groovy:.*$/.test(blogitemTitle)) {
                    frameSrc = "groovy-goodness-notebook";
                } else if (/^Gradle Goodness:.*$/.test(blogitemTitle)) {
                    frameSrc = "gradle-goodness-notebook";
                } else if (/^Grails Goodness:.*$/.test(blogitemTitle)) {
                    frameSrc = "grails-goodness-notebook";
                } else if (/^Awesome Asciidoctor:.*$/.test(blogitemTitle)) {
                    frameSrc = "awesomeasciidoctornotebook";
                } else if (/^Ratpacked:.*$/.test(blogitemTitle)) {
                    frameSrc = "ratpacked-notebook";
                } else if (/^Spocklight:.*$/.test(blogitemTitle)) {
                    frameSrc = "spockframeworknotebook";
                } else if (/^Clojure Goodness:.*$/.test(blogitemTitle)) {
                    frameSrc = "clojure-goodness-notebook";
                } else if (/^DataWeave Delight:.*$/.test(blogitemTitle)) {
                    frameSrc = "dataweave-delight-notebook";
                }

                if (frameSrc) {
                    holder.html('<iframe width="160" height="450" src="https://leanpub.com/' + frameSrc + '/embed" frameborder="0" allowtransparency="true"></iframe>');
                } else {
                    holder.html('');
                }
            } else {
                holder.html('');
            }
        });
    }

    return {
        books: books
    }
}();