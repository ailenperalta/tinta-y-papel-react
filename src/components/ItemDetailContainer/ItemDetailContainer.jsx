import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"

export const ItemDetailContainer = () => {
    const { id } = useParams();

    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/products.json")
        .then((res) => res.json())
        .then(data => {
            const item = data.find((element) => String(element.id) === id);
            if (item) {
                setItemDetail(item);
                return;
            }

            throw new Error("Elemento no encontrado");
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p className="loading">Cargando...</p>;
    if (!itemDetail) return <p className="error">Producto no encontrado</p>;

    return (
        <section className="detail-section">
            <ItemDetail item={itemDetail} />
        </section>
    );
};