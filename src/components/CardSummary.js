import React, { useState, useEffect } from "react";
import { Box, Flex, Spacer, Divider } from "@chakra-ui/react";
import { connect } from "react-redux";


function CardSummary({ cart }) {
  const[count,setCount]=useState(0);

  useEffect(() => {
   
    let totalPrice = 0;
    cart.map((p) => (totalPrice += p.price));
    setCount(totalPrice);
  }, [count]);

 
  return (
    <div>
      <Box
        width="300px"
        height="500px"
        border="groove"
        borderRadius="lg"
        overflow="hidden"
      >
        <h4>Sepet Özeti</h4>
        <Divider w="300px" orientation="horizontal" />
        <Flex>
          <Box>
            <h1>Ürün Toplamı {count} TL</h1>
            <h1>Kargo Toplam </h1>
            <Divider w="300px" orientation="horizontal" />
            <h1>Sepet Toplamı {count} TL</h1>
          </Box>

          <Spacer />
          <Box p="4" bg="white.400"></Box>
        </Flex>
      </Box>
    </div>
  );
}
function mapStateToProps(state) {
    return {
      cart: state.cart,
    };
  }
export default connect(mapStateToProps)(CardSummary)