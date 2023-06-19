const articles = document.querySelectorAll('.article-big');
for (let article of articles) {
    const img = article.querySelector('img');
    const text = article.querySelector('div > p');

    fetch('https://baconipsum.com/api/?callback=?')
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        text.textContent = data;
    });
}