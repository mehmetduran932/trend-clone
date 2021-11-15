import React from "react";
import { Grid, Box, Image, Input, Flex, Text,Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)" color="black">
        <Link to="/">
          <Box w="100%" h="20">
            <Image
              h="30"
              w="30"
              src="https://cdn.dsmcdn.com/web/logo/ty-logo.svg"
            />
          </Box>
        </Link>
        <Box w="100%" h="20">
          <Input
            w="600px"
            placeholder="Aradığınız ürün, kategori veya markayı yazınız"
          />
        </Box>
        <Spacer/>

        <Flex color="black">
          <Box p="2" bg="white">
            <Text>Hesabım</Text>
          </Box>
          <Box p="2" bg="white">
            <Text>Favorilerim</Text>
          </Box>
          <Box p="2" bg="white">
          <Link to="/CartDetail"><Text>Sepetim</Text></Link>
          </Box>
        </Flex>
      </Grid>
    </div>
  );
}
