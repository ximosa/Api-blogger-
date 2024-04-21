var elem = window.parent.document.documentElement;

function toggleFullScreen() {
  if (!window.parent.document.fullscreenElement && !window.parent.document.mozFullScreenElement && !window.parent.document.webkitFullscreenElement && !window.parent.document.msFullscreenElement ) {  // current working methods
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  } else {
    if (window.parent.document.exitFullscreen) {
      window.parent.document.exitFullscreen();
    } else if (window.parent.document.mozCancelFullScreen) { /* Firefox */
      window.parent.document.mozCancelFullScreen();
    } else if (window.parent.document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      window.parent.document.webkitExitFullscreen();
    } else if (window.parent.document.msExitFullscreen) { /* IE/Edge */
      window.parent.document.msExitFullscreen();
    }
  }
}
