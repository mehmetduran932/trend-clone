import React,{useEffect} from "react";
import { connect } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import CartEmptyError from "./CartEmptyError";

function CartDetail({ cart }) {
    useEffect(() => {
        console.log("sepet:",cart)
    }, [cart]);
    if(cart.length===0){
        return(
            <div><CartEmptyError/></div>
        )
    }
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
              <Td>{cartItem.quantity}</Td>
              

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
