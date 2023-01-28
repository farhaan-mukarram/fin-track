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
      marginTop={marginTop ?? "0"}
      align="center"
      paddingX="7"
      width="100%"
      marginBottom={marginBottom ?? "0"}
      direction={direction ?? "row"}
    >
      <Image src={imageUrl} maxHeight="30rem" maxWidth="35rem" />
      <Stack paddingX="8">
        <Heading as="h2" fontSize="6xl" fontWeight="bold" textColor="blue.500">
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
