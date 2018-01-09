import fakeData from "./fakeData.json";

const RESPONCE_DELAY = 100;
const FAKE_FETCH_ERROR = false;
let nextItemId = fakeData.entities.length + 1;

const fakeApiCall = (resolveData, errorData) => new Promise((res, rej) => {
  setTimeout(() => { 
    if (errorData) { rej( new Error(errorData))}
    res(resolveData) 
  }, RESPONCE_DELAY)
});

const formatCreateResponce = payload => {
  console.log('for', payload, nextItemId);
  return {
    ...payload,
    id: nextItemId++
  }
}

export const fetchAllItems = () => fakeApiCall(fakeData);
export const updateItem = payload => fakeApiCall(payload);
export const deleteItem = payload => fakeApiCall(payload);
export const createItem = payload => fakeApiCall(
  formatCreateResponce(payload)
);