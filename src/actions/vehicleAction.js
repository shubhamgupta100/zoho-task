import {
    ALL_VEHICLE_REQUEST,
    ALL_VEHICLE_SUCCESS,
    ALL_VEHICLE_FAIL,
    NEW_VEHICLE_REQUEST,
    NEW_VEHICLE_SUCCESS,
    NEW_VEHICLE_FAIL,
    DELETE_VEHICLE_REQUEST,
    DELETE_VEHICLE_SUCCESS,
    DELETE_VEHICLE_FAIL,
} from "./actionType";

// Get All Vehicle
export const getVehicles = () =>
    async (dispatch) => {
        try {
            dispatch({ type: ALL_VEHICLE_REQUEST });
            let vehicles =  JSON.parse(localStorage.getItem('vehicles'));

            dispatch({
                type: ALL_VEHICLE_SUCCESS,
                payload: vehicles,
            });
        } catch (error) {
            dispatch({
                type: ALL_VEHICLE_FAIL,
                payload: error,
            });
        }
    };

// Create Vehicle
export const createVehicle = (vehicleData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_VEHICLE_REQUEST });
        const data = vehicleData;
        data.date= new Date(Date.now()).toLocaleString()
        let localData = [];
        let vehicles =  JSON.parse(localStorage.getItem('vehicles'));   
        if(vehicles){
            localData = [...vehicles];
            data.id = vehicles[0].id+1
            localData.push(data);
            localStorage.setItem('vehicles', JSON.stringify(localData));
        }else{
            data.date = new Date(Date.now()).toLocaleString()
            data.id =1;
            localData.push(data)
            localStorage.setItem('vehicles', JSON.stringify(localData));
        }
        dispatch({
            type: NEW_VEHICLE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: NEW_VEHICLE_FAIL,
            payload: error,
        });
    }
};


// Delete Vehicles
export const deleteVehicle = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_VEHICLE_REQUEST });
        const vehicles = JSON.parse(localStorage.getItem('vehicles'));
        if(vehicles.length ===1){
            localStorage.removeItem('vehicles')
        }else{
            const index = vehicles.findIndex((item) =>item.id ===id );
            vehicles.splice(index, 1);
            localStorage.setItem('vehicles' , JSON.stringify(vehicles))
        }
      
        dispatch({
            type: DELETE_VEHICLE_SUCCESS,
            payload: true,
        });
    } catch (error) {
        dispatch({
            type: DELETE_VEHICLE_FAIL,
            payload: error
        });
    }
};
