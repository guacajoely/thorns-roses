import { useEffect, useState } from "react"
import "./retailerList.css"
import { getRetailers } from "../ApiManager.js"
import { Retailer } from "./retailer.js"

export const RetailerList = () => {

    const [retailers, setRetailers] = useState([])

    useEffect(() => {getRetailers()
            .then((responseArray) => {
                setRetailers(responseArray)
            })
        }, [] )


    return <div className="retailers__container">
    <h2>List of Retailers</h2>
    <article className="retailers">

    {
        
        retailers.map(retailer => {

            //BUILD HTML FOR EACH RETAILER IN RETAILERS   
            return <Retailer id={retailer.id}
                            name={retailer.name}
                            address={retailer.address}
                            // flowers={flowersArray}
                            // distributors={distributorsArray}
                            // nurseries={nurseriesArray}
            />

                })
    }

    </article>
    </div>
}