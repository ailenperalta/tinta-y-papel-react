import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";
import logo from "../../assets/logo.png";

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to={"/"}>
                    <img src={logo} />
                </Link>
            </div>
            <Nav />
        </header>
    );
};