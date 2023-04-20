import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { useEffect, useState } from "react"
import { getPurchases } from "../ApiManager.js"

export const NavBar = () => {

    const navigate = useNavigate()

    const [purchases, setPurchases] = useState([])

    const localUser = localStorage.getItem("current_user")
    const userObject = JSON.parse(localUser)

    useEffect(() => {
        getPurchases(userObject.id)
        .then((responseArray) => {
            setPurchases(responseArray)
        })
    }, 
    [userObject.id] )

    const cartCount=purchases.length

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/nurseries">Nurseries</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/distributors">Distributors</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/retailers">Retailers</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/cart">My Cart ({cartCount})</Link>
            </li>


            {
                localStorage.getItem("current_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("current_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }


        </ul>
    )
}