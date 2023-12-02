import React, { useEffect, useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Update() {

    //const {suppID} = useParams()
    const location = useLocation();
    const suppID = location.pathname.split("/")[2]
    const navigate = useNavigate();
    
    //const [currentItem, setCurrentItem] = useState([])

    const [values, setValue] = useState({
        sName: "",
        sQuantity: null,
        sType: "",
        sPrice: null,
    })

    /*const handleChange = (e) => {
        setValue((prev)=>({...prev, [e.target.name]: e.target.value}));
    }*/

    const fetchSpecificData = useCallback(async () => {
        const url = 'http://localhost:8800/supply_inventory_table/read/' + suppID;
        axios.get(url).then((res) => {
            //console.log(res)
            //setCurrentItem(res.data)
            setValue({...values, sName: res.data[0].supply_name, sQuantity: res.data[0].supply_quantity,
                sType: res.data[0].supply_type, sPrice: res.data[0].supply_price})
        })
        
    }, [values, suppID]);

    useEffect(() => {
        fetchSpecificData();
    }, [])

    //let text = currentItem.map((element) => {return element.supply_name})
    console.log("hehe")
    console.log(values.sName)

    const handleClick = async e=>{
        e.preventDefault()
        
        axios.put("http://localhost:8800/supply_inventory_table/update/" + suppID, values)
        .then(res => {
            //console.log(currentItem)
            navigate("/")
        }).catch(err => console.log(err));
    }

    return (
        <div>
            <div>
                <form>
                    <div>
                        <h1>Add Item</h1>
                        <div>
                            <input type='text' name='sName' value={values.sName} onChange={e => setValue({...values, sName: e.target.value})}/>
                        </div>
                        <div>
                            <input type='text' name='sQuantity' value={values.sQuantity} onChange={e => setValue({...values, sQuantity: e.target.value})}/>
                        </div>
                        <div>
                            <input type='text' name='sType' value={values.sType} onChange={e => setValue({...values, sType: e.target.value})}/>
                        </div>
                        <div>
                            <input type='text' name='sPrice' value={values.sPrice} onChange={e => setValue({...values, sPrice: e.target.value})}/>
                        </div>

                        <button onClick={handleClick}>Apply</button>
                        <button><Link to="/">Cancel</Link></button>
                            
                    </div>
                </form> 
            </div>
            
        </div>
        
    )
}

export default Update