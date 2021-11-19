import React from "react";
import { Alert, AlertIcon, Stack } from "@chakra-ui/react";

export default function AddToCartError() {
  return (
    <div>
      <Stack spacing={3}>
        <Alert status="error">
          <AlertIcon />
          Sepete Bu Üründen En Fazla 3 Adet Ekleyebilirsiniz...
        </Alert>
      </Stack>
    </div>
  );
}
