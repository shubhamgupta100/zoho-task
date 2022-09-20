import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  tollsReducer,
  newtollReducer,
  deleteTollReducer
} from "./reducers/tollReducer";
import {
  vehiclessReducer,
  newVehicleReducer,
  deleteVehicleReducer,
} from "./reducers/vehicleReducer";
const reducer = combineReducers({
  tolls: tollsReducer,
  newToll:newtollReducer,
  deleteToll:deleteTollReducer,
  vehicles:vehiclessReducer,
  newVehicle:newVehicleReducer,
  deleteVehicle:deleteVehicleReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
