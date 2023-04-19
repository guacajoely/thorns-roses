import { Outlet, Route, Routes } from "react-router-dom"
import { NurseryList } from "../nurseries/nurseryList.js"
import { DistributorList } from "../distributors/distributorList.js"
import { RetailerList } from "../retailers/retailerList.js"
import { HomePage } from "../homepage/home.js"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                <header className="header">
                        <img className="title--icon" src={require("../../images/icon.png")} alt="rose"/>
                        <div>
                            <h1 className="title--name">Thorns and Roses</h1>
                            <div>THE one-stop-shop to meet all your flower needs</div>
                        </div>
                </header>

                    <Outlet/>
                </>
            }>

                <Route path="/home" element={ <HomePage/> } />
                <Route path="/nurseries" element={ <NurseryList /> } />
                <Route path="/distributors" element={ <DistributorList /> } />
                <Route path="/retailers" element={ <RetailerList /> } />
                <Route path="/cart" element={ <> <div style={{
                                                                "font-size": "30px", 
                                                                "font-weight": "bold", 
                                                                "margin-left": "20px"
                                                            }}> CART GO HERE </div> </> } />

            </Route>
        </Routes>
    )
}