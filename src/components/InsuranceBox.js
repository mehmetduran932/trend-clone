import React from "react";
import { Box, Flex, Image, Radio } from "@chakra-ui/react";
import PopoverBox from "./PopoverBox";

export default function InsuranceBox() {
  return (
    <div>
      <div className="sigorta-box">
        <Flex>
          <Box
            p="2"
            border="solid 2px gray"
            h="150px"
            w="800px"
            bg="gray.50"
            borderRadius="lg"
          >
            <p>Ürününüz için uygun fiyatlara ek hizmet seçebilirsiniz:</p>
            <div>
              <Radio colorScheme="red" value="1">
                <Image
                  w="200px"
                  h="20px"
                  src="https://cdn.dsmcdn.com/ty204/product/inventory/vas/seller-logo-463180-trendyol-sigorta.jpg"
                  alt="sigorta"
                />
              </Radio>
              <PopoverBox />
            </div>
            <div>
              <p>Elektronik Cihaz Koruma Sigortası</p>
              <p className="cüzdan-color">573TL</p>
            </div>
          </Box>
        </Flex>
      </div>
    </div>
  );
}
