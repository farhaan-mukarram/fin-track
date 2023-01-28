import { Image } from "@chakra-ui/image";

import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";

import Navbar from "../components/Navbar";
import savingsImageUrl from "../assets/savings_illustration.svg";
import paymentImageUrl from "../assets/payments_illustration.svg";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Flex
        as="header"
        alignItems="center"
        justify="center"
        marginTop="20"
        width="100%"
      >
        <Stack
          direction="column"
          align="center"
          paddingX="16"
          maxWidth="7xl"
          marginX="auto"
          width="100%"
          spacing="2"
        >
          <Heading
            as="h2"
            fontSize="6xl"
            fontWeight="bold"
            textColor="blue.500"
          >
            FinTrack
          </Heading>

          <Text as="h3" fontSize="4xl">
            Simplifying Your Finances
          </Text>
          <Text as="p" fontSize="xl">
            Easily track your income and expenses, and set budgets all in one
            place!
          </Text>
        </Stack>
      </Flex>

      <Flex
        as="section"
        marginTop="32"
        align="center"
        paddingX="7"
        width="100%"
      >
        <Image src={savingsImageUrl} maxHeight="30rem" maxWidth="35rem" />
        <Stack paddingX="8">
          <Heading
            as="h2"
            fontSize="6xl"
            fontWeight="bold"
            textColor="blue.500"
          >
            Lorem ipsum dolor sit.
          </Heading>
          <Text as="p" fontSize="2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vero
            quas laudantium, tenetur dignissimos error reprehenderit ab
            voluptate esse porro!
          </Text>
        </Stack>
      </Flex>

      <Flex
        as="section"
        marginTop="32"
        align="center"
        paddingX="7"
        direction="row-reverse"
        width="100%"
      >
        <Image src={paymentImageUrl} maxHeight="30rem" maxWidth="40rem" />
        <Stack paddingX="8">
          <Heading
            as="h2"
            fontSize="6xl"
            fontWeight="bold"
            textColor="blue.500"
          >
            Lorem ipsum dolor sit.
          </Heading>
          <Text as="p" fontSize="2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vero
            quas laudantium, tenetur dignissimos error reprehenderit ab
            voluptate esse porro!
          </Text>
        </Stack>
      </Flex>
    </>
  );
};

export default LandingPage;
