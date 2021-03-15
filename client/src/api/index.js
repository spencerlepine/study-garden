import axios from "axios"

const url = "http://localhost:5000/plants"

export const fetchPlants = () => axios.get(url)

export const createPlant = (newPlant) => axios.post(url, newPlant)