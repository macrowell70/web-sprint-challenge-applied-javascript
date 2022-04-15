import axios from 'axios'

const Card = (article) => {
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainer = document.createElement("div");
  const authorImg = document.createElement("img");
  const authorSpan = document.createElement("span");

  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgContainer.classList.add("img-container");

  headlineDiv.textContent = article.headline;
  authorSpan.textContent = `By ${article.authorName}`

  authorImg.src = article.authorPhoto;
  authorImg.alt = 'Photo of author';

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  authorDiv.appendChild(authorSpan);
  imgContainer.appendChild(authorImg);

  cardDiv.addEventListener("click", () => {
    console.log(article.headline)
  })

  return cardDiv
}

const cardAppender = (selector) => {
  const selector2 = document.querySelector(selector);
  axios.get(`http://localhost:5001/api/articles`)
  .then(res => {
    const data = res.data.articles;
    data.bootstrap.forEach(article => {
      const newCard = Card(article);
      selector2.appendChild(newCard)
    })
    data.javascript.forEach(article => {
      const newCard = Card(article);
      selector2.appendChild(newCard)
    })
    data.jquery.forEach(article => {
      const newCard = Card(article);
      selector2.appendChild(newCard)
    })
    data.node.forEach(article => {
      const newCard = Card(article);
      selector2.appendChild(newCard)
    })
    data.technology.forEach(article => {
      const newCard = Card(article);
      selector2.appendChild(newCard)
    })
  })
  .catch(err => {
    console.error(err);
  })
}


export { Card, cardAppender }
