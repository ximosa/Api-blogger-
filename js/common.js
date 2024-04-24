document.oncontextmenu = new Function("return false")
document.onselectstart = new Function("return false")

function deployContent(src_path, target) {
  var main_iframe = parent.document.getElementById('main-iframe');
    switch(target) {
      case '_main-iframe':
        main_iframe.src = src_path;
        break;
      case '_blank':
        window.open(src_path, target);
        break;
      case '_parent':
        parent.location.href = src_path;
        break;
      case '_self':
        window.location.href = src_path;
        break;
      case '_top':
        top.location.href = src_path;
        break;
      default:
        console.log('Invalid target specified.');
    }
  }
  