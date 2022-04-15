import {useEffect, useState} from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com?apikey=1c779031';

const App = () => {

    const [movie, setMovie] = useState([]);
    const [searchTerm, setSearch] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        //console.log(data.Search);
        setMovie(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>Movie Dictionary</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange = {(e) => setSearch(e.target.value)}
                />
                <img
                    src= {SearchIcon}
                    alt = "glass"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            
            {
                movie?.length > 0 ? (<div className="container">
                {movie.map((movie1) => (
                    <MovieCard movie1={movie1}/>
                ) )}

            </div>) : ( <div className="empty">
                <h2>No movies Found</h2>
            </div>)
            }
            

        </div>
        

    );
}

export default App;