import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import SliderBox from "./SliderBox";
import TitleBox from "./TitleBox";
import "../App.css";
import { products } from "../api/product";
export default function MainBox({ ...props }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let id = props.match.params.id;
    let currentProduct = products.find((item) => item.id == id);
    setProduct(currentProduct);
  }, [props.match.params.id]);

  return (
    <div className="ust-bosluk">
      {product && (
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
                <SliderBox id={product.id} src={product.src} />;
              </Box>

              <Box p="4" h="800px" w="100%" bg="white.400" color="black">
                <TitleBox
                  id={product.id}
                  name={product.productName}
                  mark={product.mark}
                  image={product.image}
                  src={product.src}
                  price={product.price}
                  detail={product.detail}
                  memo={product.memo}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      )}
    </div>
  );
}
