import { Button } from "@chakra-ui/react";
import { Link, Stack } from "@chakra-ui/layout";

const NavbarLinks = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      align={{ base: "flex-start", md: "center" }}
      spacing="10"
      backgroundColor="blue.500"
    >
      <Link textColor="white" fontSize="1rem" fontWeight="bold">
        Home
      </Link>

      <Link textColor="white" fontSize="1rem" fontWeight="bold">
        FAQ
      </Link>

      <Link textColor="white" fontSize="1rem" fontWeight="bold">
        Contact
      </Link>
      <Button
        textColor="#4A89DC"
        fontSize="1rem"
        fontWeight="bold"
        backgroundColor="white"
      >
        Sign up
      </Button>
    </Stack>
  );
};

export default NavbarLinks;
