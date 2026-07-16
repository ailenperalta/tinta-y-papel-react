import { useCart } from "../../context/CartContext";
import {
    HiOutlineMinus,
    HiOutlinePlus,
    HiOutlineTrash
} from "react-icons/hi2";
import "./Cart.css";

export const CartItem = ({ item }) => {
    const {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useCart();

    const subtotal = item.price * item.quantity;

    return (
        <article className="cart-item">
            <img
                src={item.image}
                alt={`Foto de ${item.name}`}
                className="cart-item-image"
            />

            <div className="cart-item-content">
                <div className="cart-item-main">
                    <h3 className="cart-item-title">{item.name}</h3>

                    <p className="cart-item-author">
                        {item.author}
                    </p>

                    <div className="cart-item-details">
                        <p>
                            <span>Cantidad:</span>
                        </p>

                        <div className="quantity-controls">
                            <button
                                type="button"
                                onClick={() => decreaseQuantity(item.id)}
                                disabled={item.quantity === 1}
                                aria-label="Disminuir cantidad"
                            >
                                <HiOutlineMinus />
                            </button>

                            <span className="quantity-value">
                                {item.quantity}
                            </span>

                            <button
                                type="button"
                                onClick={() => increaseQuantity(item.id)}
                                aria-label="Aumentar cantidad"
                            >
                                <HiOutlinePlus />
                            </button>
                        </div>

                        <p>
                            <span>Precio unitario:</span> ${item.price}
                        </p>
                    </div>
                </div>

                <div className="cart-item-side">

                    <button
                        className="cart-delete-btn"
                        onClick={() => removeFromCart(item.id)}
                    >
                        <HiOutlineTrash />
                    </button>

                    <p className="cart-item-subtotal">
                        Subtotal: ${subtotal}
                    </p>
                </div>
            </div>
        </article>
    );
};