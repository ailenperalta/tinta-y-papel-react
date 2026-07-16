import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import "./Cart.css";

export const CartView = () => {
    const { cart } = useCart();

    return (
        <section className="cart-container">
            <h1>Tu carrito</h1>

            {cart.length ? (
                <div className="cart-content">
                    <CartList />

                    <div className="cart-sidebar">
                        <CartSummary />

                        <Link
                            to="/"
                            className="continue-shopping"
                        >
                            <HiOutlineArrowLeft />
                            Seguir comprando
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="empty-cart-container">
                    <p className="empty-cart">Tu carrito está vacío</p>

                    <Link className="cart-btn" to="/">
                        Volver a la tienda
                    </Link>
                </div>
            )}
        </section>
    );
};