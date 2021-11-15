import React, { useEffect } from "react";
import { connect } from "react-redux";
import CartEmptyError from "./CartEmptyError";
import CardSummary from "./CardSummary";
import { removeFromCart } from "../redux/actions/cartActions";
import {
  Box,
  Flex,
  Image,
  Text,
  HStack,
  Checkbox,
  Button,
} from "@chakra-ui/react";

function CartDetail({ cart, removeFromCart }) {
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
  const cartRemove = (cartItem) => {
    let filtered = [];
    filtered = cart.filter((item) => item !== cartItem);
    removeFromCart(filtered);
  };
  return (
    <div>
      <Flex color="black">
        <Box flex="3" bg="white">
          {cart.map((cartItem) => (
            <Flex color="black" border="2px groove gray" w="1000px">
              <Box flex="1" bg="white">
                <HStack spacing={10} direction="row">
                  <Checkbox size="lg" colorScheme="orange"></Checkbox>
                </HStack>
              </Box>
              <Box flex="1" bg="white">
                <Image src={cartItem.src} h="75" w="100" />
              </Box>
              <Box flex="1" bg="white">
                <Text> {cartItem.productName}</Text>
              </Box>
              <Box flex="1" bg="white">
                <Button h="50" mr="-px" color="orange">
                  -
                </Button>
                <Button h="50" mr="-px" color="black">
                  0
                </Button>
                <Button h="50" mr="-px" color="orange">
                  +
                </Button>
              </Box>

              <Box flex="1" bg="white">
                <Text color="orange">{cartItem.price}</Text>
              </Box>
              <Box flex="1" bg="white">
                <Button
                  h="50"
                  mr="-px"
                  color="orange"
                  onClick={() => cartRemove(cartItem)}
                >
                  X
                </Button>
              </Box>
            </Flex>
          ))}
        </Box>

        <Box flex="1" bg="white">
          <CardSummary />
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
export default connect(mapStateToProps, { removeFromCart })(CartDetail);
