const blogData = [
    {
        id: 1,
        title: "Why UtilCentral Exists",
        image: "images/blog1-main.jpg",
        summary: "Building a network that empowers creators, connects ideas, and amplifies visibility.",
        url: "why-utilcentral-exists.html"
    },
    {
        id: 2,
        title: "The Power of Connection",
        image: "images/blog2-connection.jpg",
        summary: "Instead of each site standing alone, UtilCentral connects them into one integrated network.",
        url: "the-power-of-connection.html"
    },
    {
        id: 3,
        title: "A Global Approach",
        image: "images/blog3-global.jpg",
        summary: "English-based content allows UtilCentral sites to reach users across all regions efficiently.",
        url: "blog3.html"
    }
];

const blogGrid = document.getElementById('blog-grid');

function renderBlogCards() {
    blogData.forEach(blog => {
        const card = document.createElement('a');
        card.href = blog.url;
        card.className = 'blog-card';
        card.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <div class="content">
                <h3>${blog.title}</h3>
                <p>${blog.summary}</p>
                <span class="read-more">Read More →</span>
            </div>
        `;
        blogGrid.appendChild(card);
    });
}

window.onload = renderBlogCards;


