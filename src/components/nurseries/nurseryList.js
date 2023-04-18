import { useEffect, useState } from "react"
import { getNurseries } from "../ApiManager.js"
import { Nursery } from "./nursery.js"

export const NurseryList = () => {

    const [nurseries, setNurseries] = useState([])

    useEffect(
        () => {
            getNurseries()
            .then((responseArray) => {
                setNurseries(responseArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    return <>
    <h2>List of Nurseries</h2>
    <article className="nurseries">

    {nurseries.map(nursery => <Nursery id={nursery.id} 
                                        name={nursery.name} 
                                        />)

            }

    </article>
    </>
}