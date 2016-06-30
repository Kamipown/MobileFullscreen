var fullscreen_btn = document.getElementById("fullscreen_btn");

function toggle_fullscreen()
{
	var doc = window.document;
	var doc_element = doc.documentElement;

	var requestFullScreen =	doc_element.requestFullscreen
							|| doc_element.mozRequestFullScreen
							|| doc_element.webkitRequestFullScreen
							|| doc_element.msRequestFullscreen;
	var cancelFullScreen =	doc.exitFullscreen
							|| doc.mozCancelFullScreen
							|| doc.webkitExitFullscreen
							|| doc.msExitFullscreen;

	if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement)
		requestFullScreen.call(doc_element);
	else
		cancelFullScreen.call(doc);
}

window.addEventListener("load",function()
{
	fullscreen_btn.addEventListener("click", toggle_fullscreen, false);
} , false);
