import { Outlet, Route, Routes } from "react-router-dom"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1 className="title--name">Thorns and Roses</h1>
                    <div>Your one stop shot for all your flower needs</div>

                    <Outlet/>
                </>
            }>

                <Route path="/nurseries" element={ <></> } />
                <Route path="/distributors" element={ <></> } />
                <Route path="/retailers" element={ <></> } />

            </Route>
        </Routes>
    )
}