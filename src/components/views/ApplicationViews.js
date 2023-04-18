import { Outlet, Route, Routes } from "react-router-dom"
import { NurseryList } from "../nurseries/nurseryList.js"

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

                <Route path="/nurseries" element={ <NurseryList/> } />
                <Route path="/distributors" element={ <></> } />
                <Route path="/retailers" element={ <></> } />

            </Route>
        </Routes>
    )
}