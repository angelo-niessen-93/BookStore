function renderBookHTML(book, index) {
  return `
    <div class="book">
        <img src="${book.image}" alt="${book.name}">
        <p>Name: ${book.name}</p>
        <p>Author: ${book.author}</p>
        <p>Preis: ${book.price}€</p>
        <p>Erscheinungsjahr: ${book.publishedYear}</p>
        <p>Klasse: ${book.genre}</p>

        <p class="likes">
            <span class="like-btn" onclick="toggleLike(${index})">
                ${book.liked ? "❤️" : "🤍"}
            </span>
            ${book.likes}
        </p>

        <h3>Kommentare</h3>
        <ul class="comment-list">${renderComments(book.comments)}</ul>

        <div class="comment-form">
            <input id="name-${index}" type="text" placeholder="Dein Name">
            <input id="comment-${index}" type="text" placeholder="Dein Kommentar">
            <button onclick="addComment(${index})">Absenden</button>
        </div>
    </div>`;
}
