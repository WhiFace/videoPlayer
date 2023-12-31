const video = document.getElementById('video');
const play = document.getElementById('play');
const stopMovie = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');



// Create functions to run on event listners 

// toggle video status 
const toggleVideoStatus = () => {
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

// update play icon 
const updatePlayIcon = () => {
   if(video.paused){
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
   }else{
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
   }
}

// update video progress bar 
const updateProgress = () => {
    progress.value = (video.currentTime / video.duration) * 100;

    // updating timestamp 
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10 ){
       mins = '0'+ String(mins);
    }
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10 ){
        secs = '0'+ String(secs);
     }

     timestamp.innerHTML = `${mins}:${secs}`;

}

// stops video 
const stopVideo = () => {
   video.currentTime = 0;
   video.pause()
}

//set video progress
const setVideoProgress = () => {
    video.currentTime = (+progress.value * video.duration) / 100;
}



// create event listners 

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click', toggleVideoStatus);
stopMovie.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress)
