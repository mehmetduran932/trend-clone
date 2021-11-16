import React from "react";
import { Box, Image, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CartEmptyError() {
  return (
    <div>
      <Box
        width="1000px"
        height="200px"
        border="groove"
        borderRadius="lg"
        overflow="hidden"
      >
        <Flex color="black">
          <Box p="4" bg="orange.100" borderRadius="full">
            <Image
              borderRadius="full"
              boxSize="100px"
              src="https://w7.pngwing.com/pngs/321/733/png-transparent-shopping-cart-computer-icons-online-shopping-shopping-cart.png"
              alt="Segun Adebayo"
            />
          </Box>
          <Box>
            <h1>Sepetinde ürün bulunmamaktadır.</h1>
          </Box>

          <Spacer />
          <Box p="4" bg="white.400">
            <Link to={"/"}>
              <Button
                size="md"
                height="48px"
                width="300px"
                textColor="white"
                bg="orange.500"
              >
                Alışverişe Başla
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
