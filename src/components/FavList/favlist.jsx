import React from 'react'
import { useState, useEffect } from "react";
import NavBar from "../Navbar/navBar";
import Favmovies from "./favmovie";

export default function favMovie() {
    const [favMovie, setfavMovie] = useState([]);

    async function getFavMovie() {
        const response = await fetch(`https://movies4ever.herokuapp.com/getMovies`);
        const data = await response.json();

        setfavMovie(data);
    }

    useEffect(() => {
        getFavMovie();
    }, []);
    return (
        <>
            <h1>From favMovie Page</h1>
            <NavBar />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                }}
            >

                {favMovie &&
                    favMovie.map((trend) => {
                        return (
                            <Favmovies
                                key={trend.id}
                                getFavMovie={getFavMovie}
                                trend={trend}
                            />
                        );
                    })}
            </div>
        </>
    );
}