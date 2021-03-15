import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import samplePlants from "./samplePlants"

function getPlantImage(type) {
    for (let i = 0, l = samplePlants.length; i < l; i++) {
        if (samplePlants[i].type === type) {
            return samplePlants[i].source
        }
    }
}

function Garden() {
    const plants = useSelector((state) => state.plants)
    
    const plantList = plants.map((plant, i)=> (
        <div key={i} className="gardenPlant" onClick={() => {console.log(plant._id)}}>
            <img src={getPlantImage(plant.type) || "http://www.freeiconspng.com/uploads/error-icon-28.png"} alt="Plant" />
        </div>
    ))
    return (
        <div className="overview">
            <p>Plants: {plants.length}</p>
            {plantList}
            <Link to="/shop">Shop</Link>
        </div>
    )
}

export default Garden