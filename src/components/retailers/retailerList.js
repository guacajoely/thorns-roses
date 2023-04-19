import { useEffect, useState } from "react"
import "./retailerList.css"
import { getRetailerStock, getRetailers } from "../ApiManager.js"
import { Retailer } from "./retailer.js"

export const RetailerList = () => {

    const [retailers, setRetailers] = useState([])
    const [retailerStock, setRetailerStock] = useState([])

    useEffect(() => {getRetailers()
            .then((responseArray) => {
                setRetailers(responseArray)
            })
        }, [] )

        useEffect(() => {getRetailerStock()
            .then((responseArray) => {
                setRetailerStock(responseArray)
            })
        }, [] )


    return <div className="retailers__container">
    <h2>List of Retailers</h2>
    <article className="retailers">

    {
        
        retailers.map(retailer => {

            //LOOP THROUGH retailerSTOCK TO GRAB NAMES OF ALL DISTRIBUTORS SUPPLYING THE RETAILER
            const distributorsArray = retailerStock.map(object => {
            //ONLY GRAB distributorS THAT MATCH retailer ID
            if(object.retailerId === retailer.id){

                //RETURN THE NAME OF EACH distributor
                return object.distributor.name
                }

            //GET RID OF UNDEFINED RETURNS
            }).filter(x => {return x !== undefined})

            //BUILD HTML FOR EACH RETAILER IN RETAILERS   
            return <Retailer key={retailer.id}
                            name={retailer.name}
                            address={retailer.address}
                            // flowers={flowersArray}
                            distributors={distributorsArray}
                            // nurseries={nurseriesArray}
            />

                })
    }

    </article>
    </div>
}