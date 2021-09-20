import eventsNames from "../../actions/events-names"

const initialState = {
    isGetPhoto: false,
    photoData: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case `${eventsNames.GET_PHOTOS}_PENDING`:
            return {
                ...state,
                isGetPhoto: 'PENDING'
            }
        case `${eventsNames.GET_PHOTOS}_FULFILLED`:
            return {
                ...state,
                photoData:action.payload.data,
                isGetPhoto: 'FULFILLED'
            }
        case `${eventsNames.GET_PHOTOS}_REJECTED`:
            return {
                ...state,
                isGetPhoto: 'REJECTED'
            }
        default: return state
    }
}