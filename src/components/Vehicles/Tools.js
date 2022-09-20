import React, {
    useEffect
} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getTolls } from "../../actions/tollAction";
import { Header } from '../Header/Header';
import { Table } from '../Table';
const Vehicles = () => {
    const dispatch = useDispatch();
    const { loading, tolls } = useSelector((state) => state.tolls);
   console.log('tollssllslsls',JSON.parse(localStorage.getItem('tolls')))
    useEffect(() => {
        dispatch(getTolls());
    }, [dispatch]);
    return (
        <>
            <Header type='tolls' />
            {!loading && <Table data={tolls} type="tolls" />}
        </>

    )
}
export { Vehicles }
