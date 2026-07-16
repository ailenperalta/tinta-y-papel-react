import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Count } from "../Count/Count";
import "./ItemDetail.css"

export const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const {
        name,
        author,
        image,
        description,
        price
    } = item;

    return (
        <section className="detail-container">
            <img src={image} alt={`Foto de ${name}`} className="detail-image" />
            <div className="detail-info">
                <h2>{name}</h2>
                <p className="detail-author">{author}</p>
                <p className="detail-description">{description}</p>
                <p className="detail-price">${price}</p>
                
                <div className="purchase-section">
                    <p className="quantity-title">
                        Cantidad
                    </p>
                    
                    <Count
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />

                    <button
                        className="btn primary add-cart-btn"
                        onClick={() => addToCart(item, quantity)}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </section>
    );
}