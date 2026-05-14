import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";
import "./ItemDetail.css"

export const ItemDetail = ({ item }) => {
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
            <img src={image} alt={`Foto de ${name}`} className="detail-image"/>
            <div className="detail-info">
                <h2>{name}</h2>
                <p className="detail-author">{author}</p>
                <p className="detail-description">{description}</p>
                <p className="detail-price">${price}</p>
                <button className="btn primary" onClick={() => addToCart(item)}>
                    Agregar al carrito
                </button>
            </div>
        </section>
    );
}