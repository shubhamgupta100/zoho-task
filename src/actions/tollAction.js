import {
    ALL_TOLL_REQUEST,
    ALL_TOLL_SUCCESS,
    ALL_TOLL_FAIL,
    NEW_TOLL_REQUEST,
    NEW_TOLL_SUCCESS,
    NEW_TOLL_FAIL,
    DELETE_TOLL_REQUEST,
    DELETE_TOLL_SUCCESS,
    DELETE_TOLL_FAIL,
} from "./actionType";

// Get All TOLL
export const getTolls = () =>
    async (dispatch) => {
        try {
            dispatch({ type: ALL_TOLL_REQUEST });
            let tolls =  JSON.parse(localStorage.getItem('tolls'));
            dispatch({
                type: ALL_TOLL_SUCCESS,
                payload: tolls,
            });
        } catch (error) {
            dispatch({
                type: ALL_TOLL_FAIL,
                payload: error,
            });
        }
    };

// Create TOLL
export const createToll = (tollData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_TOLL_REQUEST });
        let localData = [];
        let tolls =  JSON.parse(localStorage.getItem('tolls'));
        if(tolls){
            tolls.sort((itemA , itemB) => {
                return itemB.id - itemA.id
            })
            localData = [...tolls];
            localData.push({
                id:tolls[0].id +1,
                tollName:tollData.tollName,
                fairDetail:[{
                    [tollData.vehicleType1]: {single:`${tollData.singleJ1}` ,return:`${tollData.returnJ1}`} ,
                    [tollData.vehicleType2]:{single:`${tollData.singleJ2}` ,return:`${tollData.returnJ2}`},
                    [tollData.vehicleType3]:{single:`${tollData.singleJ3}` ,return:`${tollData.returnJ3}`},
                    [tollData.vehicleType4]:{single:`${tollData.singleJ4}` ,return:`${tollData.returnJ4}`},
                }]
            })
            localStorage.setItem('tolls', JSON.stringify(localData));
        }else{
            localData.push({
                id:1,
                tollName:tollData.tollName,
                fairDetail:[{
                   [tollData.vehicleType1]: {single:`${tollData.singleJ1}` ,return:`${tollData.returnJ1}`} ,
                   [tollData.vehicleType2]:{single:`${tollData.singleJ2}` ,return:`${tollData.returnJ2}`},
                   [tollData.vehicleType3]:{single:`${tollData.singleJ3}` ,return:`${tollData.returnJ3}`},
                   [tollData.vehicleType4]:{single:`${tollData.singleJ4}` ,return:`${tollData.returnJ4}`},
                }]
            })
            localStorage.setItem('tolls', JSON.stringify(localData));
        }
        dispatch({
            type: NEW_TOLL_SUCCESS,
            payload: true,
        });
    } catch (error) {
        console.log(error)
        dispatch({
            type: NEW_TOLL_FAIL,
            payload: error,
        });
    }
};


// Delete TOLLs
export const deleteToll = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_TOLL_REQUEST });

        const tolls = JSON.parse(localStorage.getItem('tolls'));
        if(tolls.length===1){
            localStorage.removeItem('tolls')
        }else{
            const index = tolls.findIndex((item)=>item.id ===id);
            tolls.splice(index, 1);        
            localStorage.setItem('tolls' , JSON.stringify(tolls))
        }
        dispatch({
            type: DELETE_TOLL_SUCCESS,
            payload: true,
        });
    } catch (error) {
        dispatch({
            type: DELETE_TOLL_FAIL,
            payload: error
        });
    }
};
