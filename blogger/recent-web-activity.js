<script src="http://mrhakis.appspot.com/js/humane.js"> </script>

<script>
	var iconUrl = "http://www.mrhaki.com/images/socialicons/32x32/";
	var iconExt = ".png";
    $(document).ready(function(){
		$.getJSON("http://mrhakis.appspot.com/jsonactivities.groovy?callback=?",
			function(data){
var activities = $("#activities");
			  $.each(data.items, function(i,item) {
				var listitem = $("<div/>");
				$("<img/>").attr("style", "width:32px;height:32px;padding:4px 4px 0 0;float:left;").attr("src", iconUrl + item.source + iconExt).attr("title", item.source).attr("alt", item.source).appendTo(listitem);
				$("<a/>").attr("href", item.link).attr("class", item.source).text(item.title).appendTo(listitem);
$("<br/>").appendTo(listitem);
				$("<span/>").attr("class", "date").text(" " + humane_date(item.pubDate)).appendTo(listitem);
				listitem.appendTo("#activities");

				if (i == 7) return false;
			  });
		});
    });
  </script>

<div id="activities" style="font-size:12px;"></div>
<p>
<a href="http://mrhakis.appspot.com/templateactivities.groovy">More...</a>
</p>