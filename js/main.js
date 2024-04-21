fetch('README.md')
.then(response => response.text())
.then(text => {
    document.getElementById('github-usr-inf').innerHTML = marked(text);
})
.catch(error => console.error(error));