import { useEffect, useState } from "react"
import "./retailerList.css"
import { getDistributorStock, getRetailerStock, getRetailers } from "../ApiManager.js"
import { Retailer } from "./retailer.js"

export const RetailerList = () => {

    const [retailers, setRetailers] = useState([])
    const [retailerStock, setRetailerStock] = useState([])
    const [distributorStock, setDistributorStock] = useState([])

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

        useEffect(() => {getDistributorStock()
            .then((responseArray) => {
                setDistributorStock(responseArray)
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
                return object.distributor
                }

            //GET RID OF UNDEFINED RETURNS
            }).filter(x => {return x !== undefined})


            const nurseryArray = distributorsArray.map(distributor => {
                //LOOP THROUGH DISTRIBUTORSTOCK TO GRAB NAMES OF ALL THE NURSERIES USING THAT DISTRIBUTOR
                const newNurseryArray = distributorStock.map(object => {
                    //ONLY GRAB DISTRIBUTORS THAT MATCH NURSERY ID
                    if(object.distributorId === distributor.id){
                        //RETURN THE NAME OF EACH DISTRIBUTOR
                        return object.nursery
                    }
                    //GET RID OF UNDEFINED RETURNS
                }).filter(x => {return x !== undefined})

            return newNurseryArray})

            //flatten the array before passing it on
            const flattenedNurseArray = [].concat(...nurseryArray);

            console.log(flattenedNurseArray)
            

            //BUILD HTML FOR EACH RETAILER IN RETAILERS   
            return <Retailer key={retailer.id}
                            name={retailer.name}
                            address={retailer.address}
                            // flowers={flowersArray}
                            distributors={distributorsArray}
                            nurseries={flattenedNurseArray}
            />

                })
    }

    </article>
    </div>
}