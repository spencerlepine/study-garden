import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import PlantTimer from "./components/PlantTimer"
import Shop from "./components/Shop"
import Garden from "./components/Garden/Garden"

import './App.css';

import { getPlants } from "./actions/plants.js"

function App() {
    const dispatch = useDispatch()  

    useEffect(() => {
        dispatch(getPlants())
    }, [dispatch])

    return (
        <div className="App">
            <Switch>
                <Route path="/timer/:type">
                    <PlantTimer />
                </Route>
                <Route path="/shop">
                    <Shop />
                </Route>
                <Route path="/">
                    <Garden />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
