import { useEffect, useState } from "react"
import { getDistributors, getRetailerStock } from "../ApiManager.js"
import { Distributor } from "./distributor.js"
import "./distributorList.css"

export const DistributorList = () => {

    const [distributors, setDistributors] = useState([])
    const [retailerStock, setRetailerStock] = useState([])

    useEffect(
        () => {
            getDistributors()
            .then((responseArray) => {
                setDistributors(responseArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            getRetailerStock()
            .then((responseArray) => {
                setRetailerStock(responseArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )


    return <>
    <h2>List of Distributors</h2>
    <article className="distributors">

    {
        
        distributors.map(distributor => {

            //LOOP THROUGH DISTRIBUTORSTOCK TO GRAB NAMES OF ALL DISTRIBUTORS USING THAT NURSERY
            const retailersArray = retailerStock.map(object => {
            //ONLY GRAB retailerS THAT MATCH DISTRIBUTOR ID
            if(object.distributorId === distributor.id){
            //RETURN THE NAME OF EACH retailer
            return object.retailer.name
            }
            //GET RID OF UNDEFINED RETURNS
            }).filter(x => {return x !== undefined})

            //BUILD HTML FOR EACH distributor IN distributorS   
            return <Distributor id={distributor.id}
                            name={distributor.name}
                            // flowers={flowersArray}
                            retailers={retailersArray}
            />

                })
    }

    </article>
    </>
}