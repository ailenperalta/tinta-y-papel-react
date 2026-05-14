import "./Item.css";

export const Item = ({ name, author, price, image, children }) => {
    return (
        <article className="card">
            <img src={image} alt={`Foto de ${name}`} />
            <div className="card-info">
                <h3>{name}</h3>
                <p className="author">{author}</p>
                <p className="price">${price}</p>
                {children}
            </div>    
        </article>
    );
};