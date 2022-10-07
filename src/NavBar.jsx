import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Blog from "./pages/Blog";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

export function NavBar() {
    return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<NoPage />} />
            <Route path="login" element={<Login />} />
        </Route>
        </Routes>
    </BrowserRouter>
    );
}
