import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./login.css"

export const Register = (props) => {

    const [customer, setCustomer] = useState({
        email: "",
        password: "",
        fullName: "",
        businessName: ""
    })

    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("current_user", JSON.stringify({
                        id: createdUser.id
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/customers?email=${customer.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateCustomer = (evt) => {
        const copy = {...customer}
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Thorns and Roses</h1>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateCustomer}
                        type="email" id="email" className="form-control"
                        placeholder="" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="password"> Password </label>
                    <input onChange={updateCustomer}
                        type="text" id="password" className="form-control"
                        placeholder="" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="fullName"> Full Name </label>
                    <input onChange={updateCustomer}
                           type="text" id="fullName" className="form-control"
                           placeholder="" required autoFocus />
                </fieldset>
               
                <fieldset>
                    <label htmlFor="businessName"> Business Name </label>
                    <input onChange={updateCustomer}
                        type="text" id="businessName" className="form-control"
                        placeholder="" required />
                </fieldset>
                
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}