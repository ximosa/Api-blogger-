document.oncontextmenu = new Function("return false")
document.onselectstart = new Function("return false")

fetch('README.md')
.then(response => response.text())
.then(text => {
    document.getElementById('github-usr-inf').innerHTML = marked(text);
})
.catch(error => console.error(error));