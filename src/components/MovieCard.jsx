import React from 'react'
import '../style/MovieCard.css'

const MovieCard = ({ img_path }) => {
    return (
        <div className="movie__card">
            <img src={img_path} alt="" />
        </div>
    )
}

export default MovieCard