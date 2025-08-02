document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response=> response.text())
        .then(content => {
            document.getElementById('header').innerHTML = content;
        })
        .catch(error => console.error('Error loading header:', error));
    fetch('footer.html')
        .then(response=> response.text())
        .then(content => {
            document.getElementById('footer').innerHTML = content;
        })
        .catch(error => console.error('Error loading footer:', error));
});

function toggleMode() {
    document.documentElement.classList.toggle("dark-mode");
}

document.addEventListener('DOMContentLoaded', function() {
const blogList = document.getElementById('blog-list');
fetch('posts.json')
.then(response => response.json())
.then(posts => {
posts.forEach(post => {
const postElement = document.createElement('div');
postElement.innerHTML = `<div class="container"><h3>${post.title}</h3> <p style="font-style:italic;text-align:center;">${post.description}</p> <br> <p>${post.content}</p></div>`;
// manipulate postElement to show the content of the blog post with the specific style defined for it
//add postElement as a child to blog list
blogList.append(postElement);
});
})
.catch(error => console.error('Error loading blog posts:', error));
});