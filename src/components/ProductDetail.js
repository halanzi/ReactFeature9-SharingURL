// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";

import { Link, Redirect, useParams } from "react-router-dom";

// States
import productStore from "../stores/productStore";
import { observer } from "mobx-react";

const ProductDetail = (props) => {
  const productId = useParams().productId;
  const product = productStore.products.find(
    (product) => product.id === +productId
  );

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
      <DeleteButton productId={product.id} />
    </DetailWrapper>
  );
};

export default observer(ProductDetail);
