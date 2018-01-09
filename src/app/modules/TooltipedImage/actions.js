import * as t from "./actionTypes";
import * as fakeAPI from "./api";

export const fetchAll = () => dispatch => {
  dispatch({ type: t.FETCH_START })

  return fakeAPI
    .fetchAllItems()
    .then(items => dispatch(fetchSuccess(items)))
    .catch(err => dispatch(apiError(err)))
}

export const create = payload => dispatch => {
  return fakeAPI
    .createItem(payload)
    .then(item => dispatch(createSuccess(item)))
    .catch(err => alert(err.message))
}

export const update = payload => dispatch => {
  return fakeAPI
    .updateItem(payload)
    .then(item => dispatch(updateSuccess(item)))
    .catch(err => alert(err.message))
}

export const remove = payload => dispatch => {
  return fakeAPI
    .deleteItem(payload)
    .then(item => dispatch(removeSuccess(item)))
    .catch(err => alert(err.message))
}

const fetchSuccess = payload => ({ type: t.FETCH_SUCCESS, payload })
const createSuccess = payload => ({ type: t.CREATE_SUCCESS, payload })
const updateSuccess = payload => ({ type: t.UPDATE_SUCCESS, payload })
const removeSuccess = payload => ({ type: t.REMOVE_SUCCESS, payload })

const fetchError = payload => ({ 
  type: t.FETCH_ERROR, 
  payload: { 
    errText: payload.message 
  }
})