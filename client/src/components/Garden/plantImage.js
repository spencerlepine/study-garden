import samplePlants from "../samplePlants"

export default function getPlantImage(type) {
    for (let i = 0, l = samplePlants.length; i < l; i++) {
        if (samplePlants[i].type === type) {
            return samplePlants[i].source
        }
    }
}