document.oncontextmenu = new Function("return false")
document.onselectstart = new Function("return false")

Object.defineProperty(console, '_commandLineAPI', {
  get: function() {
      throw new Error('Developer tools are disabled');
  }
});
