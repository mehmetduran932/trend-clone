import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
export default function NaviBox() {
  return (
    <div>
      <Flex color="black">
        <Box flex="1" bg="tomato">
          <Text>Kadın</Text>
        </Box>
        <Box flex="1" bg="tomato">
          <Text>Erkek</Text>
        </Box>
        <Box flex="1" bg="tomato">
          <Text>Çocuk</Text>
        </Box>
        <Box flex="1" bg="tomato">
          <Text>Ev-Yaşam</Text>
        </Box>
        <Box flex="1" bg="tomato">
          <Text>Süpermarket</Text>
        </Box>
        <Box flex="1" bg="tomato">
          <Text>Kozmetik</Text>
        </Box>
        <Box flex="1" bg="tomato">
          <Text>Ayakkabı-Çanta</Text>
        </Box>
        <Box flex="1" bg="tomato">
          <Text>Saat-Aksesuar</Text>
        </Box>
        <Box flex="1" bg="tomato">
          <Text>Elektronik</Text>
        </Box>
        <Box flex="1" bg="tomato">
          <Text>Spor-Outdoor</Text>
        </Box>
      </Flex>
    </div>
  );
}
