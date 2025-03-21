import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import PopularPage from "../pages/PopularPage";
import CartPage from "../pages/CartPage";
import FavoritesPage from "../pages/FavoritesPage";
import SalePage from "../pages/SalePage";
import LoginForm from "../components/LoginForm";


function AppRoutes(props) {
    return (
        <Routes>
            <Route index element = {<HomePage {...props} />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="login" element={<LoginForm/>} />
            <Route path="/SalePage" element={<SalePage />} />
            <Route path="/PopularPage" element={<PopularPage />} /> 
            <Route path="/CartPage" element={<CartPage  />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes