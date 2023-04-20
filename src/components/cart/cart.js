import { useEffect, useState } from "react"
import { getCustomers, getPurchases } from "../ApiManager.js"
import "./cart.css"

export const Cart = () => {

    //GET customer list to get the customerId from the current user
    const [customers, setCustomers] = useState([])
    const [purchases, setPurchases] = useState([])

    useEffect(() => {getCustomers()
        .then((responseArray) => {
            setCustomers(responseArray)
        })
    }, 
    [] )

    const localUser = localStorage.getItem("current_user")
    const userObject = JSON.parse(localUser)

    //find the employee object for the current user
    const userCustomer = customers.find(customer => customer.id === userObject.id)

    useEffect(() => {
        getPurchases(userCustomer?.id)
        .then((responseArray) => {
            setPurchases(responseArray)
        })
    }, 
    [userCustomer] )



    function sortPurchases(arrayOfPurchases){

        let newArray = [];

        arrayOfPurchases.forEach((purchase)=>{
             
        // Check if there are any purchases in newArray that contain the same flowerId
           if(newArray.some((object)=>{ return object["flowerId"] === purchase["flowerId"] })){
               
            // If yes! then increase the quantity by 1
                newArray.forEach((newPurchase)=>{
                    if(newPurchase["flowerId"] === purchase["flowerId"]){ 
                        newPurchase["quantity"]++
                    }
                })  
           }
           
           // If not! Then create a new purchase, set the quantity to 1, and push it to the new array
           else{
             let copy = purchase
             copy["quantity"] = 1
             newArray.push(copy);
           }
        })
          
        //return our new array when we're done
        return newArray
      }

      
      const sortedPurchases = sortPurchases(purchases)

    

    // return mapped purchases with JSX
    return <div className="cart--container">
   
        <h2>My Orders</h2>
        <table className="cart--table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>

        {sortedPurchases.map( (purchase) => {
                return <tbody className="cart--purchase" key={`purchase--${purchase?.id}`}>
                            <tr>
                                <td>{purchase.flower.color} {purchase.flower.species}</td> 
                                <td>{purchase.quantity}</td>  
                                <td>${(purchase.price * purchase.quantity).toFixed(2)}</td>
                            </tr>
                        </tbody>
            })
        }   
        </table>

    </div>
}