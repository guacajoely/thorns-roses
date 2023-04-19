import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {

    const navigate = useNavigate()

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
                <Link className="navbar__link" to="/cart">My Cart</Link>
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