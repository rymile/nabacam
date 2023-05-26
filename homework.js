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
