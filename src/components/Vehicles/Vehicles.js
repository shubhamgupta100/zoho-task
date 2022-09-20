import React, {
    useEffect
    // , useState
} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getVehicles } from "../../actions/vehicleAction";
import { Header } from '../Header/Header';
import { Table } from '../Table';
const Vehicles = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, vehicles } = useSelector((state) => state.vehicles);
    // window.location.reload(false);
    // navigate(0)
    useEffect(() => {
        dispatch(getVehicles());
    }, [dispatch]);
    return (
        <>
            <Header type='vehicle' />
            {!loading && <Table data={vehicles} type="vehicle" />}
        </>

    )
}
export { Vehicles }
