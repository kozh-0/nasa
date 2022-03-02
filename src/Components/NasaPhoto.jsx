import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function NasaPhoto() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => setData(data));
    }, [])

    const {explanation, date, url, title, media_type} = data;
    return (
        <>
            {data.title ? (
                <>
                    <div className="pic">
                        {media_type === 'image' ? (
                            <img src={url} alt={title.slice(0,15) + '...'} />
                        ) : (
                            <iframe src={url} allowFullScreen title="video"/>
                        )}
                        <div className="descr">
                            <h1>{title}</h1>
                            <h5>{date}</h5>
                            <p>{explanation}</p>
                        </div>
                    </div>
                    <Link className="back" to="/">Back</Link>
                </>
            ) : <h1>Loading...</h1>}
        </>
    )
}