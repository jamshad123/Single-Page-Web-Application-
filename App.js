// import logo from './logo.svg';
import './App.css';
// import Card from './Card';
// import Mdb from './Mdb';
// import Array from './Array';
import { useState,createContext } from 'react';
// import UseState1 from './UseState1';
// import Navbar1 from './Navbar';
// import Home from './Home';
// import Login from './Login';
// import Register from './Register';

const namecontext=createContext();

function App() {
  const [name, setname] = useState("Jamshad")
  return (
    <div>
      <namecontext.Provider value={[name, setname]}>

      

     </namecontext.Provider>
    </div>
  );
}

export default App;
export const baseUrl = "https://api.themoviedb.org/3/";
export const imageUrl = "https://image.tmdb.org/t/p/original";
export const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";

export const ComedyMovies = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const LatestMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;

export const PopularMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export {namecontext}