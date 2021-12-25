"use strict";

import '../styles/content.scss';
import { GenreResponseProps } from "./props/GenreResponseProps"
import { MovieCard } from './MovieCard';
import { Header } from './Header';
import { MovieProps } from './props/MovieProps';
export function Content(props:{selectedGenre:GenreResponseProps,movies:MovieProps[]}) {  
  return(  
   <div className="container">
   <Header title={props.selectedGenre.title}></Header>
   <main>
    <div className="movies-list">
      {props.movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
</div>
);
}