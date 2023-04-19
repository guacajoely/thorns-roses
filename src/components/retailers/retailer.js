import { useEffect, useState } from "react"
import { createPurchase, getCustomers } from "../ApiManager.js"

export const Retailer = ({ name, address, distributors, nurseries, flowers, retailerId}) => {

    const [customers, setCustomers] = useState([])

    const localUser = localStorage.getItem("current_user")
    const userObject = JSON.parse(localUser)

    useEffect(() => {getCustomers()
        .then((responseArray) => {
            setCustomers(responseArray)
        })
    }, 
    [] )

    //find the customer object for the current user
    const userCustomer = customers.find(customer => customer.id === userObject.id)
    console.log(userCustomer)

    return <section className="retailer">
                <header>{name}</header>
                <div className="address">{address}</div>
                <ul className="retailer--flowers">Flowers</ul>
                {flowers.map(flower => {
                    return <li className="retailer--flower" key={flowers.indexOf(flower)}> 
                        {flower.color.charAt(0).toUpperCase() + flower.color.slice(1)}
                        {" "}
                        {flower.species.charAt(0).toUpperCase() + flower.species.slice(1)}s
                        ${flower.price.toFixed(2)}
                        <button className="purchase--button" onClick={() => {
                    
                            createPurchase(userCustomer.id, retailerId, flower.id)

                        }}>Purchase</button>
                    </li>
                })}
                <ul className="retailer--distributors">Distributors</ul>
                {distributors.map(distributor => {
                    return <li className="retailer--distributor" key={distributors.indexOf(distributor)}> {distributor.name}</li>
                })}
                <ul className="retailer--nurseries">Nurseries</ul>
                {nurseries.map(nursery => {
                    return <li className="retailer--nursery" key={nurseries.indexOf(nursery)}> {nursery.name}</li>
                })}
            </section>

}