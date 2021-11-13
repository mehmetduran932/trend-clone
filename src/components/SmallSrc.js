import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { products } from "../api/product";
export default function SmallSrc() {
  return (
    <div>
      {products[0].image.map((p) => {
        return (
          <div className="yasla-hafiza">
            {" "}
            <Flex>
              <Box p="2" h="50px" border="solid 2px orange" borderRadius="lg">
                <Image
                  boxSize="20px"
                  src={p}
                  alt="telefon"
                />
              </Box>
            </Flex>
          </div>
        );
      })}
    </div>
  );
}
