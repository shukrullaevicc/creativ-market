import { BsCart3 } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import logo from "../../images/logo.png";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartLength = useSelector((state) => state.cart.cart);
  const favouriteLength = useSelector((state) => state.favorite.favorite);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 py-6 ">
      <div className="flex items-center justify-between w-full gap-6 px-8">
        <NavLink to="/" className="flex flex-1">
          <img width={150} src={logo} alt="Logo" />
        </NavLink>

        <NavLink to="/favourite" className="relative">
          <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            {favouriteLength.length ? <p>{favouriteLength.length}</p> : "0"}
          </div>
          <AiFillHeart size={30} />
        </NavLink>

        <NavLink to="/cart" className="relative">
          <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            {cartLength.length ? <p>{cartLength.length}</p> : "0"}
          </div>
          <BsCart3 size={25} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;