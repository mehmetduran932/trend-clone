import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Products({ src, name, price, detail, id }) {
  return (
    <div>
      <Box maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Link to={"/productdetail/" + id}>
          <Image src={src} alt="telefon" w="100px" h="100px" />
        </Link>

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              <h3>
                <Link to={"/productdetail/" + id}>{name}</Link>
              </h3>
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            <h3>
              <Link to={"/productdetail/" + id}>{detail}</Link>
            </h3>
          </Box>

          <Box>
            <h3>{price}-TL</h3>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
