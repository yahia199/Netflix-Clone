

import React, { useEffect, useState } from "react"
import Navbar from "../Navbar/navbar"
import MovieList from "../MovieList/movielist"
//import Favlist from "../FavList/favlist";

export default function Home() {
    const [trending, setTrending] = useState([]);

    async function getData() {
        let response = await fetch(`https://movies4ever.herokuapp.com/trending`);

        let data = await response.json();
        setTrending(data);

    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>From home page</h1>
            <Navbar />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                {trending && <MovieList trendingMovie={trending} />}
            </div>


        </>
    )
}