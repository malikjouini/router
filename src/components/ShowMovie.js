import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css'

function ShowMovie(props) {
    console.log(props)
    return (
        <div className="body">
            <header>
                <Link to="/">
                    <button className="button">Home</button>
                </Link>
            </header>
            <div className="container">
                <div className="box">
                    <h3 id="color-props"><span id="color-text" style={{ color: "#4CAF50" }}>Trailer:</span> {props.trailer}</h3>
                    <h3 id="color-props"><span id="color-text" style={{ color: "#4CAF50" }}>Desciption:</span> {props.description}</h3>
                    <img src={props.image} style={{ width: "250px", height: "300px" }} />

                </div>

            </div>
        </div>
    )
}

export default ShowMovie
