// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";

import { Link, Redirect, useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const productId = useParams().productId;
  console.log(productId);
  const product = props.product[productId - 1];

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <Link to="/products">
        <p onClick={props.selectProduct}>Back to Products</p>
      </Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
