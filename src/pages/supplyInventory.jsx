import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
    }, [])

    return(
        <div>
            <h1>Supply</h1>
            <div className='supplies'>
                {supply.map((supp) => {
                    return(
                        <div className='supp' key={supp.supplyID}>
                            <h2> {supp.supply_name}</h2>
                            <h2> {supp.supply_quantity}</h2>
                        </div>
                    )
                })}
            </div>
        <button>
            <Link to = "/Add">Add Supply</Link>
        </button>
        <button>
            <Link to = "/Update">Update Supply</Link>
        </button>
        </div>
    )
}

export default Supply
