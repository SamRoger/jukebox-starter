//==============================================//
var rewind = document.getElementsByClassName("rewind")[0];
var play = document.getElementsByClassName("play")[0];
var pause = document.getElementsByClassName("pause")[0];
var next = document.getElementsByClassName("next")[0];
var audio = document.getElementsByClassName("audio")[0];
var display = document.getElementsByClassName("display")[0];
var display1 = document.getElementsByClassName("display1")[0];
var ff = document.getElementsByClassName("ff")[0];
//////////////////////////////////////////////////
//==============================================//
var currentSongNames = 0;
var currentSong = 0;
//////////////////////////////////////////////////
//==============================================//
var song1 = new Song("Madeon - Nonsense", "assets/audio/nonsense.mp3", "3:46");
var song2 = new Song("Misterwives - Machine", "assets/audio/machine.mp3", "3:57");
var song3 = new Song("SOJA - Tell Me", "assets/audio/tell-me.mp3", "3:30");
var song4 = new Song("SOJA - translation Of One", "assets/audio/translation.mp3", "3:23");
//////////////////////////////////////////////////
//==============================================//
var myJukeBox = new Jukebox();
//////////////////////////////////////////////////
//==============================================//
myJukeBox.songs.push(song1);
myJukeBox.songs.push(song2);
myJukeBox.songs.push(song3);
myJukeBox.songs.push(song4);
//////////////////////////////////////////////////
//==============================================//
function Jukebox() {
	this.songs = [];
	this.playSong = playSong
	this.nextSong = nextSong
	this.pauseSong = pauseSong
	currentSong = 0;
}
function pauseSong() {
	audio.pause();
}
function nextSong() {
	currentSong += 1;
	this.playSong();
}
function Song(name, fileName, songLength) {
	this.name = name;
	this.fileName = fileName;
	this.songLength = songLength
}
function playSong() {
	audio.play();
}
//////////////////////////////////////////////////
//==============================================//
window.onload = function() {
	display.innerHTML = myJukeBox.songs[currentSongNames].name
	audio.src = myJukeBox.songs[currentSong].fileName;
}
audio.currentTime = 0
//////////////////////////////////////////////////
//==============================================//
// window.addEventListener("keyup", keyUp);
window.addEventListener("keydown", function(){
	if (event.keyCode === 32) {
	audio.currentTime = audio.currentTime + .5
	ff.classList.add ('buttonDecoAdd')
	play.classList.remove ('buttonDecoAdd')
	} 

//////////////////////////////////////////////////
//==============================================//
window.addEventListener("keyup", function(){
	ff.classList.remove ('buttonDecoAdd')
	})
})
//////////////////////////////////////////////////
//==============================================//
window.addEventListener("keyup", keyControls);
//////////////////////////////////////////////////
//==============================================//
//TIMER
audio.addEventListener("timeupdate", function() {
    var s = parseInt(audio.currentTime % 60);
    var m = parseInt((audio.currentTime / 60) % 60);
    if (s < 10) {
        display1.innerHTML = m + ':0' + s;
    }
    else {
        display1.innerHTML = m + ':' + s;
    }
}, false);
//////////////////////////////////////////////////
//==============================================//
//KEYSPRESS EVENTS
function keyControls(event) { //closes 137
//rewind
	    if (event.keyCode === 37) {
		playSong();
		audio.currentTime = 0
		rewind.classList.add ('buttonDecoAdd')
		play.classList.remove ('buttonDecoAdd')
		setTimeout(function(){
		rewind.classList.remove ('buttonDecoAdd')
		pause.classList.remove ('buttonDecoAdd')
		play.classList.add ('buttonDecoAdd')
		}, 300)
	}
//play song
    else if (event.keyCode === 38) {

		playSong();
		display.innerHTML = myJukeBox.songs[currentSongNames].name
		play.classList.add ('buttonDecoAdd')
		pause.classList.remove ('buttonDecoAdd')
	} 
//pause song
	else if (event.keyCode === 40) {
		audio.pause();
		play.classList.remove ('buttonDecoAdd')
		pause.classList.add ('buttonDecoAdd')
	} 
//next song
	else if (event.keyCode === 39) {
		currentSong += 1;
		currentSongNames += 1
	if (currentSong === 4) {
		currentSong = 0
	} 
	if (currentSongNames === 4) {
		currentSongNames = 0
	}
		audio.src = myJukeBox.songs[currentSong].fileName;
		audio.play();
		display.innerHTML = myJukeBox.songs[currentSongNames].name
		play.classList.remove ('buttonDecoAdd')
		next.classList.add ('buttonDecoAdd')

		setTimeout(function(){
		next.classList.remove ('buttonDecoAdd')
		pause.classList.remove ('buttonDecoAdd')
		play.classList.add ('buttonDecoAdd')
		}, 300)
	}	
}//opens 90
//////////////////////////////////////////////////
//==============================================//	
rewind.addEventListener("click", function() {
		seconds = -1;	
		minutimertes = -1;
		audio.currentTime = 0;
		playSong();
		rewind.classList.add ('buttonDecoAdd')
		play.classList.remove ('buttonDecoAdd')
	setTimeout(function(){
		rewind.classList.remove ('buttonDecoAdd')
		pause.classList.remove ('buttonDecoAdd')
		play.classList.add ('buttonDecoAdd')
	}, 300)
})
	seconds = -1;	
	minutes = -1;
//////////////////////////////////////////////////
//==============================================//
play.addEventListener("click", function() {//closes 187
	if (audio.ended === true) {
	console.log("if statement worked")
}
	playSong();
	display.innerHTML = myJukeBox.songs[currentSongNames].name
	play.classList.add ('buttonDecoAdd')
	pause.classList.remove ('buttonDecoAdd')
 //PAUSE
pause.addEventListener("click", function() {
	audio.pause();
	// clearInterval(timer)
	play.classList.remove ('buttonDecoAdd')
	pause.classList.add ('buttonDecoAdd')
	})
//NEXT
next.addEventListener("click", function() {
		seconds = -1;	
		minutes = -1;
	currentSong += 1;
		currentSongNames += 1
	if (currentSong === 3) {
		currentSong = 0
	} 
	if (currentSongNames === 3) {
		currentSongNames = 0
	}	
		audio.src = myJukeBox.songs[currentSong].fileName
		audio.play();
		display.innerHTML = myJukeBox.songs[currentSongNames].name
		play.classList.remove ('buttonDecoAdd')
		next.classList.add ('buttonDecoAdd')
		setTimeout(function(){
		next.classList.remove ('buttonDecoAdd')
		pause.classList.remove ('buttonDecoAdd')
		play.classList.add ('buttonDecoAdd')
		}, 300)
	}) 
})//oppen 152
//////////////////////////////////////////////////
//==============================================//
// function mouseDown() {
// 	setInterval(function() {
// 	disable = audio.currentTime = audio.currentTime + .5
// 	},100)
// }	
// function mouseUp() {
// 	if (mouseUp === true) {
// 		alert("h")
// 	}
// }
//////////////////////////////////////////////////
// var box1 = document.getElementsByClassName("box1")[0];
// 	if (audio.ended === true) {
// 		alert("Finally!")
// 	}




















