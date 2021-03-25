import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Plant from "./Plant/Plant"
import getPlantImage from "./plantImage"
import "./styles.css"

function Garden() {
    const plants = useSelector((state) => state.plants)
    
    const plantList = plants.map((plant, i) => (
        <Plant i={i} src={getPlantImage(plant.type) || "http://www.freeiconspng.com/uploads/error-icon-28.png"} plant={plant}></Plant>
    ))
    
    return (
        <div className="overview">
            <p>Plants: {plants.length}</p>
            <div className="garden">
                {plantList}
            </div>
            <Link to="/shop" className="shopLink">🪴Study</Link>
        </div>
    )
}

export default Garden