// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import classes from './Movies.module.css';

export default function Movies() {
  const movies = useLoaderData();

  return (
    <>
      <main>
        <h1 className={classes.moviesHeading}>Movies</h1>
        <div className={classes.movies}>
          {movies.map((movie, index) => (
            <div key={index} className={classes.movieCard}>
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.releaseDate}</p>
              <p>Genres: {movie.genres.join(", ")}</p>
              {/* Add other movie details you want to display */}
              <img width="100px" src={movie.poster} alt={movie.title} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function moviesLoader() {
  const response = await fetch("http://localhost:8080/api/v1/movies/");
  const responseJson = await response.json();

  console.log(responseJson);

  return responseJson;
}
