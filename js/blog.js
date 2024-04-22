document.oncontextmenu = new Function("return false")
document.onselectstart = new Function("return false")

const BLOGGER_ID = '3419676097219198226';
const API_KEY = 'AIzaSyDWw08ynfeCj-VrWbyWhR6TDcZ7tdH_Yiw';
const API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOGGER_ID}/posts?key=${API_KEY}`;

fetch(API_URL).then(response => response.json()).then(data => {
    // Get the posts container
    var postsContainer = document.getElementById('posts-container');
    var loading = document.getElementById('loading');

    // Loop through each post
    data.items.forEach(post => {
        loading.style.display = 'none';

        // Create a div for the post
        var postDiv = document.createElement('div');
        postDiv.className = 'postDiv';

        // Create a title for the post
        var postTitle = document.createElement('a');
        postTitle.innerHTML = post.title;
        postTitle.href = post.url;
        postTitle.className = 'postTitle';
        postDiv.appendChild(postTitle);

        // Create author for the post
        var postAuthor = document.createElement('h6');
        postAuthor.innerHTML = 'Author: ' + post.author.displayName;
        postAuthor.className = 'postAuthor';
        postDiv.appendChild(postAuthor);

        // Create published date for the post
        var postDate = document.createElement('h6');
        postDate.innerHTML = 'Published: ' + new Date(post.published).toDateString();
        postDate.className = 'postDate';
        postDiv.appendChild(postDate);

        // Create content for the post
        var postContent = document.createElement('p');
        var contentElement = document.createElement('div');
        contentElement.innerHTML = post.content;
        postContent.innerHTML = contentElement.innerHTML;
        postContent.className = 'postContent';
        postDiv.appendChild(postContent);

        // Append the post to the posts container
        postsContainer.appendChild(postDiv);
    });
})
.catch(error => console.error('Error:', error));
