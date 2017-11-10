$(document).ready(function() {
    $("a.loadButton").click(function(e) {
		e.preventDefault();
		if ($(".load").siblings().hasClass("displayNo")) {
			$(".load").siblings().removeClass("displayNo");
			$(".load").addClass("displayNo");
		}
    });
});
