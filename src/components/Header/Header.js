import React, { useState } from 'react';
import { TollForm } from '../Form/TollForm';
import { VehicleForm } from '../Form/VehicleForm';
import { useNavigate } from 'react-router-dom';
import './header.css'

const Header = ({ type }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenToll  , setIsOpenToll] = useState(false);
    const navigate = useNavigate()
    const handleClick = (type)=>{
        if(type==='vehicle'){
            navigate('/')
        }
        if(type==='tolls'){
            navigate('/tolls')
        }
    }
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
                        <div>
                            <input type={'search'} results={5} name={'s'} />
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
                                    <i class="fa fa-filter" style={{ fontSize: 20 }}></i>
                                </p>
                            </div>
                            <div>
                                <input type={'search'} results={5} name={'s'} />
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
