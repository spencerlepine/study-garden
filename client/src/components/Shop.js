import React from "react"
import { useHistory } from "react-router-dom";
import samplePlants from "./samplePlants"
import HomeButton from "./HomeButton"

function Shop() {
    const history = useHistory()
    let availablePlants = samplePlants
    let listDiv = availablePlants.map((plant) => {
        if (plant.unlocked) {
            return ( <div key={plant.id} className="plantCard"
                            onClick={() => { history.push("/timer/" + plant.type) }}>
                        <img src={plant.source} alt={plant.type} />
                        <h3>
                            {plant.type}
                        </h3>
                    </div>
            )
        }
    })

    return (
        <div className="shop">
            <HomeButton />
            <h1>Choose Plant: </h1>
            <hr />
            <div className="shopCards">
                {listDiv}
            </div>
        </div>
    )
}

export default Shop