import { Box, Flex, Heading } from "@chakra-ui/layout";

const Navbar = () => {
  return (
    <>
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        background="blue.500"
        padding="4"
      >
        <Box>
          <Heading
            as="h1"
            fontWeight="extrabold"
            fontSize="4xl"
            textColor="white"
          >
            FinTrack
          </Heading>
        </Box>
        <Box></Box>
      </Flex>
    </>
  );
};

export default Navbar;
