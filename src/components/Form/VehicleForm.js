import React , {useEffect} from 'react';
import './vehicleForm.css'
import { useSelector, useDispatch } from "react-redux";
import {createVehicle } from "../../actions/vehicleAction";
import {getTolls} from '../../actions/tollAction'
import { Header } from '../Header/Header';
import { useNavigate } from 'react-router-dom';
const VehicleForm = ({ setIsOpen }) => {
    const vehicleType = [
        'Car/jeep/van', 'lcv', 'Truck/Bus', 'Heavy van'
    ]
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(getTolls());
    }, [])
    const { loading, tolls } = useSelector((state) => state.tolls);
    console.log(loading , tolls)
    const [state, setState] = React.useState({
        tollName: "",
        vehicleType: "",
        vehicleNumber: '',
        tarrif: ''
    })
    const dispatch = useDispatch();
    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }
    const handleClick = (e)=>{
        e.preventDefault()
        console.log(state)
        if(state.tollName==='' || state.vehicleType==='' || state.vehicleNumber==='' || state.tarrif===''){
            alert('All fields are required !')
        }else{
            dispatch(createVehicle(state));
            alert('Vehicle added !')
            navigate('/')  
        } 
    }
    return (
        <React.Fragment>
            <Header type="vehicle"/>
        <div className='vehicle_form'>
            <h1>
                Add new enrtry
            </h1>
            <form>
                <div className='vehicleName'>
                    <div className='label'><label>Select toll name</label> <span > * </span></div>
                    <div className='fare_details' >
                        <select name="tollName" onChange={handleChange} required={true}>
                            <option>Select toll name</option>
                            {!loading && tolls &&  tolls.map((item) => {
                                return <option value={item.tollName}>{item.tollName}</option>
                            })
                            }
                        </select>
                    </div>
                </div>
                <div className='label'><label>Select vehicle type</label><span > * </span></div>
                <div className='fare_details'>
                    <select name="vehicleType" onChange={handleChange} required={true}>
                        <option>Select vehicle type</option>
                        {vehicleType && vehicleType.map((item) => {
                            return <option value={item}>{item}</option>
                        })
                        }
                    </select>
                </div>
                <div className='label'><label>Vehicle number</label> <span > * </span></div>
                <div className='fare_details' >
                    <input type="text" name='vehicleNumber' placeholder='Enter your login id' onChange={handleChange} required={true} />
                </div>
                <div className='label'><label>Tarif</label> <span > * </span></div>

                <div className='fare_details' >
                    <input type="text" name='tarrif' placeholder='Enter tarif amount' onChange={handleChange}  required={true}/>
                </div>
                <div className='btn'>
                    <button onClick={handleClick}>Add Entry</button>
                </div>
            </form>
        </div>
        </React.Fragment>
    )
}
export { VehicleForm }

