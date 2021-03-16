import React from "react"
import { Link } from "react-router-dom";

function HomeButton() {
    return (
        <div className="homeButton">
            <Link to="/">🏠Home</Link>
        </div>
    )
}

export default HomeButton