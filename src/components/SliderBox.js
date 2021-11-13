import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function SliderBox({src}) {
  return (
    <div className="bosluklar">
      <Box
        width="500px"
        height="700px"
        border="groove"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image
          src={src}
          alt="telefon"
        />
      </Box>
    </div>
  );
}
