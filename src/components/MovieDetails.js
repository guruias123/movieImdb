import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetails.css'

const MovieDetails = (props) => {
    const [movie, setMovie] = useState(null)
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=cac40f0d&t=${id}`)
          .then(response => {setMovie(response.data)
              console.log(response.data);
          })
          
          .catch(error => console.error(error));
      }, []);
  return (
    <div>
        <div className='container'>
            <h4>Movie Detail</h4>
        {movie && <div className='movie-detail'>
                <img className='poster' src={movie.Poster} />
                <div className='details'>
                <p className='title'>{movie.Title}</p>
                <p className='plot'>{movie.Plot}</p>
                <p className='imdbid'>Rating : {movie.Ratings[0].Value}</p>
                </div>
            </div>}
        </div>
    </div>
  )
}

export default MovieDetails