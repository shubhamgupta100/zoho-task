import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './index.css'
import { deleteVehicle, getVehicles } from '../../actions/vehicleAction';
import { deleteToll } from '../../actions/tollAction';
const Table = ({ data, type }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        if (type === 'vehicle') {
            dispatch(deleteVehicle(e.target.value));
            alert('Vehicle deleted successfully !');
            dispatch(getVehicles())
            navigate('/')
        }
        if (type === 'tolls') {
            dispatch(deleteToll(e.target.value));
            alert('Toll deleted successfully !');
            navigate('/')
        }
    }
    return (
        <div>
            <table id="table-data">
                {
                    type === 'vehicle' && <React.Fragment>
                        <thead>
                            <th>VEHICLE TYPE</th>
                            <th>VEHICLE NUMBER</th>
                            <th>DATE/TIME</th>
                            <th>TOLL NAME</th>
                            <th>TARIF</th>
                            <th>operation</th>
                        </thead>
                    </React.Fragment>
                }
                {
                    type === 'tolls' && <React.Fragment>
                        <thead>
                            <th>Sr No</th>
                            <th>TOLL NAME</th>
                            <th>CAR/JEEP/VAN</th>
                            <th>LCV</th>
                            <th>TRUCK/BUS</th>
                            <th>HEAVY VEHICLE</th>
                            <th>Operation</th>
                        </thead>
                    </React.Fragment>
                }
                {
                    data && data.length > 0 ? <React.Fragment>
                        <tbody>
                            {
                                type === 'vehicle' && data && data.map((item) => {
                                    return <tr>
                                        <td>{item.vehicleType}</td>
                                        <td>{item.vehicleNumber}</td>
                                        <td>{item.date}</td>
                                        <td>{item.tollName}</td>
                                        <td>{item.tarrif}</td>
                                        <td><button value={item.id} onClick={handleClick}> Delete</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                        <tbody>
                            {
                                type === 'tolls' && data && data.map((item) => {
                                    return <tr>
                                        <td>{item.id}</td>
                                        <td>{item.tollName}</td>
                                        <td>{item.fairDetail[0]['Car/jeep/van'].single} / {item.fairDetail[0]['Car/jeep/van'].return}</td>
                                        <td>{item.fairDetail[0]['lcv'].single} / {item.fairDetail[0]['lcv'].return}</td>
                                        <td>{item.fairDetail[0]['Truck/Bus'].single} / {item.fairDetail[0]['Truck/Bus'].return}</td>
                                        <td>{item.fairDetail[0]['Heavy van'].single} / {item.fairDetail[0]['Heavy van'].return}</td>
                                        <td><button value={item.id} onClick={handleClick}> Delete</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </React.Fragment> : <h1 className='heading'>No Data</h1>
                }

            </table>
        </div>
    )
}
export { Table }
