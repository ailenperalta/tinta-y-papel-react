import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";

export const CartList = () => {
    const { cart } = useCart();

    return (
        <div className="cart-items-container">
            {cart.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
}