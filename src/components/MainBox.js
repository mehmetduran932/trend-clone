import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import SliderBox from "./SliderBox";
import TitleBox from "./TitleBox";
import "../App.css";
import { product } from "../api/product";
export default function MainBox() {
  return (
    <div className="ust-bosluk">
      <Flex border="1px groove gray" borderRadius="lg">
        <Box
          p="4"
          h="800px"
          w="700px"
          bg="white.400"
          color="black"
          borderRadius="lg"
        >
          <Flex>
            <Box p="4" h="100%" w="100%" bg="white.400" color="black">
              {product.map((p) => {
                return <SliderBox id={p.id} src={p.src} />;
              })}
            </Box>

            <Box p="4" h="800px" w="100%" bg="white.400" color="black">
              {product.map((p) => {
                return (
                  <TitleBox
                    id={p.id}
                    name={p.productName}
                    mark={p.mark}
                    image={p.image}
                    src={p.src}
                    price={p.price}
                    detail={p.detail}
                    memo={p.memo}
                  />
                );
              })}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
