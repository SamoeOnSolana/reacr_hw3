import React from 'react';

const FavoriteMovie = () => {
  const movie = {
    title: "Інтерстеллар",
    director: "Крістофер Нолан",
    year: 2014,
    studio: "Warner Bros. Pictures",
    poster: "https://via.placeholder.com/300x450",
    rating: 8.6,
    genre: "Наукова фантастика",
    duration: "169 хв"
  };

  return (
    <div style={{border: '1px solid red', padding: '20px', margin: '10px'}}>
      <h2>завдання 1</h2>
      
      <div style={{border: '1px solid blue', padding: '15px', margin: '10px'}}>
        <MoviePoster poster={movie.poster} title={movie.title} />
        <MovieInfo {...movie} />
      </div>
    </div>
  );
};

const MoviePoster = ({ poster, title }) => {
  return (
    <div style={{textAlign: 'center', marginBottom: '15px'}}>
      <img src={poster} alt={title} style={{width: '200px', height: '300px', border: '2px solid black'}} />
      <h3>{title}</h3>
    </div>
  );
};

const MovieInfo = ({ director, year, studio, rating, genre, duration }) => {
  return (
    <div style={{border: '1px solid green', padding: '10px', margin: '10px'}}>
      <p><strong>Режисер:</strong> {director}</p>
      <p><strong>Рік:</strong> {year}</p>
      <p><strong>Кіностудія:</strong> {studio}</p>
      <p><strong>Рейтинг:</strong> {rating}/10</p>
      <p><strong>Жанр:</strong> {genre}</p>
      <p><strong>Тривалість:</strong> {duration}</p>
    </div>
  );
};

export default FavoriteMovie;
