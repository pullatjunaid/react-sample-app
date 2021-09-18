import { Component, useEffect, useState } from "react";
import { connect, useSelector } from 'react-redux'
import { getAlbums } from '../redux-store/actions/album'

function HomePage(props) {
    const [albumsList, setalbumsList] = useState([])
    useEffect(() => {
        props.dispatch(getAlbums())
    }, [])
    useSelector(state => {
        console.log(state)
        console.log(state.album)
        if (state.album.albumData !== albumsList && state.album && state.album.isGetAlbum === "FULFILLED") {
            console.log(state.album.albumData)
            setalbumsList( state.album.albumData)
        }
    })

    return (

        <div>
            <select >
                <option>Select Album</option>
                {albumsList && albumsList.map((item) => {
                    <option value={item.id}>{item.title}</option>
                })}
            </select>
        </div>

    )

}
export default connect(store => ({
    album: store.album
}))(HomePage)