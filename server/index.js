import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"

import postRoutes from "./routes/plants.js"

const app = express()

app.use(bodyParser.json({ limit:  "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit:  "30mb", extended: true }))
app.use(cors())

app.use('/plants', postRoutes)

// Connect our MongoDB cluster
const CONNECTION_URL = "mongodb+srv://admin:ADhuasFR1vynxa7O@cluster0.5qf6a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)