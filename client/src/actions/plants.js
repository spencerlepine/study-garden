import * as api from "../api/index.js"

// action creators
export const getPlants = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPlants()

        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createPlant = (plant) => async (dispatch) => {
    try {
        const { data } = await api.createPlant(plant)

        dispatch({ type: "CREATE", payload: data })
    } catch(error) {
        console.log(error.message)
    }
}

// export const updatePost = (id, post) => async (dispatch) => {
//     try {
//         const { data } = await api.updatePost(id, post)

//         console.log("returning action in actions/Posts.js")
        
//         dispatch({ type: "UPDATE", payload: data })
//     } catch(error) {
//         console.log(error.message)
//     }
// }

// export const deletePost = (id) => async (dispatch) => {
//     try {
//         await api.deletePost(id)

//         dispatch({ type: "DELETE", payload: id })
//     } catch(error) {
//         console.log(error.message)
//     }
// }