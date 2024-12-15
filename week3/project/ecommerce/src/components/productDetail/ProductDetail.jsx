import { useState } from "react";
import FavoriteButton from "../shared/FavoriteButton";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    // Existing fetch logic...

    return (
        <div className="product-detail">
            <div className="product-header">
                <h2>{product.title}</h2>
                <FavoriteButton id={product.id} />
            </div>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
};

export default ProductDetail;