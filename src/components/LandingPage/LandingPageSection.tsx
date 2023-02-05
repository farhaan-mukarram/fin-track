import { Image } from "@chakra-ui/image";

import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";

type LandingPageSectionProps = {
  imageUrl: string;
  marginTop?: string;
  marginBottom?: string;
  headingText: string;
  paragraphText: string;
  direction?: "row" | "row-reverse";
};

const LandingPageSection = ({
  imageUrl,
  marginTop,
  marginBottom,
  headingText,
  paragraphText,
  direction,
}: LandingPageSectionProps) => {
  return (
    <Flex
      as="section"
      marginTop={{ base: marginTop ?? "0" }}
      align="center"
      paddingX="7"
      width="100%"
      marginBottom={marginBottom ?? "0"}
      direction={{ base: "column", md: direction ?? "row" }}
    >
      <Image
        src={imageUrl}
        height="auto"
        minWidth="22rem"
        maxHeight="30rem"
        maxWidth={{ base: "100%", md: "35rem" }}
        width="100%"
        paddingX={{ base: "8", md: "0" }}
      />

      <Stack paddingX="8" marginTop={{ base: "8", md: "0" }}>
        <Heading as="h2" fontSize="5xl" fontWeight="bold" textColor="blue.500">
          {headingText}
        </Heading>
        <Text as="p" fontSize="2xl">
          {paragraphText}
        </Text>
      </Stack>
    </Flex>
  );
};

export default LandingPageSection;
