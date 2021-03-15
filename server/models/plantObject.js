import mongoose from "mongoose"

const plantSchema = mongoose.Schema({
    type: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PlantObject = mongoose.model('PlantObject', plantSchema)

export default PlantObject