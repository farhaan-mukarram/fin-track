import { Button } from "@chakra-ui/react";
import { Box, Flex, Link, Heading, HStack } from "@chakra-ui/layout";

const Navbar = () => {
  return (
    <>
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        background="#4A89DC"
        paddingX="20"
        paddingY="4"
        width="100%"
      >
        <Box>
          <Heading
            as="h1"
            fontWeight="extrabold"
            fontSize="3xl"
            textColor="white"
          >
            FinTrack
          </Heading>
        </Box>

        <>
          <HStack align="center" spacing="10">
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
          </HStack>
        </>
      </Flex>
    </>
  );
};

export default Navbar;
