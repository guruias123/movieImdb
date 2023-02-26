import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

import './Home.css'

const Home = () => {
    const [data, setData] = useState(null);
    const [first, setFirst] = useState()

    useEffect(() => {
      axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=cac40f0d&s=harry')
        .then(response => {setData(response.data.Search)
            setFirst(response.data.Search)
            console.log(data);
        })
        
        .catch(error => console.error(error));
    }, []);


    const filter = (event) => {
        event.preventDefault()
        const results = data.filter(post => {
            if (event.target.value === "") return data
            return post.Title.toLowerCase().includes(event.target.value.toLowerCase())
        })
       setFirst(results)
    }

  return (
    <div>
    <div className='hooked'>
        <h1>BANDARU movies</h1>
    </div>

    <div className='search'>
        <input style={{ width: '300px', marginRight: '5px' }} type='text' onChange={filter} />
        <button >SEARCH</button>
    </div>

    <div className='movie_box'>
        {
            first && first.map(movie => {
                return (
                    <Link to={'/movie/' + movie.Title}> 
                <div className='every_movie' >

                    <img src={movie.Poster} />
                    <h4>{movie.Title}</h4>
                    <p>{movie.Year}</p>

                </div>
                </Link>
                )
            })
        }
    </div>
</div>
  )
}

export default Home