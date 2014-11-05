var blogitemLabel;
if (/^Groovy Goodness:.*$/.test(blogitemTitle)) {
    blogitemLabel = "Groovy:Goodness";
} else if (/^Grassroots Groovy:.*$/.test(blogitemTitle)) {
    blogitemLabel = "Groovy:Grassroots";
} else if (/^Gradle Goodness:.*$/.test(blogitemTitle)) {
    blogitemLabel = "Gradle:Goodness";
} else if (/^Grails Goodness:.*$/.test(blogitemTitle)) {
    blogitemLabel = "Grails:Goodness";
} else if (/^Awesome Asciidoctor:.*$/.test(blogitemTitle)) {
    blogitemLabel = "Awesome:Asciidoctor";
} else if (/^Spocklight:.*$/.test(blogitemTitle)) {
    blogitemLabel = "Spocklight";
}
if (blogitemLabel) {
    var url = "http://pipes.yahoo.com/pipes/pipe.run?_id=d443a3bc3450d40648e6939b0a49bd42&_render=json&label=" + escape(blogitemLabel) + "&title=" + escape(blogitemTitle) + "&_callback=?"
    $.getJSON(url, function(data) {
        $("<h2/>").text("More posts about " + blogitemLabel).insertBefore("#blog-item-label-series");
        $.each(data.value.items, function(i, item) {
            var li = $("<li/>");
            $("<a/>").attr("href", item.link).text(item.title).appendTo(li);
            li.appendTo("#blog-item-label-series");
        });
    });
}