import React  from 'react';
import { useNavigate } from 'react-router-dom';
import './tollForm.css'
import { useDispatch } from "react-redux";
import {createToll } from "../../actions/tollAction";
import { Header } from '../Header/Header';
const TollForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const vehicleType = [
        'Car/jeep/van', 'lcv', 'Truck/Bus', 'Heavy van'
    ]
    const [state, setState] = React.useState({
        tollName: "",
        vehicleType1: "",
        singleJ1: '',
        returnJ1: '',
        vehicleType2: "",
        singleJ2: '',
        returnJ2: '',
        vehicleType3: "",
        singleJ3: '',
        returnJ3: '',
        vehicleType4: "",
        singleJ4: '',
        returnJ4: ''
    })
    const handleChange = (e)=>{
        e.preventDefault();
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }
    const handleClick= (e)=>{
        e.preventDefault();
        if(state.returnJ1==='' || state.returnJ2 ==='' || state.returnJ3==="" || state.returnJ4==='' || state.singleJ1==='' || state.singleJ2==='' || state.singleJ3===""
          || state.singleJ4==='' || state.tollName===""  || state.vehicleType1==="" || state.vehicleType2==="" || state.vehicleType3==="" || state.vehicleType4===""){
            alert('All Fields are required !')
        }else{
            dispatch(createToll(state));
            alert('Tolls Added !')
            navigate('/tolls')
        }
      
    }
    return (
        <React.Fragment>
           <Header type="toll"/>
        <div className='toll_form'>
            <h1>
                Add new toll
            </h1>
            <form>
                <div className='tollName'>
                    <div className='label'><label>Toll Name</label> <span > * </span></div>
                    <input type="text" name="tollName" placeholder='Enter toll name' onChange={handleChange} required />
                </div>
                <div className='label'><label>Vehicle Fare Detail</label><span > * </span></div> 
                <div className='fare_details' style={{marginTop:-20}}>
                    <div>
                        <select name="vehicleType1" onChange={handleChange} required>
                        <option>Select Vehicle Type</option>
                            {vehicleType && vehicleType.map((item) => {
                                return <option value={item}>{item}</option>
                            })
                            }
                        </select>
                    </div>
                    <div>
                        <input type="text" name="singleJ1" placeholder="Single Journey" onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="text" name='returnJ1' placeholder="Return Journey" onChange={handleChange} required />
                    </div>
                </div>

                <div className='fare_details'>
                    <div>
                        <select name="vehicleType2" onChange={handleChange} required >
                        <option>Select Vehicle Type</option>
                            {vehicleType && vehicleType.map((item) => {
                                return <option value={item}>{item}</option>
                            })
                            }
                        </select>
                    </div>
                    <div>
                        <input type="text" name='singleJ2'  placeholder="Single Journey" onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="text"  name = 'returnJ2' placeholder="Return Journey"  onChange={handleChange} required />
                    </div>
                </div>

                <div className='fare_details'>
                    <div>
                        <select name="vehicleType3" onChange={handleChange} required >
                        <option>Select Vehicle Type</option>
                            {vehicleType && vehicleType.map((item) => {
                                return <option value={item}>{item}</option>
                            })
                            }
                        </select>
                    </div>
                    <div>
                        <input type="text" name='singleJ3' placeholder="Single Journey"  onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="text" name="returnJ3" placeholder="Return Journey"  onChange={handleChange} required />
                    </div>
                </div>

                <div className='fare_details'>
                    <div>
                        <select name="vehicleType4" onChange={handleChange} required>
                        <option>Select Vehicle Type</option>
                            {vehicleType && vehicleType.map((item) => {
                                return <option value={item}>{item}</option>
                            })
                            }
                        </select>
                    </div>
                    <div>
                        <input type="text" name='singleJ4' placeholder="Single Journey"  onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="text" name="returnJ4" placeholder="Return Journey"  onChange={handleChange} required />
                    </div>
                </div>


                <div className='btn'>
                    <button onClick={handleClick}>Add Details</button>
                </div>
            </form>
        </div>
        </React.Fragment>
    )
}
export { TollForm }
