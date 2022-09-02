var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// Mudar video aqui
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video1', {
        height: '380',
        width: '580',
        videoId: 'sqcSx5Bn2lw',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

}
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video2', {
        height: '380',
        width: '580',
        videoId: 'xhhGm2hEDyc',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

}

function onPlayerReady(event) {
    event.target.stopVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}