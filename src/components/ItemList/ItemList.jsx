import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ products }) => {
    return (
        <div className="products-container">
            {products.length ? (
                products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <Item {...product} />
                    </Link> 
                ))
            ) : (
                <p>No hay productos</p>    
            )}
        </div>
    );
};