import { useEffect, useState } from "react"
import { getDistributors } from "../ApiManager.js"
import { Distributor } from "./distributor.js"

export const DistributorList = () => {

    const [distributors, setDistributors] = useState([])

    useEffect(
        () => {
            getDistributors()
            .then((responseArray) => {
                setDistributors(responseArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )


    return <>
    <h2>List of Distributors</h2>
    <article className="distributors">

    {
        
        distributors.map(distributor => {

            //BUILD HTML FOR EACH distributor IN distributorS   
            return <Distributor id={distributor.id}
                            name={distributor.name}
                            // flowers={flowersArray}
                            // retailers={retailersArray}
            />

                })
    }

    </article>
    </>
}