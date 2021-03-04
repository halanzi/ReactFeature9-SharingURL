// Styling
import { DeleteButtonStyled } from "../../styles";

// States
import productStore from "../../stores/productStore";

const DeleteButton = (props) => {
  return (
    <DeleteButtonStyled
      onClick={() => productStore.deleteProduct(props.productId)}
    >
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
