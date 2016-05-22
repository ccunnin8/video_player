//necesary variables to get elements used in video
var video = document.getElementById("video");
var controls = document.getElementById("controls");
var videoContainer = document.getElementById("video-container");
var playButton = document.getElementById("play");
var fullScreen = document.getElementById("fullscreen");
var progress = document.getElementById("progress");
var audio = document.getElementById("volume");
var progressBar = document.getElementById("progress-bar");
var totalDuration, 
	currentTime 
//function gets called during the timeupdate event listener to highlight text accordingly 

var highlighter = function(time) {
	if ( time > 0 && time < 4.12) {
		$("span").removeClass("highlight");
		$("#1").addClass("highlight");
	}
	else if ( time > 4.13 && time < 7.535) {
		$("span").removeClass("highlight");
		$("#2").addClass("highlight");
	}
	else if (time > 7.535 && time < 11.270) {
		$("span").removeClass("highlight");
		$("#3").addClass("highlight");
	}
	else if (time > 11.270 && time < 13.96) {
		$("span").removeClass("highlight");
		$("#4").addClass("highlight");
	}
	else if (time > 13.96 && time < 17.94){
		$("span").removeClass("highlight");
		$("#5").addClass("highlight");
	}
	else if (time > 17.94 && time < 22.37){
		$("span").removeClass("highlight");
		$("#6").addClass("highlight");
	}
	else if (time > 22.37 && time < 26.88){
		$("span").removeClass("highlight");
		$("#7").addClass("highlight");
	}
	else if (time > 26.88 && time < 32.1){
		$("span").removeClass("highlight");
		$("#8").addClass("highlight");
	}
	else if (time > 32.1 && time < 34.73){
		$("span").removeClass("highlight");
		$("#9").addClass("highlight");
	}
	else if (time > 34.73 && time < 39.43){
		$("span").removeClass("highlight");
		$("#10").addClass("highlight");
	}
	else if (time > 39.43 && time < 42.35){
		$("span").removeClass("highlight");
		$("#11").addClass("highlight");
	}
	else if (time > 42.35 && time < 46.3){
		$("span").removeClass("highlight");
		$("#12").addClass("highlight");
	}
	else if (time > 46.3 && time < 49.3){
		$("span").removeClass("highlight");
		$("#13").addClass("highlight");
	}
	else if (time > 49.3 && time < 53.76){
		$("span").removeClass("highlight");
		$("#14").addClass("highlight");
	}
	else if (time > 53.76 && time < 57.78){
		$("span").removeClass("highlight");
		$("#15").addClass("highlight");
	}
	else if ( time>57.78) {
		$("span").removeClass("highlight");
		$("#16").addClass("highlight");
	}
}
//convert seconds to minute 00:00
var timeConvert = function(seconds) {
	if (seconds < 60) {
		if (seconds < 10) {
			return "00:0" + Math.round(seconds);
		}
		else {
			return "00:" + Math.round(seconds);
		}
	}
	else {
		var minutes = Math.floor(seconds / 60);
		var seconds = seconds % 60;
		if ( minutes < 10) {
			if (seconds < 10) {
				return "0" + minutes + ":0" + seconds;
			}
			else {
				return "0" + minutes + ":" + seconds;
			}
		}
		else {
			if (seconds < 10) {
				return minutes + ":0" + seconds;
			}
			else {
				return minutes + ":" + seconds;
			}
		}
	}
}
//plays video and changes icon from pause button to play button accordingly
playButton.addEventListener("click",function(e){
	if (video.paused || video.ended) {
		video.play();
		$("#play").css("background","url('icons/pause-icon.png') no-repeat");
	}
	else {
		video.pause();
		$("#play").css("background","url('icons/play-icon.png') no-repeat");
	}
});
//mute audio and change icon
audio.addEventListener("click",function(e){
	video.muted = !video.muted;
	if (video.muted) {
		$("#volume").css("background","url('icons/volume-on-icon.png') no-repeat");
	}
	else {
		$("#volume").css("background","url('icons/volume-off-icon.png') no-repeat");
	}
});
//update progress bar as video plays 
video.addEventListener("loadmetadata",function(){
	progress.setAttribute("max", video.duration);
});
video.addEventListener("timeupdate",function(){
	$(".tracker").text(timeConvert(video.currentTime.toFixed(2)) + " / " + 
		timeConvert(video.duration.toFixed(2)));
	if (!progress.getAttribute('max')){
		progress.setAttribute('max',video.duration);
	}
	progress.value = video.currentTime;
	progressBar.style.width = Math.floor((video.currentTime/ video.dutaion) * 100) + '%';
	highlighter(video.currentTime);
});
//skipping ahead 
progress.addEventListener("click",function(e){
	var pos = (e.pageX - this.offsetLeft)/ this.offsetWidth;
	video.currentTime = pos * video.duration;
});
//go full screen 
fullScreen.addEventListener("click",function(e){
	if (video.requestFullScreen) {
		video.requestFullScreen();
	} else if (video.webkitRequestFullScreen){
		video.webkitRequestFullScreen();
	} else if (video.msRequestFullScreen){
		video.msRequestFullScreen();
	} else if (video.mozRequestFullScreen){
		video.mozRequestFullScreen();
	}
});
$(".video-container").hover(function(){
	$("button").show();	
	$(".controls").css("top", "-60px" );
}, function(){
	$("button").hide();
	$(".controls").css( "top", "-30px" );
});
