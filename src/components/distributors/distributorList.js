import { useEffect, useState } from "react"
import { getDistributorStock, getDistributors, getNurseryStock, getRetailerStock } from "../ApiManager.js"
import { Distributor } from "./distributor.js"
import "./distributorList.css"

export const DistributorList = () => {

    const [distributors, setDistributors] = useState([])
    const [retailerStock, setRetailerStock] = useState([])
    const [nurseryStock, setNurseryStock] = useState([])
    const [distributorStock, setDistributorStock] = useState([])

    useEffect(() => {getDistributors()
            .then((responseArray) => {
                setDistributors(responseArray)
            })
        }, [] )

    useEffect(() => {getRetailerStock()
            .then((responseArray) => {
                setRetailerStock(responseArray)
            })
        }, [] )

    useEffect(() => {getNurseryStock()
            .then((responseArray) => {
                setNurseryStock(responseArray)
            })
        }, [] )

    useEffect(() => {getDistributorStock()
            .then((responseArray) => {
                setDistributorStock(responseArray)
            })
        }, [] )


    return <>
    <h2>List of Distributors</h2>
    <article className="distributors">

    {
        
        distributors.map(distributor => {

            //LOOP THROUGH DISTRIBUTORSTOCK TO GRAB THE MATCHING NURSERIES
            const matchingNurseryArray = distributorStock.map(object => {
                //ONLY GRAB NURSERIESTHAT MATCH DISTRIBUTOR ID
                if(object.distributorId === distributor.id){
                    //MAKE A NEW "FLOWER" OBJECT THAT WE'RE GOING TO PASS TO NURSERY.JS
                    return {
                        id: object.id,
                    }
                }
                //GET RID OF UNDEFINED RETURNS
            }).filter(x => {return x !== undefined})

            const flowersArray = matchingNurseryArray.map(nursery => {

                //LOOP THROUGH NURSERYSTOCK TO GRAB FLOWERS
                 const newFlowerArray = nurseryStock.map(object => {
                    //ONLY GRAB FLOWERS THAT MATCH NURSERY ID
                    if(object.nurseryId === nursery.id){
                        //MAKE A NEW "FLOWER" OBJECT THAT WE'RE GOING TO PASS TO NURSERY.JS
                        return {
                            id: object.id,
                            color : object.flower.color,
                            species: object.flower.species,
                            price : object.price * distributor.markupPer
                        }
                    }
                    //GET RID OF UNDEFINED RETURNS
                }).filter(x => {return x !== undefined})

                return newFlowerArray
            })

            //flatten the array before passing it into the function that creates html
            const flattenedFlowerArray = [].concat(...flowersArray);


            //LOOP THROUGH RETAILERSTOCK TO GRAB NAMES OF ALL DISTRIBUTORS USING THAT NURSERY
            const retailersArray = retailerStock.map(object => {
            //ONLY GRAB retailerS THAT MATCH DISTRIBUTOR ID
            if(object.distributorId === distributor.id){
            //RETURN THE NAME OF EACH retailer
            return object.retailer.name
            }
            //GET RID OF UNDEFINED RETURNS
            }).filter(x => {return x !== undefined})

            //BUILD HTML FOR EACH distributor IN distributors   
            return <Distributor key={distributor.id}
                            name={distributor.name}
                            flowers={flattenedFlowerArray}
                            retailers={retailersArray}
            />

                })
    }

    </article>
    </>
}