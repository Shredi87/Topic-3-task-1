const articles = document.querySelectorAll('.article-big');
for (let article of articles) {
    const img = article.querySelector('img');
    const text = article.querySelector('div > p');
    // {
    //     "type": "all-meat",
    //     "sentences": 3,
    //     "format": "text"    
    // }
    fetch('https://baconipsum.com/api/?' + new URLSearchParams({
        type: "all-meat", 
        sentences: 5,
        format: 'text'
    }))
    .then((response) => response.text())
    .then((data) => text.textContent = data);
}