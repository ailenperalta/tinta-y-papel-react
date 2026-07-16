import { Link } from "react-router-dom";
import {
    HiOutlineBookOpen,
    HiOutlineArrowLeft,
    HiOutlineCheck
} from "react-icons/hi2";

export const ProductFormUI = ({
    product,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit,
}) => {
    return (
        <section>
            <form className="product-form" onSubmit={onSubmit}>

                <h2 className="form-title">
                    <HiOutlineBookOpen className="form-icon" />
                    Agregar nuevo producto
                </h2>

                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={onChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <label>Autor/a:</label>
                    <input
                        type="text"
                        name="author"
                        value={product.author}
                        onChange={onChange}
                    />
                    {errors.author && <p className="error">{errors.author}</p>}
                </div>

                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={onChange}
                    />
                    {errors.description && <p className="error">{errors.description}</p>}
                </div>

                <div className="form-group">
                    <label>Precio:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={onChange}
                        min="0"
                    />
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>

                <div className="form-group">
                    <label>Imágen:</label>
                    <input type="file" accept="image/*" onChange={onFileChange} />
                    {errors.file && <p className="error">{errors.file}</p>}
                </div>

                <div className="form-actions">
                    <button
                        className="btn-primary"
                        type="submit"
                        disabled={loading}
                    >
                        <HiOutlineCheck />
                        {loading ? "Guardando..." : "Guardar"}
                    </button>

                    <Link
                        to="/admin/dashboard"
                        className="btn-primary"
                    >
                        <HiOutlineArrowLeft />
                        Volver
                    </Link>
                </div>

                {errors.general && <p className="error">{errors.general}</p>}
            </form>
        </section>
    );
}