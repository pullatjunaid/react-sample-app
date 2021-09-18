import axios from "axios"
import eventNames from "../events-names"

export function getAlbums(){
    return(despatch)=>{
        despatch({
            type:eventNames.GET_ALBUMS,
            payload:axios.get('https://jsonplaceholder.typicode.com/albums')
        })
    }
}