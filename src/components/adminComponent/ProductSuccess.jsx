import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineCheck } from "react-icons/hi2";

export const ProductSuccess = () => {
    const { id } = useParams();

    return (
        <section className="success-page">
            <div className="success-icon">
                <HiOutlineCheck />
            </div>
            <h2>Libro cargado con éxito</h2>
            <p>ID de producto: {id}</p>
            <p>Puede cargar otro haciendo click en el botón</p>
            <Link className="btn bg-primary" to="/admin" replace>
                Agregar un nuevo libro
            </Link>
        </section>
    );
}