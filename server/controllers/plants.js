import mongoose from "mongoose"
import PlantObject from "../models/plantObject.js"

export const getPlants = async (req, res) => {
    try {
        const plantObjects = await PlantObject.find()

        res.status(200).json(plantObjects)
    } catch(error) {
        res.status(404).json(error.message)
    }
}

export const createPlant = async (req, res) => {
    const plant = req.body

    const newPlant = new PlantObject(plant)

    try {
        await newPlant.save()

        res.status(201).json(newPlant)
    } catch(error) {
        res.status(409).json(error.message)
    }
}

export const updatePlant = async (req, res) => {
    const { id: _id } = req.params
    const plant = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with that id")
    }

    const updatePost = await PostMessage.findByIdAndUpdate(_id, { ...plant, _id }, { new: true })
    res.json(updatePost)
}

export const deletePlant = async (req, res) => {
    const { id } = req.params
    
    // Delete the plant from mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No plant with that id")
    }

    await PostMessage.findByIdAndRemove(id)

    return res.json("Plant deleted successfully")
}