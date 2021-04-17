import React from 'react'
import { Link,BrowserRouter as Router } from 'react-router-dom'

function MovieCard(props) {
    return (

        <div className="container">
            <Link className="link" to={`/showmovie/${props.id}`}>
            <div className="box">
                <h3 id="color-props"><span id="color-text" style={{ color: "#4CAF50" }}>Name:</span> {props.Name}</h3>
                <h3 id="color-props"><span id="color-text" style={{ color: "#4CAF50" }}>Genre:</span> {props.Genre}</h3>
                <img src={props.image} style={{ width: "250px", height: "300px" }} />
                <h3 id="color-props"><span id="color-text" style={{ color: "#4CAF50" }}>Date de sortir:</span> {props.datesortir}</h3>
                <h3 id="color-props"><span id="color-text" style={{ color: "#4CAF50" }}>Rate:</span> {props.rate}</h3>
            </div>
            </Link>
        </div>
    )
}

export default MovieCard
