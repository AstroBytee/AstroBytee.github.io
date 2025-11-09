fetch('articles.json')
    .then((response) => response.json())
    .then((articles) => {
        const articleList = document.getElementById('article-list');
        articles.forEach((article) => {
            const articleDiv = `
                <div>
                    <h3 class="left-align"><a href="${article.url}">${article.title}</a></h3>
                    <p>Published on ${article.date}</p>
                </div>
            `;
            articleList.innerHTML += articleDiv;
        });
    })
    .catch((error) => console.error('Error loading articles:', error));