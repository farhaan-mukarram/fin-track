import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";

const LandingPageHeader = () => {
  return (
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
        <Heading as="h2" fontSize="6xl" fontWeight="bold" textColor="blue.500">
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
  );
};

export default LandingPageHeader;
