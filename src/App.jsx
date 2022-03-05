import React from "react";
// import Button from 'react-bootstrap/Button';
import { Routes, Route} from "react-router-dom";

import Home from "./components/Home/home"
import MovieList from "./components/MovieList/movielist"


export default function App(){
    return(
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/MovieList"element={<MovieList/>}/>
        </Routes>
    )
}