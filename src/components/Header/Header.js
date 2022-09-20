import React, { useEffect, useState } from 'react';
import { TollForm } from '../Form/TollForm';
import { VehicleForm } from '../Form/VehicleForm';
import { useNavigate } from 'react-router-dom';
import { getVehicles } from '../../actions/vehicleAction';
import { getTolls } from '../../actions/tollAction';
import './header.css'
import { useDispatch, useSelector } from 'react-redux';

const Header = ({ type }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenToll  , setIsOpenToll] = useState(false);
    const dispatch = useDispatch();
    const [search , setSearch] = useState('');
    const [show , setShow] = useState(false);
    const {tolls} = useSelector((state)=>state.tolls)
    const navigate = useNavigate()
    const handleClick = (type)=>{
        if(type==='vehicle'){
            navigate('/')
        }
        if(type==='tolls'){
            navigate('/tolls')
        }
    }
    const handleChange = (e) =>{
        setSearch(e.target.value);
    }
    const handleKeyDown = event => {
        if (event.key === 'Enter') {
         dispatch(getVehicles(search));
         navigate('/')
        }
      };
    const handleChangeFilter = (e)=>{   
        const value = e.target.value
        dispatch(getVehicles("" , value))
    }
    const handleFilterClick = (e) =>{
        e.preventDefault();
        setShow(!show);
    }
      useEffect(()=>{
        dispatch((getTolls()))
      },[])
    return (
        <>
            <h2>
                Toll Managment Application
            </h2>
            {
                type === 'toll' && <React.Fragment><div className='vehicle_main'>
                    <div className='left'>
                        <div>
                            <h1>Tollgate List</h1>
                        </div>
                    </div>
                    <div className='right'>
                        <div>
                            <button onClick={() => navigate('/add-vehicle')}>Add Vehicle Entry</button>
                        </div>
                        <div>
                            <button onClick={() => navigate('/add-tolls')}>Add new toll</button>
                        </div>
                        <div >
                            <button onClick={()=>handleClick('vehicle')}>Back to vehicle logs</button>
                        </div>
                    </div>
                </div>
                    {isOpen && <TollForm setIsOpen={setIsOpen} />}
                </React.Fragment>
            }

            {
                type === 'vehicle' && <React.Fragment>
                    <div  className='vehicle_main'>
                        <div className='left'>
                            <div>
                                <h1>Toll Entries/Vehicle Entries</h1>
                            </div>
                            <div>
                                <p>
                                    <i className="fa fa-filter" style={{ fontSize: 20 }} onClick={handleFilterClick}></i>
                                </p>
                                <div className={show ? 'show-dropdown' : 'hide-dropdown'}>
                                <select name='tollName' onChange={handleChangeFilter}>
                                    <option>Select Toll Name</option>
                                     {
                                       tolls &&  tolls.map((toll)=>{
                                            return <option value={toll.tollName} >{toll.tollName}</option>
                                        })
                                     }
                                </select>
                                </div>
                            </div>
                            <div>
                                <input type={'search'} results={5} name="search" onChange={handleChange}  onKeyDown={handleKeyDown}/>
                            </div>
                        </div>
                        <div className='right'>
                            <div onClick={() =>navigate('/add-vehicle')}>
                                <button>Add Vehicle Entry</button>
                            </div>
                            <div>
                                <button onClick={() => navigate('/add-tolls')}>Add new toll</button>
                            </div>
                            <div>
                                <button onClick = {()=>handleClick('tolls')}>View all tolls</button>
                            </div>
                        </div>
                    </div>
                    {isOpen && <VehicleForm setIsOpen={setIsOpen} />}
                    {isOpenToll && <TollForm setIsOpen={setIsOpenToll} />}
                </React.Fragment>
            }

        </>
    )
}

export { Header };
