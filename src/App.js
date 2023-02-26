import React from 'react'
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

function App() {


  return (
    <div className="App">
      <Router>
      <Routes>
          <Route exact path='/' element={<Home  />}/>
          <Route path='/movie/:id' element={<MovieDetails />} />
          </Routes>
      </Router>
        {/* <Home /> */}
    </div>
  );
}

export default App;
