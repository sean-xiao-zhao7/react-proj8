import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const id = useParams().id;

    return (
        <div>
            <h1>Product details {id}</h1>
            <div></div>
        </div>
    );
};

export default ProductDetails;
