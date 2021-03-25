import React from "react"

function Plant({ plant, src, i}) {
    return (
        <div key={i} className="gardenPlant" onClick={() => {console.log(plant._id)}}>
            <img src={src} alt="Plant" />
        </div>
    )
}

export default Plant