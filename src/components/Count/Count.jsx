import "./Count.css";

export const Count = ({ quantity, setQuantity }) => {
    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="count-container">
            <button
                className="btn primary"
                onClick={decrement}
                disabled={quantity === 1}
            >
                -
            </button>

            <p>{quantity}</p>

            <button className="btn primary" onClick={increment}>
                +
            </button>
        </div>
    );
};