import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsService";
import "./ItemDetailContainer.css"

export const ItemDetailContainer = () => {
    const { id } = useParams();

    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id)
            .then((data) => setItemDetail(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="loading">Cargando...</p>;
    if (!itemDetail) return <p className="error">Producto no encontrado</p>;

    return (
        <section className="detail-section">
            <ItemDetail item={itemDetail} />
        </section>
    );
};