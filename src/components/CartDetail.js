import React, { useEffect, useState } from "react";
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

function CartDetail({ carts, removeFromCart }) {
  const [currentCarts, setCurrentCarts] = useState([]);

  useEffect(() => {
    if (carts.length > 0) {
      setCurrentCarts(carts);
    }
  }, [carts]);

  const cartRemove = (cartItem) => {
    let filtered = [];
    filtered = currentCarts.filter((item) => item !== cartItem);
    removeFromCart(filtered);
  };

  const decrease = (cartItem) => {
    if (cartItem.quantity !== 0) {
      let filtered = [];
      filtered = currentCarts.filter((item) => item.id !== cartItem.id);
      cartItem.quantity -= 1;
      filtered.push(cartItem);
      setCurrentCarts(filtered);
    }
  };

  const increase = (cartItem) => {
    let filtered = [];
    filtered = currentCarts.filter((item) => item.id !== cartItem.id);
    cartItem.quantity += 1;
    filtered.push(cartItem);
    setCurrentCarts(filtered);
  };

  return (
    <div>
      <Flex color="black">
        <Box flex="3" bg="white">
          {currentCarts.length > 0 ? (
            currentCarts.map((cartItem) => (
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
                  <Button
                    h="50"
                    mr="-px"
                    color="orange"
                    onClick={() => decrease(cartItem)}
                  >
                    -
                  </Button>
                  <Button h="50" mr="-px" color="black">
                    {cartItem.quantity}
                  </Button>
                  <Button
                    h="50"
                    mr="-px"
                    color="orange"
                    onClick={() => increase(cartItem)}
                  >
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
            ))
          ) : (
            <div>
              <CartEmptyError />
            </div>
          )}
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
    carts: state.cart,
  };
}
export default connect(mapStateToProps, { removeFromCart })(CartDetail);