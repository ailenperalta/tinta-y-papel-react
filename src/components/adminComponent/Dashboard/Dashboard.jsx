import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import {
  HiOutlinePlusCircle,
  HiOutlinePencilSquare,
  HiOutlineTrash,
  HiOutlineArrowLeft,
  HiOutlineArrowRightOnRectangle,
  HiOutlineCog6Tooth
} from "react-icons/hi2";
import "./Dashboard.css";

export const Dashboard = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">

        <div className="dashboard-title">
          <h2>
            <HiOutlineCog6Tooth className="title-icon" />
            Panel de administración
          </h2>

          <p>
            Gestioná los productos de la tienda.
          </p>
        </div>

        <div className="header-actions">
          <Link className="btn primary" to="/">
            <HiOutlineArrowLeft />
            Tienda
          </Link>

          <button
            className="btn bg-delete primary"
            onClick={handleLogout}
          >
            <HiOutlineArrowRightOnRectangle />
            Salir
          </button>
        </div>

      </header>

      <section className="dashboard-actions">

        <h3>Acciones rápidas</h3>

        <div className="actions-grid">

          <Link to="/admin/products/new" className="action-card">
            <HiOutlinePlusCircle />
            <span>Cargar producto</span>
          </Link>

          <Link to="#" className="action-card disabled">
            <HiOutlinePencilSquare />
            <span>Modificar</span>
          </Link>

          <Link to="#" className="action-card disabled">
            <HiOutlineTrash />
            <span>Eliminar</span>
          </Link>

        </div>

      </section>

      <section className="dashboard-help">
        <h3>Ayuda</h3>

        <p>
          Desde este panel podrás administrar el catálogo de libros.
          Próximamente se habilitarán las opciones para modificar y eliminar productos.
        </p>

      </section>
    </div>
  );
};