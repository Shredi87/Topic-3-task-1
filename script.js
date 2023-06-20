const articles = document.querySelectorAll('.article-big');
for (let article of articles) {
    const text = article.querySelector('div > p');
    const url = 'https://baconipsum.com/api/?';
    const params = {
        type: "all-meat", 
        sentences: 5,
        format: 'text'
    };
    
    
    fetch(url + new URLSearchParams(params))
    .then((response) => response.text())
    .then((data) => text.textContent = data);
}