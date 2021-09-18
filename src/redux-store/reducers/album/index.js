import eventsNames from "../../actions/events-names"

const initialState = {
    isGetAlbum: false,
    albumData: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case `${eventsNames.GET_ALBUMS}_PENDING`:
            return {
                ...state,
                isGetAlbum: 'PENDING'
            }
        case `${eventsNames.GET_ALBUMS}_FULFILLED`:
            return {
                ...state,
                albumData:action.payload.data,
                isGetAlbum: 'FULFILLED'
            }
        case `${eventsNames.GET_ALBUMS}_REJECTED`:
            return {
                ...state,
                isGetAlbum: 'REJECTED'
            }
        default: return state
    }
}