document.oncontextmenu = new Function("return false")
document.onselectstart = new Function("return false")

Object.defineProperty(console, '_commandLineAPI', {
    get: function() {
        throw new Error('Developer tools are disabled');
    }
});

const BLOGGER_ID = '3419676097219198226';
const API_KEY = 'AIzaSyDWw08ynfeCj-VrWbyWhR6TDcZ7tdH_Yiw';
const POSTS_API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOGGER_ID}/posts?key=${API_KEY}`;

fetch(POSTS_API_URL).then(response => response.json()).then(data => {
    var postsContainer = document.getElementById('posts-container');
    var loading = document.getElementById('loading');

    data.items.forEach(post => {
        loading.style.display = 'none';

        var postDiv = document.createElement('div');
        postDiv.className = 'postDiv';

        var postTitle = document.createElement('a');
        postTitle.innerHTML = post.title;
        postTitle.href = post.url;
        postTitle.className = 'postTitle';
        postDiv.appendChild(postTitle);

        var postAuthor = document.createElement('h6');
        postAuthor.innerHTML = 'Author: ' + post.author.displayName;
        postAuthor.className = 'postAuthor';
        postDiv.appendChild(postAuthor);

        var postDate = document.createElement('h6');
        postDate.innerHTML = 'Published: ' + new Date(post.published).toDateString();
        postDate.className = 'postDate';
        postDiv.appendChild(postDate);

        var postContent = document.createElement('p');
        var contentElement = document.createElement('div');
        contentElement.innerHTML = post.content;
        postContent.innerHTML = contentElement.innerHTML;
        postContent.className = 'postContent';
        postDiv.appendChild(postContent);

        const COMMENTS_API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOGGER_ID}/posts/${post.id}/comments?key=${API_KEY}`;
        fetch(COMMENTS_API_URL).then(response => response.json()).then(commentsData => {
            commentsData.items.forEach(comment => {
                var commentDiv = document.createElement('div');
                commentDiv.className = 'commentDiv';

                var commentAuthor = document.createElement('h6');
                commentAuthor.innerHTML = 'Comment by: ' + comment.author.displayName;
                commentAuthor.className = 'commentAuthor';
                commentDiv.appendChild(commentAuthor);

                var commentContent = document.createElement('p');
                commentContent.innerHTML = comment.content;
                commentContent.className = 'commentContent';
                commentDiv.appendChild(commentContent);

                postDiv.appendChild(commentDiv);
            });
        }).catch(error => console.error('Error:', error));

        postsContainer.appendChild(postDiv);
    });
}).catch(error => console.error('Error:', error));
