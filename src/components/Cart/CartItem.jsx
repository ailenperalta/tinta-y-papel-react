import { useCart } from "../../context/CartContext";
import "./Cart.css";

export const CartItem = ({ item }) => {
    const { removeFromCart } = useCart();

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
                    <p className="cart-item-author">{item.author}</p>

                    <div className="cart-item-details">
                        <p>
                            <span>Cantidad:</span> {item.quantity}
                        </p>
                        <p>
                            <span>Precio unitario:</span> ${item.price}
                        </p>
                    </div>
                </div>

                <div className="cart-item-side">
                    <p className="cart-item-subtotal">${subtotal}</p>

                    <button
                        className="cart-delete-btn"
                        onClick={() => removeFromCart(item.id)}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </article>
    );
};