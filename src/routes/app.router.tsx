import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import { routes } from "./index"

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map(({ Component, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<Component />}
                        />
                    ))
                }
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute