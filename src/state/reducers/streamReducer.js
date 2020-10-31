import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/index'
  
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case CREATE_STREAM: 
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case EDIT_STREAM: 
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    default:
      state;
  } 
}