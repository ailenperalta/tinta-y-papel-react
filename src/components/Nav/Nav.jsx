import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import "./Nav.css";

export const Nav = () => {
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();

    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/carrito"} className="cart-link">
                        <span className="cart-icon">
                            <HiOutlineShoppingCart />
                            {totalItems > 0 && (
                                <span className="incart">{totalItems}</span>
                            )}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}