import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../routes/home/Home";
import Favourite from "../routes/favorites/Favorites";
import Cart from "../routes/cart/Cart";
import NotFound from "../routes/not-found/NotFound";

const RouteController = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
         </Routes>
      </>
   );
};

export default RouteController;
