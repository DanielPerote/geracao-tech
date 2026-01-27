import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Sobre from "../pages/Sobre";
import NoteFound from "../pages/NoteFound";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />}/>
                        <Route path="/produtos" element={<Produtos />}/>
                        <Route path="/sobre" element={<Sobre />}/>
                    </Route>
                    <Route path="*" element={<NoteFound />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;