import { BsCart3 } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import logo from "../../images/logo.png";

import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

const header = () => {
  const cartLength = useSelector((state) => state.cart.cart);

  return (
    <nav className="py-6">
      <div className="flex items-center justify-between w-full gap-6">
        <NavLink to="/" className="flex flex-1">
          <img width={150} src={logo} alt="" />
        </NavLink>
        <NavLink to="/favourite" className="relative">
          <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            
          </div>
          <AiFillHeart size={30} />
        </NavLink>
        <NavLink to="/cart" className="relative">
          <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            {
              cartLength.length ? <p>{cartLength.length}</p> : "0"
            }
          </div>
          <BsCart3 size={25} />
        </NavLink>
      </div>
    </nav>
  );
};

export default header;
