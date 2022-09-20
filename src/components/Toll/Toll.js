import React, {
    useEffect
    // , useState
} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getTolls } from "../../actions/tollAction";
import { Header } from '../Header/Header';
import { Table } from '../Table';
const Tolls = () => {
    const dispatch = useDispatch();
    const { loading, tolls } = useSelector((state) => state.tolls);
    useEffect(() => {
        dispatch(getTolls());
    }, [dispatch]);
    return (
        <>
            <Header type='toll' />
            {!loading && <Table data={tolls} type="tolls" />}
        </>

    )
}
export { Tolls }
