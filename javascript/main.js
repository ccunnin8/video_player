//necesary variables to get elements used in video
var video = document.getElementById("video");
var controls = document.getElementById("controls");
var videoContainer = document.getElementById("video-container");
var playButton = document.getElementById("play");
var fullScreen = document.getElementById("fullscreen");
var progress = document.getElementById("progress");
var audio = document.getElementById("volume");
var progressBar = document.getElementById("progress-bar");

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
	if (!progress.getAttribute('max')){
		progress.setAttribute('max',video.duration);
	}
	progress.value = video.currentTime;
	progressBar.style.width = Math.floor((video.currentTime/ video.dutaion) * 100) + '%';
});
//skipping ahead 
progress.addEventListener("click",function(e){
	var pos = (e.pageX - this.offsetLeft)/ this.offsetWidth;
	video.currentTime = pos * video.duration;
});
//go full screen 
var isFullScreen = function() {
	return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen
		|| document.msFullscreenElement || document.fullscreenElement);

}

fullScreen.addEventListener("click",function(e){
	if (video)
});