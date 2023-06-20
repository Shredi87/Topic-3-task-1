const articles = document.querySelectorAll('.article-big');
for (let article of articles) {
    //const img = article.querySelector('img');
    const text = article.querySelector('div > p');
    
    async function giveText() {

        const url = ('https://baconipsum.com/api/?' + new URLSearchParams({
            type: "all-meat", 
            sentences: 5,
            format: 'text'
        }))

        const result = await fetch(url)
        .then(response => response.text())
        .then(data => text.textContent = data)
    }

}
