

let books = [
    {
      "name": "Die unendliche Geschichte",
      "author": "Michael Ende",
      "image": "img/die-unendliche-geschichte.jpeg",
      "likes": 1250,
      "liked": true,
      "price": 14.99,
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "A Match Made In Space",
      "author": "George McFly",
      "image": "img/back-to-the-future.jpg",
      "likes": 980,
      "liked": false,
      "price": 14.99,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Harry Potter 1 und der Stein der Weisen",
      "author": "Joanne K. Rowling, J.K. Rowling",
      "image": "img/Harry-Potter.jpg",
      "likes": 1520,
      "liked": true,
      "price": 22.95,
      "publishedYear": 2005,
      "genre": "Romantik",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Reise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Grey - Fifty Shades of Grey",
      "author": "E L James",
      "image": "img/grey.webp",
      "likes": 750,
      "liked": false,
      "price": 18.00,
      "publishedYear": 2020,
      "genre": "Roman",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Kein Zurück",
      "author": "Stephen King",
      "image": "img/kein-zurueck.jpeg",
      "likes": 1300,
      "liked": true,
      "price": 16.75,
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Corinna Antelmann",
      "image": "img/im-schatten-des-mondes.jpg",
      "likes": 890,
      "liked": false,
      "price": 12.35,
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Brandon Sanderson",
      "image": "img/dersterne.jpg",
      "likes": 1450,
      "liked": true,
      "price": 21.00,
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Jane Johnson ",
      "image": "img/königreich.jpg",
      "likes": 920,
      "liked": false,
      "price": 17.00,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "image": "img/liebe.webp",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ]

  const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
    books = JSON.parse(storedBooks);
}

  function renderBooks(){
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    for(let i = 0; i < books.length; i++) {
        const book = books[i];

        bookList.innerHTML +=
    `<div class="book">
          <img src="${book.image}" alt="${book.name}">
          <p>Name: ${book.name}</p>
          <p>Author: ${book.author}</p>
          <p>Likes: ${book.likes}</p>
          <p>Price: ${book.price}€</p>
          <p>PublishedYear: ${book.publishedYear}</p>
          <p>Genre: ${book.genre}</p>
          <p class="likes"><span class="like-btn" onclick="toggleLike(${i})">${book.liked ? "❤️" : "🤍"}</span>${book.likes}</p>
          <h3>Kommentare</h3>
          <ul class="comment-list">${renderComments(book.comments)}</ul>

        <div class="comment-form">
          <input id="name-${i}" type="text" placeholder="Dein Name">
          <input id="comment-${i}" type="text" placeholder="Dein Kommentar">
          <button onclick="addComment(${i})">Absenden</button>
        </div>
      
    </div>`;
    
    }
    
}

function addComment(bookIndex) {
  const nameInput = document.getElementById(`name-${bookIndex}`);
  const commentInput = document.getElementById(`comment-${bookIndex}`);

  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();

  if (name === "" || comment === "") {
    alert("Bitte Name und Kommentar ausfüllen");
    return;
  }

  books[bookIndex].comments.push({ name, comment });

 
  localStorage.setItem("books", JSON.stringify(books));

  nameInput.value = "";
  commentInput.value = "";

  renderBooks();
}

function renderComments(comments) {
  if (comments.length === 0) {
    return `<li class="no-comments">Noch keine Kommentare</li>`;
  }

  let html = "";

  for (let i = 0; i < comments.length; i++) {
    html += `
      <li>
        <strong>${comments[i].name}:</strong>
        ${comments[i].comment}
      </li>
    `;
  }

  return html;
}


function toggleLike(index) {
  const book = books[index];

  book.likes += book.liked ? -1 : 1;
  book.liked = !book.liked;

  
  localStorage.setItem("books", JSON.stringify(books));

  renderBooks();
}
localStorage.setItem("books", JSON.stringify(books));

renderBooks();