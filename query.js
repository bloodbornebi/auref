$(function(){
	document.getElementById("main").addEventListener("mousemove", doubleCheck, true); 
});

function doubleCheck() {
	colorCheck($("h2:visible:onScreen"));
	unColor($("h2:not(:visible:onScreen)"));
}

function colorCheck(obj) {
	var i;
	for (i = 0; i < obj.length; i++) {
		$("li").filter("." + obj[i].parentNode.id).addClass("highlight");
	}
}

function unColor(obj) {
	var i;
	for (i = 0; i < obj.length; i++) {
		$("li").filter("." + obj[i].parentNode.id).removeClass("highlight");
	}
}
