//Loading MsgBox.js
var script = document.createElement("script");
script.src = "https://astrogroupsl-dev.github.io/MsgBox.JS/MsgBox.js";
document.head.appendChild(script);

// To limit user access level to the document
document.oncontextmenu = new Function("return false");
document.onselectstart = new Function("return false");

// Navigation function
function navigate(src_path, target) {
  let main_iframe = parent.document.getElementById("main-iframe");
  let header = parent.document.getElementById("header-iframe");
  let loading_bar = header.contentWindow.document.getElementById("loading-bar");

  switch (target) {
    case "_main_iframe":
      loading_bar.style.opacity = "100%";
      loading_bar.style.width = "100%";
      main_iframe.src = src_path;
      main_iframe.onload = function () {
        loading_bar.style.opacity = "0%";
        loading_bar.style.width = "0";
      };
      break;
    case "_blank":
      window.open(src_path, target);
      break;
    case "_parent":
      parent.location.href = src_path;
      break;
    case "_self":
      window.location.href = src_path;
      break;
    case "_top":
      top.location.href = src_path;
      break;
    default:
      console.log("Invalid target specified.");
  }
}

