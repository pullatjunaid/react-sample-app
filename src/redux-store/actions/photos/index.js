import axios from "axios"
import eventNames from "../events-names"

export function getPhotos(){
    return(despatch)=>{
        despatch({
            type:eventNames.GET_PHOTOS,
            payload:axios.get('https://jsonplaceholder.typicode.com/photos')
        })
    }
}