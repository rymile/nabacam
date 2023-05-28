const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDFiOWRiYWQ2MTMwMGQ0YjZlMTBhMmViYWNjZGQxYiIsInN1YiI6IjY0NzA4OTljMTNhMzIwMDBhNmM5ZTJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5ooP3rZpz0B1BZYwW55wmjzDSoiFVMMh4wCtxB7BY",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

let movies = [
  {
    id: 238,
    name: "The Godfather",
    type: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    URL: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    vote_average: 8.7,
  },
  {
    id: 278,
    name: "The Shawshank Redemption",
    type: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    URL: "https://image.tmdb.org/t/p/w500/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    vote_average: 8.7,
  },
  {
    id: 240,
    name: "The Godfather Part II",
    type: "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    URL: "https://image.tmdb.org/t/p/w500/5ZSfJ9aleg2rGhVWp0Dcqv38Nr5.jpg",
    vote_average: 8.6,
  },
  {
    adult: false,
    backdrop_path: "/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
    genre_ids: [Array],
    id: 19404,
    original_language: "hi",
    name: "दिलवाले दुल्हनिया ले जायेंगे",
    type: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
    popularity: 23.291,
    URL: "https://image.tmdb.org/t/p/w500/ktejodbcdCPXbMMdnpI9BUxW6O8.jpg",
    release_date: "1995-10-19",
    title: "Dilwale Dulhania Le Jayenge",
    video: false,
    vote_average: 8.6,
    vote_count: 4136,
  },
  {
    adult: false,
    backdrop_path: "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
    genre_ids: [Array],
    id: 424,
    name: "Schindler's List",
    type: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    popularity: 46.088,
    URL: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    release_date: "1993-12-15",
    title: "Schindler's List",
    video: false,
    vote_average: 8.6,
    vote_count: 14094,
  },
  {
    adult: false,
    backdrop_path: "/ejnlCzBd5pOGAYCpxC93NXSrdrz.jpg",
    genre_ids: [Array],
    id: 772071,
    original_language: "es",
    name: "Cuando Sea Joven",
    type: `70-year-old Malena gets a second chance at life when she magically turns into her 22-year-old self. Now, posing as "Maria" to hide her true identity, she becomes the lead singer of her grandson's band and tries to recover her dream of singing, which she had to give up at some point.`,
    popularity: 19.755,
    URL: "https://image.tmdb.org/t/p/w500/6gIJuFHh5Lj4dNaPG3TzIMl7L68.jpg",
    release_date: "2022-09-14",
    title: "Cuando Sea Joven",
    video: false,
    vote_average: 8.6,
    vote_count: 237,
  },
  {
    adult: false,
    backdrop_path: "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
    genre_ids: [Array],
    id: 129,
    original_language: "ja",
    name: "千と千尋の神隠し",
    type: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    popularity: 83.683,
    URL: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    release_date: "2001-07-20",
    title: "Spirited Away",
    video: false,
    vote_average: 8.5,
    vote_count: 14333,
  },
  {
    adult: false,
    backdrop_path: "/tj6iPnz18hGfr0LKqWmG6Cp3niO.jpg",
    genre_ids: [Array],
    id: 389,
    name: "12 Angry Men",
    type: "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    popularity: 37.325,
    URL: "https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    release_date: "1957-04-10",
    title: "12 Angry Men",
    video: false,
    vote_average: 8.5,
    vote_count: 7285,
  },
  {
    adult: false,
    backdrop_path: "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
    genre_ids: [Array],
    id: 372058,
    original_language: "ja",
    name: "君の名は。",
    type: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    popularity: 103.902,
    URL: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    release_date: "2016-08-26",
    title: "Your Name.",
    video: false,
    vote_average: 8.5,
    vote_count: 9868,
  },
  {
    adult: false,
    backdrop_path: "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
    genre_ids: [Array],
    id: 496243,
    original_language: "ko",
    name: "기생충",
    type: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    popularity: 65.37,
    URL: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    release_date: "2019-05-30",
    title: "Parasite",
    video: false,
    vote_average: 8.5,
    vote_count: 15766,
  },
  {
    id: 155,
    name: "The Dark Knight",
    type: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    popularity: 78.354,
    URL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    release_date: "2008-07-14",
    title: "The Dark Knight",
    video: false,
    vote_average: 8.5,
    vote_count: 29752,
  },
  {
    adult: false,
    backdrop_path: "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
    genre_ids: [Array],
    id: 497,
    name: "The Green Mile",
    type: "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    popularity: 81.908,
    URL: "https://image.tmdb.org/t/p/w500/o0lO84GI7qrG6XFvtsPOSV7CTNa.jpg",
    release_date: "1999-12-10",
    title: "The Green Mile",
    video: false,
    vote_average: 8.5,
    vote_count: 15429,
  },
  {
    adult: false,
    backdrop_path: "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    genre_ids: [Array],
    id: 680,
    name: "Pulp Fiction",
    type: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    popularity: 59.289,
    URL: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    release_date: "1994-09-10",
    title: "Pulp Fiction",
    video: false,
    vote_average: 8.5,
    vote_count: 25205,
  },
  {
    adult: false,
    backdrop_path: "/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
    genre_ids: [Array],
    id: 429,
    original_language: "it",
    name: "Il buono, il brutto, il cattivo",
    type: "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
    popularity: 57.006,
    URL: "https://image.tmdb.org/t/p/w500/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
    release_date: "1966-12-23",
    title: "The Good, the Bad and the Ugly",
    video: false,
    vote_average: 8.5,
    vote_count: 7414,
  },
  {
    adult: false,
    backdrop_path: "/3h1JZGDhZ8nzxdgvkxha0qBqi05.jpg",
    genre_ids: [Array],
    id: 13,
    name: "Forrest Gump",
    type: "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    popularity: 58.654,
    URL: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    release_date: "1994-06-23",
    title: "Forrest Gump",
    video: false,
    vote_average: 8.5,
    vote_count: 24690,
  },
  {
    adult: false,
    backdrop_path: "/wxaBkuqVIgImjRHEMJoxL9Lq6i8.jpg",
    genre_ids: [Array],
    id: 995133,
    name: "The Boy, the Mole, the Fox and the Horse",
    type: "The unlikely friendship of a boy, a mole, a fox and a horse traveling together in the boy’s search for home.",
    popularity: 23.518,
    URL: "https://image.tmdb.org/t/p/w500/oQRgyQCzcyZvE6w5heM9ktVY0LT.jpg",
    release_date: "2022-12-25",
    title: "The Boy, the Mole, the Fox and the Horse",
    video: false,
    vote_average: 8.5,
    vote_count: 329,
  },
  {
    adult: false,
    backdrop_path: "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
    genre_ids: [Array],
    id: 122,
    name: "The Lord of the Rings: The Return of the King",
    type: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
    popularity: 71.898,
    URL: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    release_date: "2003-12-01",
    title: "The Lord of the Rings: The Return of the King",
    video: false,
    vote_average: 8.5,
    vote_count: 21620,
  },
];

// 리스트 목록

const list = document.getElementById("list");

function showList(val = "") {
  list.innerHTML = "";
  let res = movies.forEach((moive) => {
    if (moive.name.includes(val)) {
      let div = document.createElement("div");
      div.innerHTML = `
        <div class ="card" onclick ="card()" id ="${moive.id}"></div>
        <img src ="${moive.URL}" alt ="${moive.name}"></img>
        <h3>제목: ${moive.name}</h3>
        <p>내용요약 <br><br> ${moive.type}</p>
        <p>평점: ${moive.vote_average}</p>
        `;

      list.appendChild(div);
    }
  });
}

// 이미지 클릭 시 id 호출

// 검색기능

showList();

let searchInput = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let val = searchInput.value;
  console.log(val);
  showList(val);
});

//추가 기능

//삭제 기능
