import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Developers } from "../pages";
import { DevId } from "../pages/devId/DevId";
import Home from "../pages/home/Home";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/developers/:id" element={<DevId />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute