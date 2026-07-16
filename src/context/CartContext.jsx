import { useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }

    return context;
};

export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");

        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const isInCart = (item) => {
        const inCart = cart.some(element => element.id === item.id);
        return inCart;
    };

    const addToCart = (item, quantity) => {

        if (isInCart(item)) {

            const updatedCart = cart.map((element) => {

                if (element.id === item.id) {
                    return {
                        ...element,
                        quantity: element.quantity + quantity,
                    };
                }

                return element;
            });

            setCart(updatedCart);
            alert("Cantidad actualizada");

            return;
        }

        setCart([
            ...cart,
            {
                ...item,
                quantity,
            },
        ]);

        alert("Producto agregado al carrito");
    };

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(element => element.id !== id);
        setCart(updatedCart);
        alert("Producto eliminado del carrito");
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        return cart.reduce(
            (acc, item) => acc + item.quantity,
            0
        );
    };

    const getTotalPrice = () => {
        return cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
    };

    const checkout = () => {
        alert("Su compra ha sido realizada");
        clearCart();
        navigate("/");
    };

    const values = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
        checkout
    };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};
