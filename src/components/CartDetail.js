import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import CartEmptyError from "./CartEmptyError";
import CardSummary from "./CardSummary";
import { Box, Flex } from "@chakra-ui/react";

function CartDetail({ cart }) {
  useEffect(() => {
    console.log("sepet:", cart);
  }, [cart]);
  if (cart.length === 0) {
    return (
      <div>
        <CartEmptyError />
      </div>
    );
  }
  return (
    <div>
      <Flex color="black">
        <Box flex="1" bg="white">
          <h1>Box 1</h1>
        </Box>
        <Box flex="3" bg="white">
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
        </Box>

        <Box flex="1" bg="white">
          <CardSummary/>
        </Box>
      </Flex>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}
export default connect(mapStateToProps)(CartDetail);
