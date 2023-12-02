import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Update from './Update'

const Supply = () => {

    const [supply, setSupply] = useState([])

    useEffect(()=>{
        const fetchAllSupply = async() => {
            try{
                const res = await axios.get("http://localhost:8800/supply_inventory_table")
                setSupply(res.data)
            }catch(err) {
                console.log(err)
            }
        };
        fetchAllSupply()
    })

    const handleDelete = async(supplyID) => {
        try{
            await axios.delete("http://localhost:8800/supply_inventory_table/" + supplyID)
            window.location.reload()
        }catch(err) {
            console.log(err)
        }
    };

    return(
        <div>
            <h1>Supply</h1>
            <div className='supplies'>
                {supply.map((supp) => {
                    return(
                        <div className='supp' key={supp.supplyID}>
                            <h2> {supp.supply_name}</h2>
                            <h2> {supp.supply_quantity}</h2>
                            <h2> {supp.supply_type}</h2>
                            <h2> {supp.supply_price}</h2>
                            <button className='delete' onClick={()=>handleDelete(supp.supplyID)}>
                                Delete
                            </button>

                            <button className='update'>
                                <Link to={`/update/${supp.supplyID}`}>Update</Link>
                            </button>

                           

                        </div>           
                    )
                })}
             
            </div>
        <button>
            <Link to = "/Add">Add Supply</Link>
        </button>



        <Update/>
        </div>
    )
}

export default Supply
