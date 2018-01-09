import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import TooltipedImage from "../modules/TooltipedImage"

export default combineReducers({
  form: reduxFormReducer,
  [TooltipedImage.constants.NAME]: TooltipedImage.reducer,
});

