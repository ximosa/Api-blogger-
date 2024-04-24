document.oncontextmenu = new Function("return false")
document.onselectstart = new Function("return false")

function deployContent(contentPath, target) {
    switch(target) {
      case '_main-iframe':
        parent.document.getElementById('main-iframe').src = contentPath;
        break;
      case '_blank':
        window.open(contentPath, target);
        break;
      case '_parent':
        parent.location.href = contentPath;
        break;
      case '_self':
        window.location.href = contentPath;
        break;
      case '_top':
        top.location.href = contentPath;
        break;
      default:
        console.log('Invalid target specified.');
    }
  }
  