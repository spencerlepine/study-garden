import express from "express"
import { getPlants, createPlant, updatePlant, deletePlant } from "../controllers/Plants.js"

const router = express.Router();

router.get('/', getPlants)
router.post('/', createPlant)
router.patch('/:id', updatePlant)
router.delete('/:id', deletePlant)

export default router