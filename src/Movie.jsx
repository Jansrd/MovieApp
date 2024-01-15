import React from 'react'
import { useEffect, useState } from 'react'
import './style/Movie.css'
import Header from './components/Header'
import { api_key, api_url } from "./api";
import MovieCard from './components/MovieCard';

let movieUrl = api_url + '/discover/movie?sort_by=popularity.desc' + api_key

const Movie = () => {
    const [movieList, setMovieList] = useState([])
    const [url, setUrl] = useState(movieUrl)
    const [input, setInput] = useState('')

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMovieList(data.results)
            })
    }, [url])

    const getData = (movieType) => {
        if (movieType === "Popular") {
            movieUrl = api_url + '/discover/movie?sort_by=popularity.desc' + api_key
        }
        if (movieType === "Theatre") {
            movieUrl = api_url + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2023-12-22' + api_key
        }
        if (movieType === "Drama") {
            movieUrl = api_url + '/discover/movie?with_genres=18&primary_release_year=2014' + api_key
        }
        if (movieType === "Comedy") {
            movieUrl = api_url + '/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc' + api_key
        }
        setUrl(movieUrl)
    }

    const searchMovie = () => {
        movieUrl = api_url + '/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=' + input
        setUrl(movieUrl)
        setInput('')
    }

    return (
        <div className="movie">
            <Header
                getData={getData}
                input={input}
                setInput={setInput}
                searchMovie={searchMovie}
            />
            <div className="movie__list">
                {
                    (movieList.length === 0) ? (
                        <p>Not found</p>
                    ) :
                        (
                            <div className="movie__list__content">
                                {
                                    movieList.map((movie) => (
                                        <MovieCard
                                            img_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            title={movie.title}
                                            release_date={movie.release_date}
                                            rating={movie.vote_average}
                                        />
                                    ))
                                }
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default Movie