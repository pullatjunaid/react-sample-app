import { Component, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from 'react-redux'
import { getAlbums } from '../redux-store/actions/album'
import { getPhotos } from '../redux-store/actions/photos'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { Spinner } from "react-bootstrap";

function HomePage(props) {
    // const [albumsList, setalbumsList] = useState([])
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const albumsList = useSelector(state => state.album.albumData)
    const photosList = useSelector(state => state.photo.photoData)
    const [filteredPhotoList, setFilteredPhotoList] = useState([])
    const [selectedAlbum, setselectedAlbum] = useState('')
    const [isAlbumError, setIsAlbumError] = useState(false)
    useEffect(() => {
        dispatch(getAlbums())
        dispatch(getPhotos())
        console.log(selector)
    }, [])

    const onChangeAlbum = (evnt) => {
        setselectedAlbum(evnt.target.value);
        setFilteredPhotoList([])
        let tempList = []
        photosList.map((val) => {
            if (val.albumId == evnt.target.value) return tempList.push(val)
        })
        setFilteredPhotoList(tempList);
    }

    return (

        <div class="main-container">
            <div className="loading">  {selector.album.isGetAlbum === "PENDING" || selector.photo.isGetPhoto === "PENDING" ?
                <div>
                    <Spinner className="spinner" animation="grow" size="sm" />
                    <Spinner className="spinner" animation="grow" size="sm" />
                    <Spinner className="spinner" animation="grow" size="sm" />
                </div>
                : ''}</div>

            <label class="select-album-hd">Select Album</label>

            <select className="select-box" onChange={onChangeAlbum} >
                <option value="">Select Album</option>
                {albumsList && albumsList.map((item) =>
                    (<option value={item.id}>{item.title}</option>)
                )}
            </select>

            <div class="error-message-select">{!selectedAlbum ? `No photo associated with the selected Album` : ''}</div>

            <div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 24 }}>
                    {filteredPhotoList && filteredPhotoList.map((photo, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={photo.url}
                                    alt={photo.title}
                                />
                                <div className="card-body-area">
                                    <h3>Photo ID: {photo.id}</h3>
                                    <p className="card-body-area-text">{photo.title}</p>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>

    )

}
export default HomePage