const BLOGGER_ID = '2756493429384988662';
const API_KEY = 'AIzaSyBFBbH1SQkSZf1LJzammWAe2karh5mG9rQ';
const POSTS_API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOGGER_ID}/posts?key=${API_KEY}`;

fetch(POSTS_API_URL).then(response => response.json()).then(data => {
    let postsContainer = document.getElementById('posts-container');
    let loading = document.getElementById('loading');

    data.items.forEach(post => {
        loading.style.display = 'none';

        let postDiv = document.createElement('div');
        postDiv.className = 'postDiv';

        let postTitle = document.createElement('a');
        postTitle.innerHTML = post.title;
        postTitle.href = post.url;
        postTitle.className = 'postTitle';
        postDiv.appendChild(postTitle);

        let postAuthor = document.createElement('h6');
        postAuthor.innerHTML = 'Author: ' + post.author.displayName;
        postAuthor.className = 'postAuthor';
        postDiv.appendChild(postAuthor);

        let postDate = document.createElement('h6');
        postDate.innerHTML = 'Published: ' + new Date(post.published).toDateString();
        postDate.className = 'postDate';
        postDiv.appendChild(postDate);

        let postContent = document.createElement('p');
        let contentElement = document.createElement('div');
        contentElement.innerHTML = post.content;
        postContent.innerHTML = contentElement.innerHTML;
        postContent.className = 'postContent';
        postDiv.appendChild(postContent);

        const COMMENTS_API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOGGER_ID}/posts/${post.id}/comments?key=${API_KEY}`;
        fetch(COMMENTS_API_URL).then(response => response.json()).then(commentsData => {
            commentsData.items.forEach(comment => {

                let commentDiv = document.createElement('div');
                commentDiv.className = 'commentDiv';

                let commentAuthor = document.createElement('h6');
                commentAuthor.innerHTML = 'Comment by: ' + comment.author.displayName;
                commentAuthor.className = 'commentAuthor';
                commentDiv.appendChild(commentAuthor);

                let commentContent = document.createElement('p');
                commentContent.innerHTML = comment.content;
                commentContent.className = 'commentContent';
                commentDiv.appendChild(commentContent);

                postDiv.appendChild(commentDiv);
            });
            let section_divider = document.createElement('hr');
            let comment_section = document.createElement('h3');
            comment_section.innerText = 'Comments';
            postContent.appendChild(section_divider);
            postContent.appendChild(comment_section);
        }).catch(error => console.error('Error:', error));

        postsContainer.appendChild(postDiv);
    });
}).catch(error => console.error('Error:', error));
