import { useEffect, useState } from "react"
import { getDistributorStock, getNurseries, getNurseryStock } from "../ApiManager.js"
import { Nursery } from "./nursery.js"
import "./nurseryList.css"

export const NurseryList = () => {

    const [nurseries, setNurseries] = useState([])
    const [nurseryStock, setNurseryStock] = useState([])
    const [distributorStock, setDistributorStock] = useState([])

    useEffect(() => {getNurseries()
            .then((responseArray) => {
                setNurseries(responseArray)
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

    return <div className="nurseries__container">
    <h2>List of Nurseries</h2>
    <article className="nurseries">

    {
        
        nurseries.map(nursery => {

            //LOOP THROUGH NURSERYSTOCK TO GRAB FLOWERS
            const flowersArray = nurseryStock.map(object => {
                //ONLY GRAB FLOWERS THAT MATCH NURSERY ID
                if(object.nurseryId === nursery.id){
                    //MAKE A NEW "FLOWER" OBJECT THAT WE'RE GOING TO PASS TO NURSERY.JS
                    return {
                        id: object.id,
                        color : object.flower.color,
                        species: object.flower.species,
                        price : object.price
                    }
                }
                //GET RID OF UNDEFINED RETURNS
            }).filter(x => {return x !== undefined})

            //LOOP THROUGH DISTRIBUTORSTOCK TO GRAB NAMES OF ALL DISTRIBUTORS USING THAT NURSERY
            const distributorsArray = distributorStock.map(object => {
                //ONLY GRAB DISTRIBUTORS THAT MATCH NURSERY ID
                if(object.nurseryId === nursery.id){
                    //RETURN THE NAME OF EACH DISTRIBUTOR
                    return object.distributor.name
                }
                //GET RID OF UNDEFINED RETURNS
            }).filter(x => {return x !== undefined})

            //BUILD HTML FOR EACH NURSERY IN NURSERIES   
            return <Nursery key={nursery.id}
                            name={nursery.name}
                            flowers={flowersArray}
                            distributors={distributorsArray}
            />

                })
    }

    </article>
    </div>
}