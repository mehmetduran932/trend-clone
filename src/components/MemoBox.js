import React from "react";
import "../App.css";
import { Box, Flex } from "@chakra-ui/react";

export default function MemoBox({ memo }) {
  return (
    <div>
      <div>
        <Flex>
          <Box p="1" border="solid 2px orange" bg="orange.50" borderRadius="lg">
            <p className="gb-stil">{memo}</p>
          </Box>
        </Flex>
      </div>
    </div>
  );
}
