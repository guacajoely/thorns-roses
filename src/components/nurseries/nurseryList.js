import { useEffect, useState } from "react"
import { getNurseries, getNurseryStock } from "../ApiManager.js"
import { Nursery } from "./nursery.js"

export const NurseryList = () => {

    const [nurseries, setNurseries] = useState([])
    const [nurseryStock, setNurseryStock] = useState([])
    const [distributors, setDistributors] = useState([])

    useEffect(
        () => {
            getNurseries()
            .then((responseArray) => {
                setNurseries(responseArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            getNurseryStock()
            .then((responseArray) => {
                setNurseryStock(responseArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

   

    console.log(nurseryStock)

    return <>
    <h2>List of Nurseries</h2>
    <article className="nurseries">

    {
        
        nurseries.map(nursery => {

            const flowersArray = nurseryStock.map(object => {
                if(object.nurseryId === nursery.id){
                    return {
                        color : object.flower.color,
                        species: object.flower.species,
                        price : object.price
                    }
                }
            }).filter(x => {return x !== undefined})

            
            console.log(flowersArray)

            return <Nursery id={nursery.id} name={nursery.name} flowers={flowersArray}/>

                })
    }

    </article>
    </>
}