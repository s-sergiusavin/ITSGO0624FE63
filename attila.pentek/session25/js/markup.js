export function updateNewsList(markup) {
  document.getElementById("articlesWrapper").innerHTML = markup;
}

export function createMarkup({ author, title, description, url, urlToImage }) {
  return `
  <div class="articleCard">
    <h2 class="articleTitle">${title}</h2>
    <h3 class="articleAuthor">${author || "Anonym"} </h3>
    <img src="${urlToImage} class="articleImg">
    <p class="articleDescription">${description}</p>
    <a href=${url} class="articleLink" target="_blank">Read more</a> 
  </div>`;
}
