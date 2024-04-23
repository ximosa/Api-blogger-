document.oncontextmenu = new Function("return false")
document.onselectstart = new Function("return false")

function deployContent(contentPath, target) {
  switch(target) {
    case '_content-iframe':
      parent.document.getElementById('content-iframe').src = contentPath;
      alert(`File path: ${contentPath}\nTarget: ${target}`);
      break;
    case '_blank':
      window.open(contentPath, target);
      alert(`File path: ${contentPath}\nTarget: ${target}`);
      break;
    case '_parent':
      parent.location.href = contentPath;
      alert(`File path: ${contentPath}\nTarget: ${target}`);
      break;
    case '_self':
      window.location.href = contentPath;
      alert(`File path: ${contentPath}\nTarget: ${target}`);
      break;
    case '_top':
      top.location.href = contentPath;
      alert(`File path: ${contentPath}\nTarget: ${target}`);
      break;
    default:
      alert('Invalid target specified.');
      alert(`File path: ${contentPath}\nTarget: ${target}`);
  }
}
