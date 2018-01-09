import * as t from "./actionTypes"

const INITIAL_STATE = {
  isFetching: false,
  isFetched: false,
  fetchError: null,
  entities: [],
}


const ImageTooltipReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case t.FETCH_START: return { 
      ...state,
      isFetching: true, 
      isFetched: false,
      fetchError: null,
    }
    case t.FETCH_SUCCESS: return { 
      ...state,
      isFetching: false, 
      isFetched: true,
      fetchError: null,
      entities: [
        ...state.entities, 
        ...payload.entities
      ]
    }
    case t.FETCH_ERROR: return { 
      isFetching: false,
      isFetched: false,
      fetchError: {
        text: payload.errText
      },
    }
    case t.CREATE_SUCCESS: return {
      ...state,
      entities: [ 
        ...state.entities, 
        {
          id: payload.id,
          text: payload.text,
          url: payload.url
        }
      ]
    }
    case t.UPDATE_SUCCESS: return {
      ...state,
      entities: state.entities.map(item => (item.id === payload.id)
        ? { ...payload }
        : item
      )
    }
    case t.REMOVE_SUCCESS: return {
      ...state,
      entities: state.entities.filter(item => item.id !== payload.id)
    }
  }

  return state
}

export default ImageTooltipReducer