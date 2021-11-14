import React,{useEffect} from "react";
import { connect } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

function CartDetail({ cart }) {
    useEffect(() => {
        console.log("sepet:",cart)
    }, [cart]);
  return (
    <div>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Product Name</Th>
            <Th>Unit Price</Th>
            <Th>Quantity</Th>

            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.map((cartItem) => (
            <Tr>
              <Th scope="row">{cartItem.id}</Th>
              <Td>{cartItem.productName}</Td>
              <Td>{cartItem.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}
export default connect(mapStateToProps)(CartDetail);
