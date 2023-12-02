import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Add = () => {
    const [supply, setSupply] = useState({
        supply_name:"",
        supply_quantity:"",
        supply_type:"",
        supply_price:null,
    })

const navigate = useNavigate();

const handleChange = (e) => {
    setSupply((prev)=>({...prev, [e.target.name]: e.target.value}));
}

const handleClick = async e=>{
    e.preventDefault()
    try{
        await axios.post("http://localhost:8800/supply_inventory_table",supply)
        navigate("/")
    }catch(err) {
        console.log(err)
    }
}



    return(
        <div className='form'>
            <h1>Add new item</h1>
            <input type="text" name="supply_name" placeholder='Supply Name' onChange={handleChange} />
            <input type="text" name="supply_quantity" placeholder='Quantity' onChange={handleChange} />
            <input type="text" name="supply_type" placeholder='Supply Type' onChange={handleChange}/>
            <input type="text" name="supply_price" placeholder='Price'onChange={handleChange} />

            <button onClick={handleClick}>
                Apply
            </button>
        </div>
    )
}

export default Add