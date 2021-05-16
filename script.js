var main = document.getElementById("main");

function hideFics() {
	var x = document.getElementsByClassName("series");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
}

function highlight(ids) {
	var x = document.getElementsByClassName("highlight");

	var i;
	while (x.length > 0) {
		x[0].classList.remove("highlight");
	}

	var i;
	for (i = 0; i < ids.length; i++) {
		ids[i].classList.add("highlight");
	}
}

function showElement(ids) {
	var i;
	for (i = 0; i < ids.length; i++) {
		document.getElementById(ids[i]).style.display = "initial";
	}
}

function showFic(id) {
	showElement([id]);
	highlight([document.getElementById(id)]);
}

function showTypeFic(prop) {
	var x = document.getElementsByClassName(prop);

	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "initial";
	}

	highlight(x);
}

var colors = ["solarized", "nord"];
var ci = 0;

function changeColorScheme() {
	ci++;
	if (ci == colors.length) {
		main.classList = '';
		ci = -1;
	} else {
		main.classList = colors[ci];
	}
}

function main() {
	var series = document.getElementsByClassName("series");
	var i;
	for (i = 0; i < series.length; i++) {
		series[i].addEventListener("click",showFic);
	}
}

main();
