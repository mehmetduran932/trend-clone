import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Products from "./Products";
import { products } from "../api/product";
import "../productList.css";
export default function ProductBox() {
  return (
    <div>
      <Flex color="black">
        <Box flex="1" bg="white" width="100px" height="900px">
          <h1>Kategoriler ve Filtreler Buraya</h1>
        </Box>
        <Box
          flex="3"
          bg="white"
          width="1100px"
          height="500px"
          border="groove"
          borderRadius="lg"
          overflow="hidden"
        >
          <div className="container">
            {products.map((p) => {
              return (
                <Products
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
          </div>
        </Box>
        <Box flex="1" bg="white" width="100px" height="900px">
          <h1>Burası Boş kalabilir</h1>
        </Box>
      </Flex>
    </div>
  );
}
