import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import {
    HiOutlineArrowLeft,
    HiOutlineCreditCard,
    HiOutlineTrash
} from "react-icons/hi2";

export const CartSummary = () => {
    const { getTotalPrice, checkout, clearCart } = useCart();

    const total = getTotalPrice();

    const handleClearCart = () => {
        const confirmDelete = window.confirm(
            "¿Seguro que querés vaciar el carrito?"
        );

        if (confirmDelete) {
            clearCart();
        }
    };

    return (
        <aside className="cart-summary">
            <h2>Resúmen de compra</h2>

            <div className="summary-row">
                <span>Total</span>
                <strong>${total}</strong>
            </div>

            <div className="summary-actions">
                <button
                    className="summary-btn-primary"
                    onClick={checkout}
                >
                    <HiOutlineCreditCard />
                    Finalizar compra
                </button>

                <button
                    className="summary-btn-del"
                    onClick={handleClearCart}
                >
                    <HiOutlineTrash />
                    Vaciar carrito
                </button>
            </div>
        </aside>
    );
};