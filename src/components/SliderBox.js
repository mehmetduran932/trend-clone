import React from "react";
import { Box, Image } from "@chakra-ui/react";
export default function SliderBox() {
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
          src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty107/product/media/images/20210422/10/82049749/166328188/1/1_org_zoom.jpg"
          alt="telefon"
        />
      </Box>
    </div>
  );
}
