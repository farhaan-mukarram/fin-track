import { Image } from "@chakra-ui/image";

import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

import Navbar from "../components/Navbar";
import savingsImageUrl from "../assets/savings_illustration.svg";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Flex as="section" marginTop="20" align="center" paddingX="7">
        <Image src={savingsImageUrl} />
        <Box paddingX="5">
          <Heading
            as="h2"
            fontSize="6xl"
            fontWeight="bold"
            textColor="blue.600"
          >
            Lorem ipsum dolor sit.
          </Heading>
          <Text as="p" fontSize="2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vero
            quas laudantium, tenetur dignissimos error reprehenderit ab
            voluptate esse porro!
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default LandingPage;
